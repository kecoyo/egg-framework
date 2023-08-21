module.exports = (app) => {
  // 在中间件最前面处理所有异常请求
  app.config.coreMiddleware.unshift('errorHandler');
};
