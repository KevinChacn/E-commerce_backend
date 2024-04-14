# Nombre del proyecto: E-commerce_backend
# Autor: Kevin Chacón

# Descripción: 
La aplicación E-commerce_backend es un servidor backend desarrollado utilizando Node.js y Express. Utiliza MongoDB como base de datos NoSQL para almacenar los datos de productos y pedidos. El ORM Mongoose se utiliza para facilitar la interacción con la base de datos MongoDB.

## Requisitos Previos
- Node.js instalado en tu sistema.
- MongoDB instalado y en ejecución en tu sistema.

# Paso a paso para la instalación y compilación del proyecto:

1. Abrir el CDM para poder continuar con los siguientes pasos.
2. Ingresar en el CDM el siguiente comando para poder clonar este repositorio. (git clone https://github.com/KevinChacn/E-commerce_backend.git)
3. Luego debera ingresar al proyecto clonado usando el comando "cd /ruta-proyecto" para luego instalar las dependencias utilizando el siguiente comando: npm install
4. Por el ultimo, desde el CDM ubicandose en el proyecto "E-commerce_backend" debera ingresar el comando "npm run dev" el cual inicializara el proyecto para su posterior uso.


### Productos

## Headers
[{"key":"Content-Type","value":"application/json","type":"text","enabled":true}]

- **getProducts**: Retorna todos los productos almacenados en la base de datos.
- http://localhost:3000/api/products/getProducts

- **addProduct**: Agrega un nuevo producto a la base de datos.
- http://localhost:3000/api/products/addOne

- **updateProductById**: Actualiza un producto existente en la base de datos por su ID.
- http://localhost:3000/api/products/id

- **deleteProductById**: Elimina un producto de la base de datos por su ID.
- http://localhost:3000/api/products/id

## Body Productos
{
    "name":"Test",
    "category":"Test",
    "price":310
}

### Pedidos

## Headers
[{"key":"Content-Type","value":"application/json","type":"text","enabled":true}]

- **getOrders**: Retorna todos los pedidos almacenados en la base de datos.
- http://localhost:3000/api/orders/getOrders

- **getOrdersById**: Obtiene la Orden segun el ID que corresponda en la base de datos.
- http://localhost:3000/api/orders/getOrdersById/id

- **addOrder**: Crea un nuevo pedido y lo agrega a la base de datos.
- http://localhost:3000/api/orders/addOne

- **updateOrderById**: Actualiza un pedido existente en la base de datos por su ID.
- http://localhost:3000/api/orders/id

- **deleteOrderById**: Elimina un pedido de la base de datos por su ID.
- http://localhost:3000/api/orders/id

## Body Pedidos
{
    "customerName":"Test",
    "customerAddress":"Test",
    "productId":"661b0f98402e044f3cac02f4",
    "quantity":10,
    "totalPrice":310
}

## Estructura del proyecto
E-commerce_backend/
│
├── src/
│   ├── controllers/
│   │   ├── products.controller.js
│   │   ├── orders.controller.js
│   │
│   ├── models/
│   │   ├── product.js
│   │   ├── order.js
│   │
│   ├── routes/
│   │   ├── products.routes.js
│   │   └── orders.routes.js
│   │
│   ├── app.js
│   │
│   ├── config.js
│   │
│   ├── database.js
│   │   
│   └── index.js
│
├── package-lock.json
├── package.json
├── .gitignore
└── README.md

## Elecciones:

- En el desarrollo del proyecto, tomé la decisión consciente de implementar la arquitectura Modelo-Vista-Controlador (MVC) debido a su capacidad para proporcionar una estructura organizada y modular. Esta elección se basó en la necesidad de separar claramente las preocupaciones dentro de la aplicación, lo que facilita la comprensión del código y mejora su mantenibilidad a largo plazo.

- Elección del stack tecnológico: Se eligió utilizar Node.js y Express para el servidor backend debido a la familiaridad de desarrollo con estas tecnologías y su capacidad para crear API rápidamente.

- Elección de la base de datos: Se optó por utilizar MongoDB como base de datos debido a su capacidad para manejar datos no estructurados y la facilidad de integración con el stack tecnológico seleccionado.



