module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.31.122:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: ' meituannn',   //七牛云bucket
    AccessKey: 'usqLfA7J-5CrHTU3lcIBqmEv3Q2uSr9Id9tg2ZeG',   //七牛云accessKey
    SecretKey: 'V-UnvSzaligh-2Gfai9s0dWTSGqvZ7hIbs2qSDKX',    //七牛云secretKey
    tencentkey: 'RTVBZ-B5PCF-SPLJF-JERYN-ZGHAE-ZHFEM',        //腾讯位置secreKey
    tencentkey2: 'RTVBZ-B5PCF-SPLJF-JERYN-ZGHAE-ZHFEM',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥

};


