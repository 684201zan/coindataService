const Controller = require('egg').Controller;
const createRule = {
  account:  { type: 'string' },
  password: { type: 'string' },
};
class loginController extends Controller{
  
  // 登录
  async index() {
    const { ctx ,app} = this;
    try{
      ctx.validate(createRule);
      const userFlag = await ctx.service.login.findUser({account:ctx.request.body.account});
      if(userFlag){
        const passwordFlag = await ctx.service.login.findUser(ctx.request.body);       
        if(passwordFlag){
          const token=app.jwt.sign({"userId":passwordFlag.userId}, app.config.jwt.secret);
          ctx.body={
            message:"登录成功",
            status:200,
            token:token
          }
          ctx.status = 200;
        }else{
          ctx.body={
            message:"密码错误",
            status:201,
          }
          ctx.status = 200;
        }
      }else{
        ctx.body={
          message:"账户不存在",
          status:201,
        }
        ctx.status = 200;
      }      
    } catch(err) {
      ctx.logger.error(err);
      ctx.body={
        message:err||"服务器错误",
        status:500,
      }
      ctx.status = 500;
    }
    
  }
  
  //注册(account)
  async register(){
    const { ctx } = this;
    try{
      ctx.validate(createRule);
      const userFlag = await ctx.service.login.findUser({account:ctx.request.body.account});
      if(!userFlag){
        const passwordFlag = await ctx.service.login.insertInfo(ctx.request.body);
        if(passwordFlag){
          ctx.body={
            message:"注册成功"
          }
          ctx.status = 200;
        }else{
          ctx.body={
            message:"注册失败",
            msg:passwordFlag
          }
          ctx.status = 500;
        }
      }else{
        ctx.body={
          message:"账户已存在"
        }
        ctx.status = 200;
      }
    } catch(err){
      ctx.logger.error(err);
      ctx.body={
        message:err||"服务器错误"
      }
      ctx.status = 500;
    }
  }
}

module.exports=loginController;