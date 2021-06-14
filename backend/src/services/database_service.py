import yaml
from flask import jsonify, abort, make_response
from flask_mysql_connector import MySQL

mysql = None

def setup_db(app):
    global mysql
    db = yaml.load(open('src/config/db_config.yaml'), Loader=yaml.FullLoader)
    app.config['MYSQL_HOST'] = db['mysql_host']
    app.config['MYSQL_PORT'] = db['mysql_port']
    app.config['MYSQL_USER'] = db['mysql_user']
    app.config['MYSQL_PASSWORD'] = db['mysql_password']
    app.config['MYSQL_DATABASE'] = db['mysql_db']

    mysql = MySQL(app)
    return app

def execute_post(query):
    try:
        cur = mysql.connection.cursor(dictionary=True)
        cur.execute(query)
        mysql.connection.commit()
        cur.close()
        return True
    except Exception as e:
        dupa = str(e)
        abort(make_response(jsonify(message="Could not post data to the database"), 409))

def execute_get(query):
    try:
        cur = mysql.connection.cursor(dictionary=True)
        cur.execute(query)
        result = cur.fetchall()
        return jsonify(result)
    except:
        abort(make_response(jsonify(message="Could not retrieve data from database"), 409))

        
def execute_get_single(query):
    try:
        cur = mysql.connection.cursor(dictionary=True)
        cur.execute(query)
        result = cur.fetchone()
        return jsonify(result)
    except:
        abort(make_response(jsonify(message="Could not retrieve data from database"), 409))
