## Opis Backendu
Backend jest napisany w Pythonie w oparciu o framework Flask.
Przed uruchomieniem stwórz wirtualne środowisko np. w Condzie komendą:

```bash
conda env create -f environment.yml
```
Uruchom wirtualne środowisko
```bash
conda activate mtp
```
Plik *main.py* jest plikiem z, którego można uruchomić cały serwer wystarczy wykonać"
```bash
python3 main.py
```
### Modyfikowanie istniejącej bazy danych
Do czasu stworzenie przykładowej bazy danych będziemy korzystać z bazy danych games.db 
### Postman 
Tesotwanie api za pomocą listonosza
#### Wyświetlanie zawartości bd
![Screenshot](images/get.png)

#### Dodawanie pojedynczego wpisu do bazy przez zapytanie POST
![Screenshot](images/post.png)

### SQLite
Na razie korzystamy z silnika SQLite sprzężonego z Fluskiem. W pliku db.py i game_controller.py jest wszystko :)

## Endpointy do implementacji
| Endpoint           | Method | Request                       | Response                                               | Opis                                                                              |
|--------------------|--------|-------------------------------|--------------------------------------------------------|-----------------------------------------------------------------------------------|
| AUTH               |        |                               |                                                        |                                                                                   |
| /login             | POST   | login, password               | ok, token / not ok                                     | logowanie się użytkownika                                                         |
| /register          | POST   | login, password               | ok, token / not ok                                     | rejestracja użytkownika                                                           |
| /check             | POST   | token                         | ok / not ok                                            | walidacja użytkownika (czy ma ważny token po np. 2 dniach bez wchodzenia do apki) |
| /logout            | POST   | token                         | ok / not ok                                            | wylogowywanie                                                                     |
|                    |        |                               |                                                        |                                                                                   |
| DASHBOARD          |        |                               |                                                        |                                                                                   |
|                    |        |                               |                                                        |                                                                                   |
| PRZEGLĄDAJ         |        |                               |                                                        |                                                                                   |
| /search?query=     | GET    | query (najpierw plain string) | rezultaty - do ustalenia                               | Wyszukiwarka                                                                      |
|                    |        |                               |                                                        |                                                                                   |
| KONTO              |        |                               |                                                        |                                                                                   |
| /user-info?userId= | GET    | userId                        | informacje o użytkowniku + jego wpisy (jak na froncie) | Informacje o użytkowniku                                                          |
| /change-password   | POST   | password                      | ok / not ok                                            | Zmiana hasła                                                                      |
|                    |        |                               |                                                        |                                                                                   |
| UTWÓRZ WPIS        |        |                               |                                                        |                                                                                   |
| /create            | POST   | dane z formularza             | ok / not ok                                            | Wgrywanie danych                                                                  |
