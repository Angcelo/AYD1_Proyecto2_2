sudo -S docker rm -f $(sudo docker ps -a -q --filter ancestor=redes_s1_2021_2/node-web-app --format="{{.ID}}")
sudo -S docker build . -t redes_s1_2021_2/node-web-app
sudo -S docker run -p 5050:5050 -d redes_s1_2021_2/node-web-app
