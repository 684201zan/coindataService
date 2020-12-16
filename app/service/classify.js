const Service = require('egg').Service;
class ClassifyService extends Service {
    //获取文章列表
    async index(){
        const { ctx } = this;
        try{
            const result = await this.app.mysql.beginTransactionScope(async conn => {
                const offsetData=(ctx.request.body.pageNo-1)*1*ctx.request.body.pageSize*1
                const row={
                    where: {user_id:ctx.request.body.userInfo}, // WHERE 条件
                    limit: ctx.request.body.pageSize*1 , // 返回数据量
                    offset: offsetData, // 数据偏移量
                }
                const row2={
                    user_id:ctx.request.body.userInfo, // WHERE 条件
                }
                //查询总条数
                const result1= await this.app.mysql.count('classify', row2);
                
                //根据分页查询结果
                const resultPage = await this.app.mysql.select('classify',row); 
               
                return {
                    msg:resultPage,
                    total:result1,
                    pageNo:ctx.request.body.pageNo*1,
                    pageSzie:ctx.request.body.pageSize*1,
                    totalPage:Math.ceil(result1/ctx.request.body.pageSize*1)
                };
            
            }, ctx);
            return {
                status:200,
                msg:result,
            };
        } catch(err) {
            return {
                status:500,
                message:err
            };
        }
    }
    //添加文章列表
    async addclassify(){
        const { ctx } = this;
        try{
            //添加的数据
            const row={
                class_name:ctx.request.body.class_name,
                created_time:this.app.mysql.literals.now,
                update_time:this.app.mysql.literals.now,
                user_id:ctx.request.body.userInfo
            }
            //向文章表里添加数据
            const result = await this.app.mysql.insert('classify',row);

            if(result.affectedRows === 1){
                return {status:200};
            }else{
                return {status:500};
            }
        }catch(err){
            return {
                status:500,
                message:err
            };
        }
       
    }
    //更新文章列表
    async updateclassify(){
        const { ctx } = this;
        try{
            const row = {
                class_name:ctx.request.body.class_name,
                user_id:ctx.request.body.userInfo,
                update_time:this.app.mysql.literals.now, 
            };
              
            const options = {
                where: {
                    classId: ctx.request.body.classId
                }
            };

            const result = await this.app.mysql.update('classify', row, options);
           
            if(result.affectedRows === 1){
                return {
                    status:200
                };
            }else{
                return {status:500}
            }
        } catch (err){
            return {
                status:500,
                message:err
            };  
        }
    }
    //删除分类列表
    async delclassify(){
        const { ctx } = this;
        try{
            const result = await this.app.mysql.delete('classify', {
                classId: ctx.request.body.classId,
            });
            if(result.affectedRows === 1){
                return {
                    status:200
                };
            }else{
                return {status:500}
            }
        } catch (err){
            return {
                status:500,
                message:err
            };
        }
        
    }
}

module.exports = ClassifyService;