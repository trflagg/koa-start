clean:
	docker rm -f $(shell docker ps -a -q)

build:
	docker build --tag='node' ./

run-dev:
	docker run -it --rm -p 3000:3000 --name='node'  -v $(shell pwd):'/usr/src/app' node /bin/bash

run:
	docker run -d -p 3000:3000 --name='node' node

