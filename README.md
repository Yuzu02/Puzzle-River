# 🧩 Puzzle del Río

## 🎯 Objetivo del Juego

El jugador debe ayudar a un granjero a transportar un lobo, una oveja y una lechuga desde la orilla izquierda de un río hasta la orilla derecha. El granjero tiene un bote que solo puede llevar a él y a un elemento adicional en cada viaje.

## 📜 Reglas del Juego

1. 👨‍🌾 El granjero debe estar presente en cada travesía del bote
2. 🛶 Solo se puede transportar un elemento a la vez (lobo, oveja o lechuga)
3. 🚫 No se puede dejar solos:
   - 🐺 al lobo con 🐑 la oveja (el lobo se comería a la oveja)
   - 🐑 a la oveja con 🥬 la lechuga (la oveja se comería la lechuga)

## 📝 Estado del Juego

El juego mantiene control de:

- Posición de cada elemento (izquierda/derecha del río)
- Historial de movimientos (para deshacer)
- Estados futuros (para rehacer)
- Estado de victoria/derrota

## 🎮 Acciones Disponibles

- `mover(personaje)`: Mueve un personaje junto con el granjero al otro lado
- `deshacer()`: Regresa al movimiento anterior
- `rehacer()`: Rehace un movimiento deshecho
- `reiniciar()`: Vuelve al estado inicial del juego

## 🏆 Condiciones de Victoria/Derrota

- **Victoria** 🥳:
  - Todos los elementos llegan a la orilla derecha
- **Derrota** 😱:
  - El lobo queda solo con la oveja
  - La oveja queda sola con la lechuga

## 🌐 Demo

¡Prueba el juego en vivo!
[puzzle-river.vercel.app](https://puzzle-river.vercel.app)

## ✅ Validación de Movimientos

- Solo se pueden mover elementos que estén en la misma orilla que el granjero
- No se permiten movimientos que resulten en situaciones de derrota

## 💻 Implementación Técnica

El juego utiliza:

- 🐻 **Zustand** para el manejo del estado
- 📘 **TypeScript** para tipo seguro
- 🛡️ **Zod** para validación de esquemas

## 🚀 Instalación

```bash
npm install

# o
bun install
```

## 👩‍💻 Uso en Desarrollo

```bash
npm run dev
# o
bun dev
```
