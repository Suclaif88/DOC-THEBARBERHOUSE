---
title: "Imagenes"
slug: "docs/api/imagenes/imagenes"
---

# Endpoint: Imagenes

Estos endpoints permiten crear, actualizar y eliminar imagenes en el sistema.

## Ruta
Para hacer llamados a este enpoint es necesario seguirlo del sufijo *`/api`*, es decir para llamar este enpoint la url debe ser **`/api/imagenes`**

## Subir Imagen / Imagenes

**`POST /api/imagenes/upload`**

Este endpoint permite crear un nuevo insumo.

| Parámetro            | Tipo     | Descripción                                                | Requerido |
|----------------------|----------|------------------------------------------------------------|-----------|
| `Imagenes`| array  | Arreglo de imagenes a subir                             | Sí        |

### Ejemplo de cuerpo de solicitud

```json
{
    "imagenes": [img1,img2, img3 ...]
}
```

:::note[Nota]
Se podra subir por este endpoint un maximo de **5** imagenes por peticion.
:::

:::caution[Cuidado]
La solicitud debe estar en formato JSON para que la API pueda procesarlo correctamente.
:::

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el mensaje de éxito, los ids y urls de las imagenes subidas.

```json
{
    "status": "success",
    "imagenes": [
        {
            "id": 1,
            "url": "https://res.cloudinary.com/dumyn6xer/image/upload/v1744315398/productos/vqfmpvddqpejfu.webp"
        },
        {
            "id": 2,
            "url": "https://res.cloudinary.com/dumyn6xer/image/upload/v1744315401/productos/jayjyzo3utqfuu.webp"
        },
        {
            "id": 3,
            "url": "https://res.cloudinary.com/dumyn6xer/image/upload/v1744315402/productos/hdigned3yaimdp.webp"
        }
    ]
}
```

### Ejemplo de respuesta con error (si faltan parámetros requeridos)

```json
{
  "status": "error",
  "message": "No se enviaron imágenes"
}
```

## Eliminar Imagen / Imagenes

**`DELETE /api/imagenes/delete/`**

Este endpoint permite eliminar una o varias imagenes del sistema.

### Parámetros

| Parámetro            | Tipo     | Descripción                                                | Requerido |
|----------------------|----------|------------------------------------------------------------|-----------|
| `ids`| array  | Array de IDs de imágenes a eliminar.                             | Sí        |

### Ejemplo de cuerpo de solicitud

```json
{
  "ids": [1, 2, 3 ...]
}
```

:::danger[Atencion]
Solo se podran eliminar **5** imagenes por solicitud.
:::

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, los resultados con los ids y el status de las imagenes eliminadas.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "resultados": [
    { "id": 5, "status": "eliminado" },
    { "id": 6, "status": "eliminado" },
    { "id": 7, "status": "eliminado" }
  ]
}
```

## Notas

- Si las credenciales son incorrectas, el sistema devolverá un mensaje de error indicando que las credenciales no son válidas [**Token JWT**](/docs/api/auth/token/).