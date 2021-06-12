from services.database_service import execute_post, execute_get
from services.repository_service import select_from_users, update_users


def fetch_user_info(request):
    id = request["userID"]
    return execute_get(select_from_users(id))

def change_password(request):
    id = request["userID"]
    new_password = request["password"]
    return execute_post(update_users(id, new_password))