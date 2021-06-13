def insert_into_entries(date, desc_short, desc_long):
    return "insert into entries(entryDate, descriptionShort, descriptionLong) values('{}', '{}', '{}');".format(date, desc_short, desc_long)

def select_from_entries(content):
    return "select * from entries where descriptionShort like '%{}%';".format(content)

def select_from_entries_by_id(id):
    return "select * from entries where entryID = {};".format(id)

def select_from_users(id):
    return "select * from users where userID = {};".format(id)

def update_users(id, new_password):
    return "update users set password = '{}' where userID = {};".format(new_password, id)