FROM nginx:alpine

COPY ./build /var/www

RUN chmod 755 -R /var/www

COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
