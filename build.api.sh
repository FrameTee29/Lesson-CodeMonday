echo "STEP 1 : Pull Dockwer"
docker-compose up -d

echo "STEP 2 : Start project with Microsoft Edge"
start msedge http://localhost:3000

echo "STEP 3 : Start project with Google chrome"
start chrome http://localhost:3000

