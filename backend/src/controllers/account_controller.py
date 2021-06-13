from services.database_service import execute_post, execute_get
from services.repository_service import find_users_by_id, update_users
from services.login_service import hash_password


def fetch_user_info(request):
    id = request["userID"]
    return execute_get(find_users_by_id(id))

def change_password(request):
    id = request["userID"]
    return execute_post(update_users(id, hash_password(request["new_password"])))