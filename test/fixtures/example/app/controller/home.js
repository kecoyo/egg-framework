'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'framework-example_123456';
  }
}

module.exports = HomeController;
