//编写关于文章的controller
const baseController = require('./baseController');
const createRule = {
    pageNo:  { type: 'string' },
    pageSize: { type: 'string' },
};
const createRule2 = {
    blog_title:  { type: 'string' },
    blog_content: { type: 'string' },
};
const createRule3 = {
    blogId:  { type: 'string' },
};

class ArticleController extends baseController {
    //获取文章列表
    async index(){
        const { ctx } = this;
        try{
            const findArticle=await ctx.service.article.findArticle();
            if(findArticle.status==200){
                ctx.body={
                    message:"获取列表成功",
                    data:findArticle.msg
                }
                ctx.status = 200;
            } else {
                ctx.body={
                    message:"获取列表失败,请稍后重试"
                }
                ctx.status = 500;
            }
        }catch(err){
            ctx.logger.error(err);
            ctx.body={
                message:err||"服务器错误"
            }
            ctx.status = 500;
        }
    }
    //添加文章列表
    async addArticle(){
        const { ctx } = this;
        try{
            ctx.validate(createRule2);
            const addArticle=await ctx.service.article.addArticle(); 
            if(addArticle.status==200){
                ctx.body={
                    message:"添加成功"
                }
                ctx.status = 200;
            } else {
                ctx.body={
                    message:"添加失败,请稍后重试"
                }
                ctx.status = 500;
            }
        } catch(err){
            ctx.logger.error(err);
            ctx.body={
                message:err||"服务器错误"
            }
            ctx.status = 500;
        }
    }
    //修改文章列表
    async updateArtice(){
        const { ctx } = this;
        try{
            ctx.validate(createRule3);
            const updateArticle=await ctx.service.article.updateArtice();
            if(updateArticle.status==200){
                ctx.body={
                    message:"更新成功"
                }
                ctx.status = 200;
            } else {
                ctx.body={
                    message:"更新失败,请稍后重试"
                }
                ctx.status = 500;
            }
        } catch(err) {
            ctx.logger.error(err);
            ctx.body={
                message:err||"服务器错误"
            }
            ctx.status = 500;
        }
    }
    //删除文章列表
    async delArtice(){
        const { ctx } = this;
        try{
            ctx.validate(createRule3);
            const delArticle=await ctx.service.article.delArticle();
            if(delArticle.status==200){
                ctx.body={
                    message:"删除成功"
                }
                ctx.status = 200;
            } else {
                ctx.body={
                    message:"删除失败,请稍后重试"
                }
                ctx.status = 500;
            }
        } catch(err) {
            ctx.logger.error(err);
            ctx.body={
                message:err||"服务器错误"
            }
            ctx.status = 500;
        }
    }

}

module.exports=ArticleController;