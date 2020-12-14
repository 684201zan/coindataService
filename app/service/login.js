const Service=require('egg').Service;

class LoginService extends Service{
    
    //添加信息
    async insertInfo(accountObj){
        const user = await this.app.mysql.insert('blogUser',accountObj); 
        return user; 
    }
    //登录信息
    async findUser(accountObj){
        const findAccount = await this.app.mysql.get('blogUser', accountObj);
        return findAccount;
    }
}

module.exports=LoginService;