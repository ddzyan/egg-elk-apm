# !/bin/sh
export ELASTIC_APM_SERVICE_NAME=egg-elk-apm

export ELASTIC_APM_SERVER_URL='http://10.10.0.130:8200'

export ELASTIC_APM_ENVIRONMENT='development'

export ELASTIC_APM_ACTIVE=true #建议只在生产环境开启apm-agent

export ELASTIC_APM_CENTRAL_CONFIG=false #在单点部署的时候，不需要开启轮询获取最新的apm-server配置

export ELASTIC_APM_CAPTURE_BODY="all"

echo service start...

npm run debug

echo service end!!