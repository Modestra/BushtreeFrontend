#!/b in/bash/
sudo docker login -u $1 -p $2
sudo docker compose down
sudo docker compose up --build -d