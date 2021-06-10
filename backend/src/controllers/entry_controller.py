from services.database_service import execute_post
from data.entry import Entry
from datetime import datetime

def create_entry(content):
    try:
        entry = Entry(content[0], content[1])
    except Exception:
        print("Cannot instantiate Entry, data not valid")
        return False
    return execute_post("insert into entries values({}, {}, {});".format(datetime.now(), entry.get_diagnosis(), entry.get_description()))