'use strict';

function getPath(stack, path) {
  const layer = stack.find(i => i.regexp.test(path));
  const protoPath = layer && layer.path;
  return typeof protoPath === 'string' ? protoPath : 'unknown route';
}

module.exports = () => {
  return async (ctx, next) => {
    const path = getPath(ctx.app.router.stack, ctx.path);
    ctx.app.apm.setTransactionName(ctx.method + ' ' + path); // fix unknown router

    await next();
  };
};
