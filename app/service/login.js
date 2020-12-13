const Service=require('egg').Service;

class LoginService extends Service{
    //添加信息
    async insertInfo(){
        try {
            const user = await this.app.mysql.insert('blogUser',{"account":"admin","password":"123456"});
            console.log(user)
        } catch (error) {
            error.message; // "Oops!"
        }
        
    }
    async findUser(){

    }
}

module.exports=LoginService;