class Entry:
    def __init__(self, date, desc_short, desc_long):
        self.__date = date
        self.__desc_short = desc_short
        self.__desc_long = desc_long

    def get_date(self):
        return self.__date

    def get_desc_short(self):
        return self.__desc_short

    def get_desc_long(self):
        return self.__desc_long