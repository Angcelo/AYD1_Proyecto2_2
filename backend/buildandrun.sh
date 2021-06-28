sudo docker rm -f $(sudo docker ps -a -q --filter ancestor=redes_s1_2021_2/node-web-app --format="{{.ID}}")
sudo docker build . -t redes_s1_2021_2/node-web-app
sudo docker run -p 5050:5050 -d redes_s1_2021_2/node-web-app
