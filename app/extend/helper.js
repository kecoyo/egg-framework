const dayjs = require('dayjs');
const md5 = require('md5');

// Helper 函数用来提供一些实用的 utility 函数。
// this 是 helper 对象，在其中可以调用其他 helper 方法
// this.ctx => context 对象
// this.app => application 对象
module.exports = {
  /**
   * 格式化日期
   * @param {string | number | Date} date 要格式化的日期
   * @param {string} [fmt] 格式，默认：YYYY-MM-DD
   * @returns
   */
  formatDate(date, fmt = 'YYYY-MM-DD') {
    return dayjs(date).format(fmt);
  },

  /**
   * 格式化时间
   * @param {string | number | Date} date 要格式化的日期
   * @param {string} [fmt] 格式，默认：YYYY-MM-DD HH:mm:ss
   * @returns
   */
  formatTime(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(date).format(fmt);
  },

  /**
   * 生成md5
   * @param {string | number[] | Uint8Array} message 文本或文件
   * @param {*} [options] options
   * @returns
   */
  md5(message, options) {
    return md5(message, options);
  },
};
