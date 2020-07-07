'use strict';

module.exports = function (egg, agent, { version, enabled }) {
  if (!enabled) return egg;
  // 注意开启 overwrite，这样才能覆盖 koa 标识
  agent.setFramework({ name: 'egg', version, overwrite: true });
  return egg;
};
