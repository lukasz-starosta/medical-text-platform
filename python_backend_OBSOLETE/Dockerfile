FROM python:3.8-slim-buster as base

# Create app directory
WORKDIR /app

# Install app dependencies
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
ENV FLASK_APP=src/main.py

# Bundle app source
COPY . .

# use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 8080



################# DEBUGGER #####################
FROM base as debug
RUN pip install ptvsd

CMD python -m ptvsd --host 0.0.0.0 --port 5678 --wait --multiprocess -m flask run -h 0.0.0 -p 8080

################# PRODUCTION #####################
FROM base as prod
RUN pip install ptvsd

CMD flask run -h 0.0.0 -p 8080