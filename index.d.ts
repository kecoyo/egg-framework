declare module 'egg' {
  export interface Application {}

  export interface Context {
    /**
     * 接口成功返回
     *
     * @param {any} data 成功数据
     * @param {string} msg 成功消息
     * @returns {void}
     */
    success(data: any, msg?: string): void;

    /**
     * 接口失败返回
     *
     * @param {number} code 错误码
     * @param {string} msg 错误信息
     * @param {any} data 错误数据
     * @returns {void}
     */
    fail(code: number, msg: string, data?: any): void;

    /**
     * 创建一个错误，用于throw抛出
     * @param {number} code 错误码
     * @param {string} message 错误信息
     * @param {any} data 错误数据
     * @returns {Error}
     */
    createError(code: number, message: string, data?: any): Error;
  }

  interface EggAppConfig {}
}
