'use strict';
const { Transport } = require('egg-logger');

module.exports = class ApmErrorTransport extends Transport {
  constructor(options, apm) {
    super(options);
    this.apm = apm;
  }

  log(_level, args) {
    if (!args[0]) {
      return;
    }
    this.apm.captureError(args[0]); // 上传到apm
  }
};
