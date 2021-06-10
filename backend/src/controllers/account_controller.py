from services.database_service import execute_post, execute_get


def fetch_user_info(request):
    id = request[0]
    return execute_get("select * from users where userID = {};".format(id))

def change_password(request):
    id = request[0]
    new_password = request[1]
    return execute_post("update users set password = '{}' where userID = {};".format(new_password, id))