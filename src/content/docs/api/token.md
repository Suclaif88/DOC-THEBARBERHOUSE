---
title: "Autenticación con Token JWT"
slug: "docs/api/auth/token"
---

Este apartado explica cómo funciona el token JWT (JSON Web Token) y cómo se utiliza para autenticar las solicitudes a los endpoints de la API.

La API se encuentra protegida mediante token JWT para tener seguridad de que las solicitudes son hechas por un usuario autenticado.

## ¿Qué es un Token JWT?

Un **Token JWT** es un objeto que contiene información segura que puede ser verificada y autenticada. Este token se utiliza para autenticar al usuario en la API después de que haya iniciado sesión correctamente. El token contiene tres partes:

1. **Header**: Contiene el tipo de token (JWT) y el algoritmo de encriptación (usualmente HMAC SHA256 o RSA).
2. **Payload**: Contiene los datos del usuario y otras informaciones como el `exp` (fecha de expiración).
3. **Signature**: Es la parte que se utiliza para verificar que el token no ha sido alterado.

Un ejemplo de un token JWT es el siguiente:

>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzdWFyaW9AZXhhbXBsZS5jb20iLCJpYXQiOjE3NDM5MTM1NzEsImV4cCI6MTc0MzkxNzE3MX0.Y3np5EbVTQ1JlEl44o2N2N1BeaRiZof--kIoEkk0qt4

## Autenticación con Token en las Solicitudes

### Cómo incluir el Token en las Solicitudes

El token JWT debe ser enviado en el encabezado (`header`) de cada solicitud que requiera autenticación. La forma más común es usar el encabezado `Authorization` con el valor `Bearer <token>`.

### Ejemplo de solicitud con token en el encabezado

```bash title="Ejemplo de peticion con CURL"
curl -X GET http://localhost:3000/api/protected-endpoint \
-H "Authorization: Bearer <tu_token_jwt>"
```

#### Explicación:

- -X GET: Especifica que la solicitud es de tipo GET.

- http://localhost:3000/api/protected-endpoint: Es la URL del endpoint protegido.

- (reemplazar localhost:3000 con la URL del servidor si es necesario).

- -H "Authorization: Bearer <tu_token_jwt>": Especifica el token JWT que se debe enviar en el encabezado de la solicitud.

### Ejemplo de respuesta exitosa

Cuando el token es válido, el servidor procesará la solicitud y devolverá una respuesta exitosa:

```json
{
  "status": "success",
  "message": "Acceso autorizado.",
  "data": {
    "mensaje": "Este es un endpoint protegido."
  }
}
```

:::note
La API no siempre entregara esta respuesta en otros casos entrega informacion del endpoint solicitado.
:::

### Ejemplo de respuesta con error (token inválido o expirado)

Si el token JWT no es válido o ha expirado, el servidor devolverá un error de autenticación:

```json
{
  "status": "error",
  "message": "Token inválido o expirado."
}
```

### Cómo verificar si el Token está expirado

El token JWT tiene un campo de expiracion que indica la fecha de expiración del token. Si la fecha actual es posterior a la fecha de expiración del token, se considerará inválido.

:::tip[¿Sabías esto?]
Todos los tokens de THE BARBER HOUSE vienen con una duracion de 1 hora apartir de su generacion.
:::

### Ejemplo de un token expirado

```json
{
  "status": "error",
  "message": "Token expirado. Por favor, inicia sesión nuevamente."
}
```

## Notas
- Protección de rutas: Cualquier ruta protegida que requiera autenticación debe verificar que el token JWT esté presente y sea válido. Si no está presente o es inválido, la solicitud debe ser rechazada.

- Seguridad: Es importante no compartir ni exponer el token JWT en lugares inseguros, como en el almacenamiento local de un navegador sin cifrado o en un frontend que pueda ser fácilmente inspeccionado.

- Este proceso asegura que solo los usuarios autenticados puedan acceder a las rutas protegidas de la API, manteniendo la seguridad de la aplicación.