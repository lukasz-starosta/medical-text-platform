from services.database_service import execute_get
from services.repository_service import find_entries_by_description_short


def search(content):
    return execute_get(find_entries_by_description_short(content))