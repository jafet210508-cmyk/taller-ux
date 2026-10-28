# Auditoría UX/UI - App de Notas

| Heurística de Nielsen | Problema encontrado en la interfaz original | Solución aplicada | Gravedad |
| :--- | :--- | :--- | :--- |
| **1. Visibilidad del estado del sistema** | Al agregar o eliminar una nota, la interfaz no mostraba ningún mensaje o aviso visual. | Se añadió un contenedor de mensajes dinámicos para notificar al usuario de cada acción en tiempo real. | Alta |
| **2. Coincidencia con el mundo real** | Uso de términos técnicos de sistema en lugar de un lenguaje natural y cotidiano. | Se renombraron los textos y botones a un vocabulario claro ("Guardar nota", "Limpiar"). | Media |
| **3. Control y libertad del usuario** | Las acciones de borrado o limpieza se ejecutaban al instante sin permitir cancelar. | Se implementó una ventana de confirmación previa (`confirm()`) antes de limpiar datos. | Alta |
| **4. Prevención de errores** | Se permitía enviar notas y campos totalmente vacíos al sistema. | Se añadieron validaciones con el atributo `required` para bloquear envíos sin contenido. | Alta |
| **5. Reconocimiento antes que recuerdo** | Los campos dependían solo de un `placeholder` que desaparecía al comenzar a escribir. | Se reemplazaron por etiquetas `<label>` fijas y siempre visibles sobre cada campo. | Media |

## Justificación de Leyes Aplicadas
- **Ley de Fitts:** El botón principal de guardado cuenta con un área grande y un tamaño táctil óptimo (`min-height: 44px`).
- **Ley de Hick:** Las opciones del formulario están organizadas secuencialmente en bloques claros para evitar la saturación de decisiones.
- **Ley de Miller:** Los elementos de entrada y el listado de notas están divididos en secciones lógicas que no superan la capacidad de la memoria de trabajo.