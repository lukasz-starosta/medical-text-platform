class Entry:
    def __init__(self, diagnosis, description):
        self.__diagnosis = diagnosis
        self.__description = description

    def get_diagnosis(self):
        return self.__diagnosis

    def get_description(self):
        return self.__description