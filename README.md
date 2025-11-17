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

📦 Build y Deploy
sam build
sam deploy