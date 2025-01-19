# 🏆 Sorteo de Amigos - Lista Interactiva 🎉

Este proyecto permite a los usuarios agregar nombres a una lista, evitar nombres duplicados, seleccionar aleatoriamente un amigo y reiniciar la lista después del sorteo. Es una aplicación sencilla pero útil para realizar sorteos rápidos entre amigos o compañeros.

## 🚀 Características
- Agregar amigos a una lista evitando duplicados.
- Validación de entradas para evitar nombres vacíos.
- Visualización dinámica de la lista en la página.
- Selección aleatoria de un amigo usando `Math.random()`.
- Reinicio automático de la lista después del sorteo.

---

📝 Uso del Proyecto
Escribe un nombre en el campo de entrada y presiona "Agregar Amigo".
La lista de amigos se actualizará en la pantalla.
Haz clic en "Sortear Amigo" para seleccionar un nombre aleatorio.
Después del sorteo, la lista se limpiará automáticamente para comenzar de nuevo.

🚨 Posibles Problemas y Soluciones

<table>
  <tr>
    <th>Problema</th>
    <th>Solución</th>
  </tr>
  <tr>
    <td>No se agrega un nombre vacío</td>
    <td>Se muestra un mensaje alertando al usuario.</td>
  </tr>
  <tr>
    <td>Se intenta agregar un nombre repetido</td>
    <td>Se evita duplicados con <code>includes()</code>.</td>
  </tr>
  <tr>
    <td>No hay nombres para sortear</td>
    <td>Se muestra un mensaje de error.</td>
  </tr>
  <tr>
    <td>La lista no se limpia después del sorteo</td>
    <td>Se usa <code>setTimeout</code> para resetear automáticamente.</td>
  </tr>
</table>
