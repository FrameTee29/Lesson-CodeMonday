echo "STEP 1 : Delete image old verison"
docker rmi -f frametee29/lesson:dev

echo "STEP 2 : Build new image"
docker build -t frametee29/lesson:dev .

echo "STEP 3 : Push to dockerhub"
docker push frametee29/lesson:dev

echo "STEP 4 : Finish"
start msedge https://hub.docker.com/?ref=login
