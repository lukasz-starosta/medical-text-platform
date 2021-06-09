import yaml
from flask import jsonify
from flask_mysql_connector import MySQL

mysql = None

def setup_db(app):
    global mysql
    db = yaml.load(open('src/services/db_config.yaml'), Loader=yaml.FullLoader)
    app.config['MYSQL_HOST'] = db['mysql_host']
    app.config['MYSQL_PORT'] = db['mysql_port']
    app.config['MYSQL_USER'] = db['mysql_user']
    app.config['MYSQL_PASSWORD'] = db['mysql_password']
    app.config['MYSQL_DATABASE'] = db['mysql_db']

    mysql = MySQL(app)
    return app

def execute_post(query):
    cur = mysql.connection.cursor()
    cur.execute(query)
    mysql.connection.commit()
    cur.close()
    return "OK"

def execute_get(query):
    cur = mysql.connection.cursor()
    cur.execute(query)
    result = cur.fetchall()
    if result is None:
        raise Exception
    else:
        return jsonify(result)