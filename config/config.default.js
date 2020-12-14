//appInfo.name应用名
module.exports = appInfo => {
    const config = exports = {};
    
    config.keys = appInfo.name + '_1570612395695_7299';
    
    config.middleware = [ 'errorHandler'];
    
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

    config.mysql={
        client: {
            // host
            host: '148.70.81.229',
            // 端口号
            port: '3306',
            // 用户名
            user: 'mysqlzp',
            // 密码
            password: '684201mysqlzP,',
            // 数据库名
            database: 'coindata',
          },
          // 是否加载到 app 上，默认开启
          app: true,
          // 是否加载到 agent 上，默认关闭
          agent: false,
    }




    return config;
  };