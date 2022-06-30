#### CLIENT

```http
  HOME
```

| Type     | Description                |
| :------- | :------------------------- |
| `/` | Home |


```http
  REGISTRO
```

| Type     | Description                |
| :------- | :------------------------- |
| `/registro` | CREAR CUENTA - nombre, apellidos, correo electrónico, contraseña, móvil |


```http
  SUSCRIPCIÓN
```
| Type     | Description                |
| :------- | :------------------------- |
| `/suscripcion/alta/nombre` |
| `/suscripcion/alta/preferencias-nutricoinales` |
| `/suscripcion/alta/calorias` |
| `/suscripcion/alta/tipo-de-platos` |
| `/suscripcion/alta/introduccion-primer-menu` |
| `/suscripcion/alta/primer-menu` |
| `/suscripcion/alta/resumen` | -- resumen del menu
| `/suscripcion/alta/envio` | -- añades la dirección, resumen de la dirección, añades día y hora de envío
| `/suscripcion/alta/pago` |

```http
  CARTA
```

| Type     | Description                |
| :------- | :------------------------- |
| `/carta` | Menu |


```http
  MI PERFIL
```

| Type     | Description                |
| :------- | :------------------------- |
| `/mi-cuenta/proximas-entregas` | 
| `/mi-cuenta/pedidos-anteriores` |
| `/mi-cuenta/pedidos-anteriores/:order_id` | 
| `/mi-cuenta/suscripcion` |
| `/mi-cuenta/mis-datos` |