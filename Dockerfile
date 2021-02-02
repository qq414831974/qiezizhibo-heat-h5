FROM nginx
MAINTAINER wufan
RUN mkdir -p /usr/share/nginx/html/h5/
COPY ./h5/  /usr/share/nginx/html/h5/
COPY ./nginx.conf /etc/nginx/nginx.conf