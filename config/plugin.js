'use strict';

exports.static = {
  enable: true,
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.bcrypt = {
  enable: true,
  package: 'egg-bcrypt',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.errorHandler = {
  enable: true,
  package: '@kecoyo/egg-error-handler',
};

exports.extend = {
  enable: true,
  package: '@kecoyo/egg-extend',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.jwt = {
  enable: true,
  package: '@kecoyo/egg-jwt',
};

exports.qiniu = {
  enable: true,
  package: '@kecoyo/egg-qiniu',
};

exports.swaggerdoc = {
  enable: true,
  package: '@kecoyo/egg-swagger-doc',
};
