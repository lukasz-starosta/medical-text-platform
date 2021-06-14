import pika
import asyncio

async def receive_logs():
    
    print("Waiting for RabbitMQ to be up...")
    await asyncio.sleep(30)
    print("Waiting done!")

    connection = pika.BlockingConnection(pika.ConnectionParameters(host='rabbitmq'))
    channel = connection.channel()

    channel.exchange_declare(exchange='logs', exchange_type='fanout')

    result = channel.queue_declare(queue='', exclusive=True)
    queue_name = result.method.queue

    channel.queue_bind(exchange='logs', queue=queue_name)

    print(' [*] Waiting for logs...')

    def callback(ch, method, properties, body):
        print("\n \n @@@@@@@@@@@@@@@@@@@@@ \n MESSAGE RECEIVED! \n @@@@@@@@@@@@@@@@@@@@@\n")
        print("CHANNEL: " + ch + "\n")
        print("METHOD: " + method + "\n")
        print("PROPERTIES: " + properties + "\n")
        print("BODY: " + body + "\n\n")

    channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)

    channel.start_consuming()