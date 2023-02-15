# company-basic-service

build docker
docker build . -t acrwebdev/company-basic-service:0.0.1

docker push
docker push acrwebdev/company-basic-service:0.0.1

docker pull acrwebdev/company-basic-service:0.0.1

run docker
docker run -p 20000:20000 --env SERVER_IP=34.80.78.75 --env SERVER_PORT=20000 --env SWAGGER_IP=34.80.78.75 --env DB_URI="" --restart=always --name=company-basic-service -d acrwebdev/company-basic-service:0.0.1
