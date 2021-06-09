import yaml
from flask_mysql_connector import MySQL
import os

mysql = None

def setup_db(app):
    #zmieniałem scieżkę bo wyrzucało mi błąd jak uruchamiałem z main.py
    db = yaml.load(open('services/db_config.yaml'))
    app.config['MYSQL_HOST'] = db['mysql_host']
    app.config['MYSQL_USER'] = db['mysql_user']
    app.config['MYSQL_PASSWORD'] = db['mysql_password']
    app.config['MYSQL_DB'] = db['mysql_db']

    mysql = MySQL(app)
    return app

def execute(query):
    cur = mysql.connection.cursor()
    cur.execute(query)
    mysql.connection.commit()
    cur.close()