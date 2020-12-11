const Controller = require('egg').Controller;

class loginController extends Controller{
  // 登录
  async index() {
    const { ctx } = this;
    ctx.body={
      id:"登录"
    }
    ctx.status = 200;
  }
  
  //注册(account)
  async register(){
    const { ctx } = this;
    console.log(ctx.request.body)
    ctx.body={
      id:"注册"
    }
    ctx.status = 200;
  }
}

module.exports=loginController;