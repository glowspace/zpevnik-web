.PHONY: pull-production pull-staging up redeploy

pull-production:
	git checkout main -f
	git pull origin main

pull-staging:
	git checkout develop -f
	git pull origin develop

up:
	docker compose up --build -d

dc_exec = docker compose exec -T client

redeploy:
	$(dc_exec) yarn && $(dc_exec) yarn build
	echo "build was successful, restarting server"
	$(dc_exec) deploy/swap.sh
	$(dc_exec) pm2 reload all --update-env
