echo "Pull Postgres"
docker pull postgres:alpine

echo "Setup database"
docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine

echo "Setup role && Create Database"
docker exec -it postgres-0 bash
psql -U postgres
create database lesson_database;
\c lesson_database
