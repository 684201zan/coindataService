//appInfo.name应用名
module.exports = appInfo => {
    const config = exports = {};
    
    config.keys = appInfo.name + '_1570612395695_7299';
    
    config.middleware = [ 'errorHandler' ];
    
    config.security = {
        csrf: {
          enable: false,
        },
        domainWhiteList:[ '*' ],//允许访问接口的白名单，例如：http://localhost:8080 *表示均可访问
    };
    
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    
    config.jwt = {
        secret: "123456"
    };




    return config;
  };