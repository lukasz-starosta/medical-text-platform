from services.database_service import execute_post
from data.entry import Entry
from datetime import date
import json

def create_entry(content):
    try:
        entry = Entry(content['descriptionShort'], content['descriptionLong'])
    except Exception:
        print("Cannot instantiate Entry, data not valid")
        return False
    return execute_post("insert into entries values({}, '{}', '{}');".format(date.today(), entry.get_diagnosis(), entry.get_description()))