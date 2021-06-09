from services.database_service import execute_get


def search(content):
    return execute_get("select * from dishes where name like '{}'".format(content))