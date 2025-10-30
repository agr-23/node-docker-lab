# Node Docker Lab — Random Quotes API

Este proyecto es un laboratorio que demuestra cómo crear una API REST con Node.js y Express, empaquetarla en Docker, publicarla en Docker Hub y desplegarla en Docker Swarm. Actividad del curso Arquitectura de software.

## Descripción general

El servicio expone una API HTTP que devuelve frases motivacionales en formato JSON.  
Fue desarrollado con fines educativos para comprender los fundamentos del desarrollo y despliegue de aplicaciones Node.js con contenedores.

### Endpoints

| Método | Ruta | Descripción |
|:-------|:------|:------------|
| GET | `/` | Mensaje de bienvenida y endpoints disponibles |
| GET | `/quotes` | Lista completa de frases |
| GET | `/quotes/random` | Devuelve una frase aleatoria |
| GET | `/quotes/:id` | Devuelve una frase por ID numérico |

## Estructura del proyecto

```

random-quotes/
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── src/
├── app.js
├── quotes.js
└── server.js

````

## Requisitos

- Node.js 20 o superior  
- npm 10 o superior  
- Docker Engine 26 o superior  
- (Opcional) Cuenta en Docker Hub

## Ejecución local

```bash
cd random-quotes
npm install
npm run dev
````

Luego abrir en el navegador:
[http://localhost:3000](http://localhost:3000)

## Construcción y ejecución con Docker

### Construir imagen

```bash
docker build -t random-quotes:local .
```

### Ejecutar contenedor

```bash
docker run --rm -d -p 3000:3000 --name random-quotes-test random-quotes:local
```

Verificar funcionamiento:

```bash
curl http://localhost:3000/quotes/random
```

## Imagen en Docker Hub

La imagen está disponible en:
[https://hub.docker.com/r/agr023/random-quotes](https://hub.docker.com/r/agr023/random-quotes)

Descarga y ejecución:

```bash
docker pull aok9907/random-quotes:latest
docker run -d -p 3000:3000 aok9907/random-quotes:latest
```

## Despliegue con Docker Swarm

Inicializar el clúster:

```bash
docker swarm init
docker network create --driver overlay random-quotes-net
```

Crear el servicio:

```bash
docker service create \
  --name random-quotes-service \
  --replicas 3 \
  --publish published=3001,target=3000 \
  --network random-quotes-net \
  aok9907/random-quotes:latest
```

Verificar estado:

```bash
docker service ls
docker service ps random-quotes-service
```

Eliminar el servicio y la red al finalizar:

```bash
docker service rm random-quotes-service
docker network rm random-quotes-net
docker swarm leave --force
```

## Autor

- Proyecto desarrollado por **agr-23**
- Imagen Docker publicada bajo la cuenta **agr023**
- Alejandro Garcés Ramírez
