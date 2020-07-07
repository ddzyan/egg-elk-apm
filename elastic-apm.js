'use strict';

if (
  !process.env.ELASTIC_APM_SERVICE_NAME ||
  !process.env.ELASTIC_APM_SERVER_URL
) {
  console.error(
    'Missing ELASTIC_APM_SERVER_URL or ELASTIC_APM_SERVICE_NAME, failed to luanch apm agent...'
  );
}
{
  console.log('Start apm agent...');
  // apm options 将直接从应用环境变量中读取，并且进行初始化
  const apm = require('elastic-apm-node').start({
    captureBodyedit: 'all',
  });
  apm.addPatch('egg', require.resolve('./instrumentation/egg'));
  apm.addPatch(
    '@eggjs/router',
    require.resolve('./instrumentation/egg-router')
  );
}
