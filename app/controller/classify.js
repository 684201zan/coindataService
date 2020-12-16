const baseController = require('./baseController');

const createRule3 = {
    classId:  { type: 'string' },
};
class classifyController extends baseController{
    async index(){
        const { ctx } = this;
        try{
            const findArticle=await ctx.service.classify.index();
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

    async updateclassify(){
        const { ctx } = this;
        try{
            const updateclassify=await ctx.service.classify.updateclassify(); 
            if(updateclassify.status==200){
                ctx.body={
                    message:"修改成功"
                }
                ctx.status = 200;
            } else {
                ctx.body={
                    message:"修改失败,请稍后重试"
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

    async addclassify(){
        const { ctx } = this;
        try{
            const addclassify=await ctx.service.classify.addclassify(); 
            if(addclassify.status==200){
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

    async delclassify(){
        const { ctx } = this;
        try{
            ctx.validate(createRule3);
            const delclassify=await ctx.service.classify.delclassify();
            if(delclassify.status==200){
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

module.exports=classifyController;