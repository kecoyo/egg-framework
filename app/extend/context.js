'use strict';
const { HttpResponseError } = require('../lib/errors');

module.exports = {
  // 接口成功返回
  success(data, msg) {
    this.body = {
      code: 0,
      msg: msg || '请求成功',
      data: data || null,
    };
  },

  // 接口失败返回
  fail(code, msg, data) {
    this.body = {
      code,
      msg: msg || '请求失败',
      data,
    };
  },

  /**
   * 创建一个错误，用于throw抛出
   * @param {number} code 错误码
   * @param {string} message 错误信息
   * @returns
   */
  createError(code, message) {
    return new HttpResponseError(code, message);
  },
};
