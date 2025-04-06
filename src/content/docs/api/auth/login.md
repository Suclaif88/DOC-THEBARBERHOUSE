---
title: "Inicio de Sesión"
slug: "docs/api/auth/login"
---

# Endpoint: Inicio de Sesión

Este endpoint permite a los usuarios autenticarse en el sistema utilizando su correo electrónico y contraseña. Al proporcionar credenciales válidas, el sistema generará y devolverá un token JWT para autenticar futuras solicitudes.

## Ruta

**`POST /api/auth/login`**

Esta es la ruta a la cual se debe enviar la solicitud para iniciar sesión.

## Parámetros

| Parámetro   | Tipo     | Descripción                                         | Requerido |
|-------------|----------|-----------------------------------------------------|-----------|
| `email`     | string   | La dirección de correo electrónico del usuario.     | Sí        |
| `password`  | string   | La contraseña del usuario.                          | Sí        |

### Ejemplo de cuerpo de solicitud

El cuerpo de la solicitud debe ser un objeto JSON con los parámetros necesarios. Aquí hay un ejemplo de cómo debe ser el cuerpo de la solicitud:

```json
{
  "email": "juan@example.com",
  "password": "123456789"
}
```
:::caution
La solicitud debe estar en formato JSON para que la API pueda procesarlo correctamente.
:::

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el mensaje de éxito y el token JWT para autenticar futuras solicitudes.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "message": "Inicio de sesión exitoso.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzdWFyaW9AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDM5MTM1NzEsImV4cCI6MTc0MzkxNzE3MX0.Y3np5EbVTQ1JlEl44o2N2N1BeaRiZof--kIoEkk0qt4"
}
```

### Ejemplo de respuesta con error (si las credenciales son incorrectas)

```json
{
  "status": "error",
  "message": "Correo electrónico o contraseña incorrectos."
}
```

### Cómo probar el inicio de sesión desde la consola

A continuación, se muestra cómo realizar una solicitud POST a este endpoint desde la consola utilizando curl:

```bash title="Ejemplo de peticion con CURL"
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "juan@example.com",
  "password": "123456789"
}'

```

#### Explicación:

-X POST: Especifica que la solicitud es de tipo POST.

- http://localhost:3000/api/auth/login: Es la URL del endpoint de inicio de sesión (reemplazar localhost:3000 con la URL del servidor si es necesario).

- -H "Content-Type: application/json": Especifica que el cuerpo de la solicitud es en formato JSON.

- -d '{...}': Especifica el cuerpo de la solicitud con los datos del usuario en formato JSON.

- La respuesta de la consola mostrará el resultado de la operación, ya sea un éxito o un error.

## Notas

- Asegúrese de que el email y la password sean correctos y que el email esté registrado previamente en el sistema.

- Si las credenciales son incorrectas, el sistema devolverá un mensaje de error indicando que las credenciales no son válidas.