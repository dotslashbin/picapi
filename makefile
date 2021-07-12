default:
		@echo "--> Setting up local environment ============================================"
		./setup_local.sh
		docker-compose up -d --build

clean:
		@echo "--> Setting up local environment ============================================"
		rm -Rvf app/build/*
		docker-compose down
		docker system prune -f
		docker network prune -f 
		docker volume prune -f
		docker rmi picapi_picapi_app
