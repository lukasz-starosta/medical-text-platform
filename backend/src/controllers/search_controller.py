from services.database_service import execute_get
from services.repository_service import select_from_entries


def search(content):
    return execute_get(select_from_entries(content))