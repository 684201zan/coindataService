// app定义整个路由规则
module.exports= app => {
    const { router,controller,middleware} = app;
    const jwtErr = middleware.jwtErr(app.config.jwt)
    //pc登录
    router.post('/pc/api/login',controller.login.index);
    //pc注册
    router.post('/pc/api/register',controller.login.register)
    //获取文章列表
    router.post('/pc/api/article',jwtErr,controller.article.index);
    //新增文章列表
    router.post('/pc/api/addArticle',jwtErr,controller.article.addArticle);
    //修改文章列表
    router.post('/pc/api/updateArtice',jwtErr,controller.article.updateArtice);
    //删除文章列表
    router.post('/pc/api/delArtice',jwtErr,controller.article.delArtice);
};
