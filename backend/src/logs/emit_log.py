import pika
import sys

def emit_log(message):
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq'))
    channel = connection.channel()

    channel.exchange_declare(exchange='logs', exchange_type='fanout')

    channel.basic_publish(exchange='logs', routing_key='', body=message)
    print("Message: '" + message + "' has been sent")
    connection.close()