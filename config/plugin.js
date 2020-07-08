'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  eggApmAgent: {
    enable: true,
    package: 'egg-apm-agent',
    // env: [ 'prod' ], // 建议只在生产环境中启用
  },
};
