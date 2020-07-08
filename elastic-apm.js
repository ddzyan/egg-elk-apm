'use strict';

let apm;

if (
  !process.env.ELASTIC_APM_SERVICE_NAME ||
  !process.env.ELASTIC_APM_SERVER_URL
) {
  console.error(
    'Missing ELASTIC_APM_SERVER_URL or ELASTIC_APM_SERVICE_NAME, failed to luanch apm agent...'
  );
} else {
  console.log('Start apm agent...');
  // apm options 将直接从应用环境变量中读取，并且进行初始化
  apm = require('elastic-apm-node').start({
    // captureBodyedit: 'all',
    metricsInterval: 0,
  });
  apm.addPatch('egg', require.resolve('./instrumentation/egg'));
  apm.addPatch(
    '@eggjs/router',
    require.resolve('./instrumentation/egg-router')
  );
  apm.addFilter(payload => {
    const method =
      payload.context &&
      payload.context.request &&
      payload.context.request.method;
    return method === 'HEAD' ? false : payload;
  });
}

module.exports = apm;
