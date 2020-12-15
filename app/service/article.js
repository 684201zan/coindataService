const Service = require('egg').Service;
class ArticleService extends Service {
    //获取文章列表
    async findArticle(){
        const { ctx } = this;
        try{
            const result = await this.app.mysql.beginTransactionScope(async conn => {
                const offsetData=(ctx.request.body.pageNo-1)*1*ctx.request.body.pageSize*1
                const row={
                    where: {userId:ctx.request.body.userInfo}, // WHERE 条件
                    columns: ['blog_title','blogId','blog_img','created_time','update_time','blog_content'], // 要查询的表字段
                    limit: ctx.request.body.pageSize*1 , // 返回数据量
                    offset: offsetData, // 数据偏移量
                }
                const row2={
                    userId:ctx.request.body.userInfo, // WHERE 条件
                }
                //查询总条数
                const result1= await this.app.mysql.count('blogName', row2);
                
                //根据分页查询结果
                const resultPage = await this.app.mysql.select('blogName',row); 
               
                return {
                    msg:resultPage,
                    total:result1,
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
    async addArticle(){
        const { ctx } = this;
        try{
            //添加的数据
            const row={
                blog_title:ctx.request.body.blog_title,
                blog_img:ctx.request.body.blog_img,
                blog_content:ctx.request.body.blog_content,
                userId:ctx.request.body.userInfo,
                created_time:this.app.mysql.literals.now,
                update_time:this.app.mysql.literals.now,
            }
            //向文章表里添加数据
            const result = await this.app.mysql.insert('blogName',row);
            if(result.affectedRows === 1){
                return {
                    status:200
                };
            }else{
                return {status:500}
            }
        }catch(err){
            return {
                status:500,
                message:err
            };
        }
       
    }
    //更新文章列表
    async updateArtice(){
        const { ctx } = this;
        try{
            const row = {
                blog_title:ctx.request.body.blog_title,
                blog_img:ctx.request.body.blog_img,
                blog_content:ctx.request.body.blog_content,
                userId:ctx.request.body.userInfo,
                update_time:this.app.mysql.literals.now, 
            };
              
            const options = {
                where: {
                    blogId: ctx.request.body.blogId
                }
            };
            const result = await this.app.mysql.update('blogName', row, options);
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
    //删除文章列表
    async delArticle(){
        const { ctx } = this;
        try{
            const result = await this.app.mysql.delete('blogName', {
                blogId: ctx.request.body.blogId,
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

module.exports = ArticleService;