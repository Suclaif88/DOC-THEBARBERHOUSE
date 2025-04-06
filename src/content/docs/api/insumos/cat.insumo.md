---
title: "Categoria-Insumos"
slug: "docs/api/insumos/cat-insumos"
---

# Endpoint: Categoría Insumos

Estos endpoints permiten crear, listar, actualizar y eliminar categorías de insumos en el sistema.

## Ruta

Para hacer llamados a este enpoint es necesario seguirlo del sufijo *`/api`*, es decir para llamar este enpoint la url debe ser **`/api/categoria-insumo`**

## Crear Categoría

**`POST /api/categoria-insumo`**

Este endpoint permite crear una nueva categoría de insumos.

### Parámetros

| Parámetro   | Tipo    | Descripción                                      | Requerido |
|-------------|---------|--------------------------------------------------|-----------|
| `Nombre`    | string  | Nombre de la categoría de insumo.                | Sí        |
| `Descripcion`| string | Descripción de la categoría de insumo.           | Sí        |

### Ejemplo de cuerpo de solicitud

```json
{
  "Nombre": "Cremas",
  "Descripcion": "Categoría para cremas para la piel"
}
```
:::caution
La solicitud debe estar en formato JSON para que la API pueda procesarlo correctamente.
:::

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el mensaje de éxito y los datos de la categoria de insumos creada.

```json
{
  "status": "success",
  "data": {
    "Id_Categoria_Insumos": 1,
    "Nombre": "Cremas",
    "Descripcion": "Categoría para cremas para la piel"
  }
}
```

### Ejemplo de respuesta con error (si faltan parámetros requeridos)

```json
{
  "status": "error",
  "message": "Faltan campos requeridos"
}
```

## Listar Categorías

**`GET /api/categoria-insumo`**

Este endpoint permite obtener todas las categorías de insumos registradas en el sistema.

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el mensaje de éxito y los datos de las categorias de insumos registradas en el sistema.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "data": [
    {
      "Id_Categoria_Insumos": 1,
      "Nombre": "Cremas",
      "Descripcion": "Categoría para cremas para la piel"
    },
    {
      "Id_Categoria_Insumos": 2,
      "Nombre": "Labiales",
      "Descripcion": "Categoría para labiales"
    }
  ]
}
```

## Actualizar Categoría

**`PUT /api/categoria-insumo/:id`**

Este endpoint permite actualizar una categoría de insumos.

| Parámetro            | Tipo     | Descripción                                                | Requerido |
|----------------------|----------|------------------------------------------------------------|-----------|
| `id`| integer  | ID de la categoria a actualizar.                             | Sí        |


### Ejemplo de cuerpo de solicitud

```json
{
  "Nombre": "Cremas Actualizadas",
  "Descripcion": "Categoría para cremas para la piel"
}
```
:::caution
La solicitud debe estar en formato JSON para que la API pueda procesarlo correctamente.
:::

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación y el mensaje de éxito.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "message": "Categoría actualizada"
}
```

## Eliminar Categoría

**`DELETE /api/categorias-insumos/:id`**

Este endpoint permite eliminar una categoría de insumos del sistema.

### Parámetros

| Parámetro            | Tipo     | Descripción                                                | Requerido |
|----------------------|----------|------------------------------------------------------------|-----------|
| `id`| integer  | 	ID de la categoría a eliminar.                             | Sí        |

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación y el mensaje de éxito.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "message": "Categoría eliminada"
}
```

## Notas

- Asegúrese de que los datos sean coherentes y no tengan ningun caracter especial que pueda interferir en los procesos de la API.

- Si las credenciales son incorrectas, el sistema devolverá un mensaje de error indicando que las credenciales no son válidas [**Token JWT**](/docs/api/auth/token/).