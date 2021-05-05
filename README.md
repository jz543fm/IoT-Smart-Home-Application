# IoT Smart Home Application

`mvn clean`

`mvn install`

Swagger URL

`http://localhost:8082/swagger-ui/index.html?url=/v3/api-docs&validatorUrl=#/default`

Docker-composer with VPN:
	`docker-compose up -d` or `docker-compose up -d --build`

	`docker ps -a` 

	`docker logs <container name>`

	`docker inspect <container name>`

	`docker exec -it -u root <container name> bash`

	Check via docker inspect IP address of running backend and change the nginx configuration file, via docker-exec on the web_1 container in `/etc/nginx/conf/default.conf` rewrite line 151

	for nginx configuration for http connection from `proxy_pass       http://localhost:8082/;` to `proxy_pass       http://172.26.0.2:8082/;` 

	try `curl http://localhost:82/backend`
	
	try: `curl http://localhost:82/swagger-ui.html`

	response: `404 Not found`

	Check logs: `docker logs backend_web_vpn_service-iotapplication_smarthome | tail -n 5`

	Why is not working swagger UI via VPN nginx reverse proxy????!!!!!!


Docker-compose without vpn:

	`docker-compose -f docker-compose-local.yml -up -d` or `docker-compose -f docker-compose-local.yml up -d`

	`docker ps -a'

	`docker logs <container name>`

	`docker inspect <container name>`

	`docker exec -it -u root <container name> bash` 


