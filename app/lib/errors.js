/**
 * HTTP接口响应错误
 * @param {number} code 错误码
 * @param {string} message 错误消息
 * @param {*} data 错误数据
 */
function HttpResponseError(code, message, data) {
  this.name = 'HttpResponseError';
  this.code = code;
  this.message = message;
  this.data = data;
  Error.call(this, message);
  Error.captureStackTrace(this, this.constructor);
}

HttpResponseError.prototype = Object.create(Error.prototype);
HttpResponseError.prototype.constructor = HttpResponseError;

module.exports = { HttpResponseError };
