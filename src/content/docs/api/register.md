---
title: "Registro"
slug: "docs/api/register"
---

# Endpoint: Registro de Usuario

Este endpoint permite registrar un nuevo usuario en el sistema. Los usuarios deben proporcionar información básica como su nombre, correo electrónico y contraseña.

## Ruta

**`POST /api/auth/register`**

Esta es la ruta a la cual se debe enviar la solicitud para registrar un nuevo usuario.

## Parámetros

| Parámetro   | Tipo     | Descripción                                         | Requerido |
|-------------|----------|-----------------------------------------------------|-----------|
| `nombre`    | string   | El nombre completo del usuario.                     | Sí        |
| `email`     | string   | La dirección de correo electrónico del usuario.     | Sí        |
| `password`  | string   | La contraseña del usuario.                          | Sí        |
| `celular`   | string   | Número de celular del usuario (opcional).           | No        |
| `documento` | string   | Documento de identificación del usuario (opcional).| No        |
| `direccion` | string   | Dirección física del usuario (opcional).            | No        |

### Ejemplo de cuerpo de solicitud

El cuerpo de la solicitud debe ser un objeto JSON con los parámetros necesarios. Aquí tienes un ejemplo de cómo debe ser el cuerpo de la solicitud:

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456789",
  "celular": "9876543210",
  "documento": "1234567890",
  "direccion": "Calle Ficticia 123"
}
```
:::caution
La solicitud debe estar en formato JSON para que la API pueda procesarlo correctamente.
:::

## Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el usuario registrado y el token JWT para autenticar futuras solicitudes.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "message": "Usuario registrado con éxito.",
  "user": {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "celular": "9876543210",
    "documento": "1234567890",
    "direccion": "Calle Ficticia 123",
    "rol_id": 1,
    "createdAt": "2025-04-06T04:26:11.244Z",
    "updatedAt": "2025-04-06T04:26:11.244Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzdWFyaW9AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDM5MTM1NzEsImV4cCI6MTc0MzkxNzE3MX0.Y3np5EbVTQ1JlEl44o2N2N1BeaRiZof--kIoEkk0qt4"
}
```
### Ejemplo de respuesta con error (si falta algún parámetro requerido)

```json
{
  "status": "error",
  "message": "El campo 'email' es obligatorio."
}

```

### Cómo probar el registro desde la consola

A continuación, se muestra cómo realizar una solicitud POST a este endpoint desde la consola utilizando curl:

```bash title="Ejemplo de peticion con CURL"
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456789",
  "celular": "9876543210",
  "documento": "1234567890",
  "direccion": "Calle Ficticia 123"
}'

```

#### Explicación:

- -X POST: Especificar que la solicitud es de tipo POST.

- http://localhost:3000/api/auth/register: Es la URL del endpoint de registro 

- (reemplazar localhost:3000 con la URL del servidor si es necesario).

- -H "Content-Type: application/json": Especifica que el cuerpo de la solicitud es en formato JSON.

- -d '{...}': Especifica el cuerpo de la solicitud con los datos del usuario en formato JSON.

- La respuesta de la consola mostrará el resultado de la operación, ya sea un éxito o un error.

### Notas

- Asegúrese de que la contraseña tenga una longitud mínima de 6 caracteres.

- El campo email debe ser único, es decir, no puede estar registrado previamente en el sistema.

- Si se omiten algunos campos opcionales (como celular, documento y direccion), la solicitud se procesará correctamente siempre que los campos requeridos estén presentes.