# Vulnerable NoSQL Injection App

Esta aplicación de demostración está desarrollada en Node.js y JavaScript e intencionalmente incluye una vulnerabilidad de inyección NoSQL. Se conecta a una base de datos MongoDB utilizando el siguiente string:

mongodb+srv://student:dPgF0sb0ADBUZHCI@clusterunam.6pxlppf.mongodb.net/?retryWrites=true&w=majority&appName=ClusterUNAM


## Requisitos

- Node.js instalado.
- Conexión a Internet para acceder al clúster de MongoDB.
- Los módulos listados en `backend/package.json`.

## Estructura del Proyecto

vulnerable-nosql-app/
├── backend/ # Código del servidor (backend) 
│ ├── app.js 
│ └── package.json 
├── frontend/ # Código del cliente (frontend) 
│ └── index.html 
└── README.md # Instrucciones y documentación

## Configuración y Ejecución

1. **Clonar el repositorio:**  
   Usa el siguiente comando para clonar el repositorio (asegúrate de tener acceso con las credenciales proporcionadas si es un repositorio privado):
git clone https://github.com/tu_usuario/vulnerable-nosql-app.git

*Nota: Reemplaza `tu_usuario` por tu nombre de usuario en GitHub o GitLab.*

2. **Instalar dependencias y arrancar el servidor:**  
Navega a la carpeta `backend` e instala las dependencias:

cd backend npm install

Luego, inicia el servidor:

npm start

El servidor estará corriendo en [http://localhost:3000](http://localhost:3000).

3. **Abrir la aplicación Frontend:**  
Abre el archivo `frontend/index.html` en tu navegador. También se puede acceder de forma directa al enviar peticiones al servidor si sirves la carpeta `frontend` de manera estática.

## Funcionamiento y Vulnerabilidad

La aplicación cuenta con una ruta `/login` que recibe los datos de usuario (username y password) y los usa directamente para buscar en la base de datos sin ningún tipo de validación o sanitización, lo que introduce una vulnerabilidad de **NoSQL Injection**.  

### Ejemplo de ataque

- En el campo `username` o `password`, intenta ingresar:
```json
{ "$ne": null }
