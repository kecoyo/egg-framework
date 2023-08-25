import 'egg';

declare module 'egg' {
  export interface Application {
    /**
     * 测试
     *
     * @param {any} data 测试参数
     * @returns {void}
     */
    testEgg(data: any): void;
  }

  export interface Context {
    /**
     * 测试
     *
     * @param {any} data 测试参数
     * @returns {void}
     */
    testEgg(data: any): void;
  }

  export interface EggAppConfig {}
}
