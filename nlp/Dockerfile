FROM ubuntu:20.04

WORKDIR /app
COPY . .

RUN apt-get update -y
RUN apt-get install -y python pip

# Install PYTHON requirements
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python3", "server.py"]