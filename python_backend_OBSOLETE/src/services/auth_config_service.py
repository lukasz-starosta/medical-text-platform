import yaml
import os


def setup_auth(app):
    os.environ["SECRET_KEY"] = str(os.urandom(24))


def get_secret_key():
    return os.getenv("SECRET_KEY")