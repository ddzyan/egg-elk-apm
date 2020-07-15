'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async addUser() {
    const { ctx } = this;
    const { name, age } = ctx.request.body;
    ctx.body = {
      name,
      age,
    };
  }

  async getUser() {
    const { ctx } = this;
    const { name } = ctx.request.query;
    ctx.body = {
      name,
    };
  }

  async getError() {
    throw new Error('测试');
  }
}

module.exports = HomeController;
