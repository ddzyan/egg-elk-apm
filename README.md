# egg-elk-apm

在 egg 框架中接入 elk + apm 日志管理平台


## 操作

### 环境搭建
搭建 elk + apm 平台，请参考 http://www.zmscode.cn/2020/07/09/docker-compose%E9%83%A8%E7%BD%B2eak/

### 启动项目
修改package.json ,将 ELASTIC_APM_SERVER_URL 修改为自己的IP地址
```json
{
  "script":{
    "debug": "ELASTIC_APM_SERVICE_NAME=test-0000 ELASTIC_APM_SERVER_URL='http://10.100.0.130:8200' egg-bin debug --require=egg-apm-agent/apm-register.js",
  }
}
```

```shell
yarn 

yarn run debug

curl 'rhttp://127.0.0.1:7001
```

打开浏览器进入后台：http://127.0.0.1:5601/ , 点击 apm 选择 servicName 为 test-0000 ,查看后台可以看到日志信息

![](https://i.imgur.com/rJDrwhy.png)