from services.database_service import execute_post, execute_get
from services.repository_service import find_users_by_login, update_users
from services.login_service import hash_password


def fetch_user_info(current_user):
    return execute_get(find_users_by_login(current_user.get_login()))

def change_password(current_user, request):
    return execute_post(update_users(current_user.get_login(), hash_password(request["new_password"])))