---
title: "Insumos"
slug: "docs/api/insumos/insumos"
---

# Endpoint: Insumos

Estos endpoints permiten crear, listar, actualizar y eliminar insumos en el sistema.

## Ruta
Para hacer llamados a este enpoint es necesario seguirlo del sufijo *`/api`*, es decir para llamar este enpoint la url debe ser **`/api/insumos`**

## Crear Insumo

**`POST /api/insumos`**

Este endpoint permite crear un nuevo insumo.

### Parámetros

| Parámetro            | Tipo     | Descripción                                                | Requerido |
|----------------------|----------|------------------------------------------------------------|-----------|
| `Id_Categoria_Insumos`| integer  | ID de la categoría del insumo.                             | Sí        |
| `Nombre`             | string   | Nombre del insumo.                                         | Sí        |
| `Stock_Ml`           | integer  | Cantidad de stock del insumo en mililitros.                | Sí        |
| `Estado`             | boolean  | Estado del insumo (activo/inactivo).                       | Sí        |

### Ejemplo de cuerpo de solicitud

```json
{
  "Id_Categoria_Insumos": 1,
  "Nombre": "Cremita",
  "Stock_Ml": 500,
  "Estado": true
}
```
:::caution
La solicitud debe estar en formato JSON para que la API pueda procesarlo correctamente.
:::

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el mensaje de éxito y los datos de el insumo creado.

```json
{
    "status": "success",
    "data": {
        "Id_Insumos": 5,
        "Id_Categoria_Insumos": 1,
        "Nombre": "Cremita",
        "Stock_Ml": 500,
        "Estado": true
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

## Listar Insumos

**`GET /api/insumos`**

Este endpoint permite obtener todos los insumos registrados en el sistema.

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el mensaje de éxito y los datos de los insumos registrados en el sistema.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "data": [
    {
      "Id_Insumos": 1,
      "Id_Categoria_Insumos": 1,
      "Nombre": "Aceite de Oliva",
      "Stock_Ml": 500,
      "Estado": true
    },
    {
      "Id_Insumos": 2,
      "Id_Categoria_Insumos": 2,
      "Nombre": "Sal",
      "Stock_Ml": 300,
      "Estado": true
    }
  ]
}
```

## Actualizar Insumo

**`PUT /api/insumos/:id`**

Este endpoint permite actualizar un insumo en el sistema.

### Parámetros

| Parámetro            | Tipo     | Descripción                                                | Requerido |
|----------------------|----------|------------------------------------------------------------|-----------|
| `id`| integer  | ID del insumo a actualizar.                             | Sí        |


### Ejemplo de cuerpo de solicitud

```json
{
  "Nombre": "Cremita actualizado",
  "Stock_Ml": 1000,
  "Estado": false
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
  "message": "Insumo actualizado"
}
```

## Eliminar Insumo

**`DELETE /api/insumos/:id`**

Este endpoint permite eliminar un insumo del sistema.

### Parámetros

| Parámetro            | Tipo     | Descripción                                                | Requerido |
|----------------------|----------|------------------------------------------------------------|-----------|
| `id`| integer  | ID del insumo a eliminar.                             | Sí        |

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación y el mensaje de éxito.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "message": "Insumo eliminado"
}
```

## Notas

- Asegúrese de que los datos sean coherentes y no tengan ningun caracter especial que pueda interferir en los procesos de la API.

- Si las credenciales son incorrectas, el sistema devolverá un mensaje de error indicando que las credenciales no son válidas [**Token JWT**](/docs/api/auth/token/).