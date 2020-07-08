'use strict';

module.exports = app => {
  // 中间件，修正apm transaction unknown router
  app.config.middleware.unshift('apmRouter');
};
