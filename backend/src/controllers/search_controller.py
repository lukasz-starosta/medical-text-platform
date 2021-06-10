from services.database_service import execute_get


def search(content):
    return execute_get("select * from entries where descriptionShort like '%{}%'".format(content))
    # return execute_get("select * from users where login like '%{}%'".format(content))