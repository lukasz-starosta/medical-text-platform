########## ENTRIES ##########
def insert_into_entries(date, desc_short, desc_long):
    return "insert into entries(entryDate, descriptionShort, descriptionLong) values('{}', '{}', '{}');".format(date, desc_short, desc_long)

def find_entries_by_description_short(content):
    return "select * from entries where descriptionShort like '%{}%';".format(content)

########## USERS ##########
def insert_into_users(login, password):
    return "insert into users(login, password) values('{}', '{}');".format(login, password)

def find_users_by_id(id):
    return "select * from users where userID = {};".format(id)

def find_users_by_login(login):
    return "select * from users where login like '{}';".format(login)

def update_users(login, new_password):
    return "update users set password = '{}' where login like '{}';".format(new_password, login)