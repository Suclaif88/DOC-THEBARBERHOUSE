---
title: "Ventas"
slug: "docs/api/ventas/ventas"
---

# Endpoint: Ventas

Estos endpoints permiten crear, listar, actualizar y eliminar ventas en el sistema.

## Ruta
Para hacer llamados a este endpoint es necesario seguirlo del sufijo *`/api`*, es decir, para llamar este endpoint la URL debe ser **`/api/ventas`**.

## Crear Venta

**`POST /api/ventas`**

Este endpoint permite crear una nueva venta.

### Parámetros

| Parámetro            | Tipo     | Descripción                                               | Requerido |
|----------------------|----------|-----------------------------------------------------------|-----------|
| `Documento_Cliente`  | string   | Documento del cliente que realiza la compra.              | Sí        |
| `Documento_Empleados`| string   | Documento del empleado que registra la venta.             | Sí        |
| `Fecha`              | string   | Fecha de la venta.                                        | Sí        |
| `Total`              | decimal  | Total de la venta (suma de los productos y servicios).     | Sí        |
| `Estado`             | boolean  | Estado de la venta (0: Inactivo, 1: Activo).               | Sí        |

### Ejemplo de cuerpo de solicitud

```json
{
  "Documento_Cliente": "1234567890",
  "Documento_Empleados": "1234567892",
  "Fecha": "2025-04-06",
  "Total": 1500.00,
  "Estado": 1
}
```

:::caution[Cuidado]
La solicitud debe estar en formato JSON para que la API pueda procesarlo correctamente.
:::

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el mensaje de éxito y los datos de la venta creada.

```json
{
    "status": "success",
    "data": {
        "Id_Ventas": 1,
        "Documento_Cliente": "1234567890",
        "Documento_Empleados": "1234567892",
        "Fecha": "2025-04-06",
        "Total": 150000,
        "Estado": 1
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

**`GET /api/ventas`**

Este endpoint permite obtener todas las ventas registradas en el sistema.

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación, el mensaje de éxito y los datos de las ventas registradas en el sistema.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "data": [
    {
      "Id_Ventas": 1,
      "Documento_Cliente": "1234567890",
      "Documento_Empleados": "1234567892",
      "Fecha": "2025-04-06",
      "Total": 150000,
      "Estado": 1
    },
    {
      "Id_Ventas": 2,
      "Documento_Cliente": "9876543210",
      "Documento_Empleados": "1234567893",
      "Fecha": "2025-04-05",
      "Total": 200000,
      "Estado": 0
    }
  ]
}
```

## Actualizar Venta

**`PUT /api/ventas/:id`**

Este endpoint permite actualizar los datos de una venta en el sistema.

### Parámetros

| Parámetro            | Tipo     | Descripción                                                | Requerido |
|----------------------|----------|------------------------------------------------------------|-----------|
| `id`| integer  | ID de la venta a actualizar.                             | Sí        |


### Ejemplo de cuerpo de solicitud

```json
{
  "Documento_Cliente": "1234567893",
  "Total": 180000,
  "Estado": 0
}
```
:::caution
La solicitud debe estar en formato JSON para que la API pueda procesarlo correctamente.
:::
:::danger
La solicitud solo actualizara los datos de Documento del cliente, Total y Estado.
Cualquier otro tipo de campo en la solicitud **`PUT`** sera ignorada por la API.
:::

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación y el mensaje de éxito.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "message": "Venta actualizada con éxito"
}
```

### Ejemplo de respuesta con error (si no se encuentra la venta)

```json
{
  "status": "error",
  "message": "Venta no encontrada"
}
```

## Eliminar Venta

**`DELETE /api/ventas/:id`**

Este endpoint permite eliminar una venta solo si su estado es `false`. Si el estado de la venta es diferente, no se podrá eliminar.

### Parámetros

| Parámetro            | Tipo     | Descripción                                               | Requerido |
|----------------------|----------|-----------------------------------------------------------|-----------|
| `id`                 | integer  | ID de la venta a eliminar.                                | Sí        |

### Respuesta

La respuesta será un objeto JSON que incluirá el estado de la operación y el mensaje de éxito.

### Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "message": "Venta eliminada con éxito"
}
```
:::danger
La solicitud solo eliminara la venta cuando el estado de esta se encuentre en **`false`** o **`0`**.
:::
### Ejemplo de respuesta si no se puede eliminar la venta (error de estado)

```json
{
  "status": "error",
  "message": "No se puede eliminar una venta con este estado"
}
```

### Ejemplo de respuesta si no se encuentra la venta (error)

```json
{
  "status": "error",
  "message": "Venta no encontrada"
}
```

## Ejemplo de respuesta de error interno (500)

```json
{
  "status": "error",
  "message": "Error al eliminar la venta. Intente nuevamente.",
  "error": "Explicacion a detalle del error"
}
```

## Notas

- Solo se podrá eliminar una venta si su estado es false. Si el estado es true o cualquier otro valor, el sistema devolverá un mensaje indicando que no se puede eliminar.

- Si la venta no se encuentra en el sistema, el endpoint devolverá un mensaje de error indicando que no se ha encontrado la venta con el ID proporcionado.

- En caso de un error interno en el servidor, el sistema devolverá un mensaje indicando el fallo.

- Asegúrese de que los datos sean correctos y que el ID de la venta corresponda a una venta existente en el sistema.

- Todos los endpoints están protegidos por autenticación, asegúrese de enviar el token JWT en los encabezados de las solicitudes.

:::tip[¿Sabías esto?]
El modulo de ventas de THE BARBER HOUSE es uno de los mas complejos, por eso solo se le encomienda a los mejores programadores como [“Sebas Roldan”](https://github.com/Suclaif88) nuestro mejor programador. 
:::