# Kurkkumopotin

## A little exercise on Docker and Docker-Compose with ML -backend

### Installing:
You need docker

`sudo apt-get install docker`

and docker-compose

`sudo apt-get install docker-compose`


Change the local volume `/home/kapxy/kurkkumopotin/training/data:/src/data` in `docker-compose.yml` to your system's volume. 

Run `docker-compose up -d`

First start-up will take several minutes because it needs to download all the example images and train the model. 

After some time you should find your backend up at `localhost:5000/ping`
and front-end webapp at `localhost:3000`