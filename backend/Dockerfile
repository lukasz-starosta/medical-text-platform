FROM python:3.8-slim-buster

# Create app directory
WORKDIR /app

# Install app dependencies
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Bundle app source
COPY . .

# use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 8080

# use node server.js to start your server
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]





