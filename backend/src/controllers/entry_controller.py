from services.database_service import execute_post, execute_get_single
from services.repository_service import insert_into_entries, select_from_entries_by_id
from data.entry import Entry
from datetime import date

def create_entry(content):
    try:
        entry = Entry(date.today(), content['descriptionShort'], content['descriptionLong'])
    except Exception:
        print("Cannot instantiate Entry, data not valid")
        return False
    return execute_post(insert_into_entries(entry.get_date(), entry.get_desc_short(), entry.get_desc_long()))

def get_entry(id):
    return execute_get_single(select_from_entries_by_id(id))