# egg-elkApm

在 egg 框架中接入 elk + apm 日志管理平台

## 备注

1. 应用 http 请求链路日志记录和上传 (完成)
2. 应用错误 error 记录和上传 (完成)
3. 过滤无效路由请求，减少服务压力(完成)

## 使用
### elk 环境搭建
请自行安装docker和docker-compose
```shell
docker run -p 5601:5601 \
    -p 9200:9200 \
    -p 5044:5044 \
    -p 15044:15044/udp \
    -it --name elk sebp/elk
```

### apm 安装
```shell
wget https://artifacts.elastic.co/downloads/apm-server/apm-server-7.8.0-linux-x86_64.tar.gz

gunzip  apm-server-7.8.0-linux-x86_64.tar.gz

tar -xf apm-server-7.8.0-linux-x86_64.tar.gz

mv  apm-server-7.8.0-linux-x86_64.tar.gz apm-server

cd apm-server
```
修改apm-server.yml配置文件
```shell
# vim apm-server.yml
[apm-server.yml]
apm-server:
  host: "0.0.0.0:8200"
kibana:
  enabled: true
  host: "localhost:5601"

  protocol: "http"
  username: "elastic"
  password: "changeme"

output.elasticsearch:
  hosts: ["localhost:9200"]
  username: "elastic"
  password: "changeme"
```

```shell
./apm-server -e
```

打开浏览器地址：http://47.100.16.124:5601/

账号：elastic

密码：changeme

### 启动项目
修改package.json ,将 ELASTIC_APM_SERVER_URL 修改为自己的IP地址
```json
{
  "script":{
    "debug": "ELASTIC_APM_SERVICE_NAME=test-0000 ELASTIC_APM_SERVER_URL='http://10.10.0.130:8200' egg-bin debug --require=egg-apm-agent/apm-register.js",
  }
}
```

```shell
yarn 

yarn run debug

http://127.0.0.1:7001
```

查看后台可以看到日志信息

![](https://i.imgur.com/rJDrwhy.png)