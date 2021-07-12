default:
		@echo "--> Setting up local environment ============================================"
		./setup_local.sh

clean:
		@echo "--> Setting up local environment ============================================"
		rm -Rvf app/build/*
		docker system prune -f
		docker network prune -f 
		docker volume prune -f
