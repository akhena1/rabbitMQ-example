# To see the project running, just follow the next steps:

First of all, check if you have RabbitMQ installed. If not, you can see how to install at [Documentation](https://www.rabbitmq.com/download.html). You also should have NodeJs installed

### Open two terminals at the root folder
> In the first terminal, you can run the API with:
```
npm start
```

> In the second, you can run the worker with:
```
node src/worker.js
```

### If you don't have postman or insomnia installed to test, you can run:

```
curl --location --request POST 'localhost:3000/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": "You should see this message in the worker"
}'
```

If everything is okay, you will receive this log from worker: 

```
Worker started
processing  {"message":"You should see this message in the worker"}
```

-----

# Para executar o projeto, siga os próximos passos:

Antes de tudo, verifique se você tem o RabbitMQ instalado. Caso não, você pode ver como instalar [nesta documentação](https://www.rabbitmq.com/download.html). Você também deve ter o nodejs instalado.

### Abra dois terminais na pasta raiz do projeto
> No primeiro terminal, suba a API com o comando:
```
npm start
```

> No segundo, você pode subir o worker com o comando:
```
node src/worker.js
```

### Caso você não tenha o Postman ou o insominia instalado para testar, você pode usar o seguinte CURL:

```
curl --location --request POST 'localhost:3000/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": "Você deve ver esta mensagem no worker"
}'
```

Se tudo correr bem, você receberá o seguinte log do worker: 

```
Worker started
processing  {"message":"Você deve ver esta mensagem no worker"}
```