class User:
    def __init__(self, login, password):
        self.__login = login
        self.__password = password

    
    def get_login(self):
        return self.__login


    def get_password(self):
        return self.__password