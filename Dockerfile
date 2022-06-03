FROM registry.digitalocean.com/aign/nginx-webserver-base:latest

COPY ./default.conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY index.html .

EXPOSE 8000
