FROM mysql

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/

ENV MYSQL_DATABASE mtp
ENV MYSQL_ROOT_PASSWORD mtp

EXPOSE 3306