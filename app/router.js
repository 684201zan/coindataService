// app定义整个路由规则
module.exports= app => {
    const { router,controller,jwt} = app;
    //pc登录
    router.post('/pc/api/login',controller.login.index);
    //pc注册
    router.post('/pc/api/register',controller.login.register)

    router.resources('article', '/pc/api/article',jwt,'article');
};
