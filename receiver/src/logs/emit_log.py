import pika
import sys

def emit_log(message):
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='10.5.0.5'))
    channel = connection.channel()

    channel.exchange_declare(exchange='logs', exchange_type='fanout')

    channel.basic_publish(exchange='logs', routing_key='', body=message)
    print("Message: '" + message + "' has been sent")
    connection.close()