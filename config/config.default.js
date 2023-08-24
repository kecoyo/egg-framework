'use strict';
const path = require('path');

module.exports = (appInfo) => {
  const config = {};

  config.cors = {
    origin: '*',
    allowMethods: 'OPTIONS,GET,POST,HEAD,PUT,DELETE,PATCH',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.bcrypt = {
    saltRounds: 10, // default 10
  };

  config.bodyParser = {
    formLimit: '10mb',
    jsonLimit: '10mb',
    textLimit: '10mb',
  };

  config.multipart = {
    mode: 'file',
    fileSize: '50mb',
    files: 10,
    fileExtensions: [
      // image
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.bmp',
      '.wbmp',
      '.webp',
      '.tif',
      '.psd',
      // text
      '.svg',
      '.js',
      '.jsx',
      '.json',
      '.css',
      '.less',
      '.html',
      '.htm',
      '.xml',
      '.csv',
      // office
      '.doc',
      '.docx',
      '.ppt',
      '.pptx',
      '.xls',
      '.xlsx',
      '.pdf',
      // tar
      '.zip',
      '.gz',
      '.tgz',
      '.gzip',
      // video
      '.mp3',
      '.mp4',
      '.avi',
      '.wav',
      '.mov',
      // 增加对 .apk 扩展名的支持
      '.apk',
    ],
    tmpdir: path.join(appInfo.root, 'app/public/tmp'),
    cleanSchedule: {
      // run tmpdir clean job on every day 04:30 am
      // cron style see https://github.com/eggjs/egg-schedule#cron-style-scheduling
      cron: '0 30 4 * * *',
      disable: true,
    },
  };

  // 配置参数校验器，基于parameter
  config.validate = {
    convert: true, // 对参数可以使用 convertType 规则进行类型转换
    // validateRoot: false, // 限制被验证值必须是一个对象。
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: '',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    pool: {
      max: 50,
      min: 0, // 建立连接最长时间
      acquire: 30000, // 空闲最长连接时间
      idle: 10000,
    },
    dialectOptions: {
      charset: 'utf8mb4',
      decimalNumbers: true, // 默认DECIMAL and NEWDECIMAL 返回 String
    },
    define: {
      freezeTableName: true, // 使用自定义的表名
      underscored: true, // 驼峰式字段默认转为下划线
      createdAt: true, // 添加createAt
      updatedAt: true, // 添加updateAt
      deletedAt: true, // 添加deletedAt
      paranoid: true, // 启用软删除
      timestamps: true, // 添加create,update,delete时间戳
    },
    timezone: '+08:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
  };

  config.jwt = {
    enable: true,
    secret: 'kecoyo-jwt-secret',
    getToken: (ctx) => {
      if (ctx.headers.authorization) {
        return ctx.headers.authorization;
      } else if (ctx.query && ctx.query.token) {
        return ctx.query.token;
      }
      return null;
    },
    sign: { expiresIn: '3d' },
    // options.match and options.ignore can not both present
    match: /^\/jwt/, // 匹配的请求，会走jwt校验，否则忽略；例如登录接口需要被忽略；
  };

  config.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径
    apiInfo: {
      title: '接口文档', // 接口文档的标题
      description: 'swagger 测试接口文档', // 接口文档描述
      version: '1.0.0', // 接口文档版本
    },
    basePath: '/api', // 配置基础路径
    schemes: ['http', 'https'], // 配置支持的协议
    consumes: ['application/json'], // 指定处理请求的提交内容类型 (Content-Type)，如 application/json、text/html
    produces: ['application/json'], // 指定返回的内容类型，仅当 request 请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: {
      apikey: {
        type: 'apiKey',
        name: 'authorization',
        in: 'header',
      },
    }, // 配置接口安全授权方式
    enableSecurity: true, // 是否启用授权，默认 false
    routerMap: true, // 是否启用自动生成路由，默认 true
    enable: true, // 默认 true
  };

  // 七牛对象存储
  config.qiniu = {
    default: {
      ak: '', // Access Key
      sk: '', // Secret Key
      useCdnDomain: true,
      isLog: true,
    },
    app: true,
    agent: false,
  };

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  return config;
};
