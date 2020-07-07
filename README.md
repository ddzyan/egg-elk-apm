# egg-elkApm

在 egg 框架中接入 elk+apm 日志管理平台

## 备注

1. 应用 http 请求链路日志记录和上传 (完成)
2. 应用错误 error 记录和上传 (完成)
3. 过滤无效路由请求，减少服务压力(完成)

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run debug
$ curl 127.0.0.1:7001/getUser
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org
