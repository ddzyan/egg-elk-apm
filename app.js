'use strict';
const apm = require('./elastic-apm');

// const onerror = require('koa-onerror');
const ApmErrorTransport = require('./lib/apm-error-transport');

module.exports = app => {
  // 中间件，修正apm transaction unknown router
  // app.config.middleware.unshift('apmRouter');

  app.beforeStart(async () => {
    // 将APM实例挂载到application对象上面。
    // 目前只有在middleware -> apmRouter 里面使用到 app.apm
    app.apm = apm;
    // 设置错误日志的传输通道。所有logger.error的错误，都会发送到APM上面。
    app
      .getLogger('errorLogger')
      .set('apmError', new ApmErrorTransport({ level: 'ERROR' }, apm));
  });
};
