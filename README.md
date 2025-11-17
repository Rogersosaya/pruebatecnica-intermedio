🚀 Instalación y despliegue
# Instalar dependencias
npm install

🔐 Permisos necesarios en IAM

Agregar estas políticas al usuario/rol:

AdministratorAccess

AmazonAPIGatewayAdministrator

AmazonDynamoDBFullAccess

AmazonS3FullAccess

AWSCloudFormationFullAccess

AWSLambda_FullAccess

📦 Build y Deploy con AWS SAM
sam build
sam deploy

🗄️ Poblar la tabla DynamoDB

Para agregar datos iniciales a la tabla tec-practicantes-todo, usa este ejemplo:

INSERT INTO "tec-practicantes-todo" VALUE {
  'id': '1',
  'titulo': 'Terminar reporte semanal',
  'completada': false
};

📡 Consumir la API con Postman (o cualquier cliente REST)
✔️ GET — Obtener todos los TODOs

URL:

GET https://0ktuci7lvj.execute-api.us-east-1.amazonaws.com/Prod/todos


Respuesta esperada (ejemplo):

[
  {
    "id": "1",
    "titulo": "Comprar insumos para el proyecto",
    "completada": true
  }
]

✔️ POST — Actualizar un TODO por ID

URL:

POST https://0ktuci7lvj.execute-api.us-east-1.amazonaws.com/Prod/todos/1


Body (JSON):

{
  "titulo": "Comprar insumos para el proyecto",
  "completada": true
}


Respuesta esperada:

{
  "id": "1",
  "titulo": "Comprar insumos para el proyecto",
  "completada": true
}
