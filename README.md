# Pathways to Light 🌟

## A Mental Health Awareness Game About Hope and Recovery

Este proyecto contiene **TRES JUEGOS TERAPÉUTICOS INTERACTIVOS**:

1. **🎮 Un Día con Propósito 3D** (NUEVO INMERSIVO) - Experiencia 3D en primera persona con CSS 3D Transforms
2. **🎮 Un Día con Propósito 2D** - Juego interactivo 2D con personaje animado, tareas y movimiento
3. **📖 Pathways to Light** - Juego narrativo basado en texto con múltiples caminos de recuperación

Todos los juegos están diseñados para ayudar a personas que luchan con la depresión a entender que **la muerte nunca es la única opción**. A través de experiencias compasivas y basadas en evidencia, los jugadores descubren múltiples caminos hacia la sanación, el apoyo y la esperanza.

---

## 🎯 Purpose

This game was created with a critical mission: **To show people in crisis that there are always alternatives, that help exists, and that recovery is possible.**

If you're struggling with depression or suicidal thoughts, please know:
- **You are not alone**
- **These feelings are temporary**
- **Help is available**
- **Recovery is real**
- **You matter**

---

## 🆘 CRISIS RESOURCES

### If you or someone you know is in immediate crisis:

**🇺🇸 United States**
- **988 Suicide & Crisis Lifeline** - Call or text 988 (Available 24/7)
- **Crisis Text Line** - Text "HELLO" to 741741

**🇬🇧 United Kingdom**
- **Samaritans** - Call 116 123 (Free, 24/7)
- **Shout Crisis Text Line** - Text "SHOUT" to 85258

**🇨🇦 Canada**
- **Talk Suicide Canada** - 1-833-456-4566
- **Crisis Text Line** - Text "TALK" to 686868

**🇦🇺 Australia**
- **Lifeline** - 13 11 14
- **Beyond Blue** - 1300 22 4636

**🌍 International**
- Visit [findahelpline.com](https://findahelpline.com) for crisis support worldwide

---

## 🌌 UN DÍA CON PROPÓSITO 3D - Experiencia Inmersiva (NUEVO)

### ¿Qué es?

**Un Día con Propósito 3D** es una experiencia terapéutica inmersiva en primera persona que usa **CSS 3D Transforms** para crear un mundo 3D navegable sin dependencias externas. Este juego revolucionario te permite:

- 🎥 **Perspectiva en primera persona** - Mira alrededor con el mouse como en juegos profesionales
- 🚶 **Navegación 3D real** - Muévete libremente en un espacio tridimensional con WASD
- 🏠 **Habitación 3D completa** - Paredes, piso, techo con perspectiva y profundidad reales
- 🎯 **Objetos 3D interactivos** - Mesas, sillas, plantas, ventanas con volumen y sombras
- ⚡ **Carga instantánea** - Sin dependencias de CDN, usa solo CSS y JavaScript nativo
- 📊 **Sistema de estadísticas completo** - 4 métricas de bienestar en tiempo real
- 🎨 **Gráficos modernos** - Gradientes, sombras, efectos de iluminación y partículas

### Características Técnicas 3D

#### Sistema de Perspectiva CSS
- **perspective: 800px** - Profundidad visual realista
- **transform-style: preserve-3d** - Mantiene las transformaciones 3D en elementos hijo
- **Rotaciones en 3 ejes** - rotateX, rotateY, rotateZ para crear volumen real
- **translateZ** - Posicionamiento en el eje de profundidad

#### Habitación 3D Completa
- **6 superficies** - Piso, techo, 4 paredes con diferentes rotaciones
- **1000x1000x600px** - Espacio navegable amplio
- **Texturas con gradientes** - Efectos visuales profesionales
- **Ventanas con reflejo** - Simulación de luz natural
- **Grid en el piso** - Referencia visual de profundidad

#### Objetos Interactivos 3D
Cada objeto tiene:
- **Volumen real** con múltiples caras transformadas
- **Sombras proyectadas** con CSS box-shadow
- **Hover effect** - Se elevan y brillan al pasar el cursor cerca
- **Animación de pulso** cuando están activos
- **Emojis 3D** para identificación rápida

### Tareas del Día (6 Interacciones)

1. **🍳 Desayunar** - Mesa con comida (Energía +15, Autocuidado +10)
2. **🏃 Hacer Ejercicio** - Mesa con equipo deportivo (Energía +20, Propósito +15)
3. **💬 Conectar Socialmente** - Silla con teléfono (Social +25, Propósito +10)
4. **🌿 Cuidar Hobby** - Planta decorativa (Propósito +20, Autocuidado +10)
5. **😴 Descansar** - Silla cómoda (Energía -10, Autocuidado +20)
6. **📚 Leer** - Libro en mesa (Propósito +15, Social +5)

### Sistema de Interacción

#### Crosshair Inteligente
- **Punto de mira central** que cambia de color cuando detecta objetos cercanos
- **Detección por proximidad** - No necesitas clickear exactamente sobre el objeto
- **Feedback visual** - El objeto pulsa cuando está en rango de interacción
- **Tecla E** para confirmar interacción

#### Mensajes Terapéuticos
Cada tarea muestra:
- **Título emotivo** con emoji
- **Mensaje de validación** - "¡Excelente!", "¡Increíble!", "¡Qué valiente!"
- **Explicación científica** - Por qué esta acción ayuda
- **Refuerzo positivo** - Recordatorio de tu valor y progreso
- **Partículas de celebración** - Explosión de colores al completar

### Controles

```
🖱️ MOUSE        → Mirar alrededor (rotación de cámara 3D)
⌨️ W            → Avanzar (aumenta translateZ)
⌨️ S            → Retroceder (disminuye translateZ)
⌨️ A            → Izquierda (aumenta translateX)
⌨️ D            → Derecha (disminuye translateX)
⌨️ E            → Interactuar con objeto cercano
```

### Cómo Jugar

1. Abre `juego-3d-css-inmersivo.html` en tu navegador
2. Haz clic en **"✨ Comenzar tu Día"**
3. Mueve el **mouse** para mirar alrededor de la habitación
4. Usa **WASD** para caminar por el espacio 3D
5. Acércate a los objetos hasta que el **crosshair se vuelva verde**
6. Presiona **E** para interactuar
7. Lee los mensajes motivacionales
8. Observa cómo tus **4 estadísticas** mejoran
9. Completa las **6 tareas** para terminar el día
10. ¡Comienza un **nuevo día** y sigue creciendo!

### Beneficios de la Experiencia 3D

#### Inmersión Profunda
- **Presencia espacial** - Te sientes realmente dentro del espacio
- **Exploración activa** - Buscas y descubres objetos por ti mismo
- **Agencia personal** - Tú controlas tu perspectiva y movimiento
- **Engagement aumentado** - La 3D mantiene tu atención enfocada

#### Metáfora Terapéutica
- **Cambio de perspectiva** - Literalmente puedes ver las cosas desde diferentes ángulos
- **Movimiento hacia objetivos** - Caminas físicamente hacia tus metas
- **Espacio seguro** - Una habitación tranquila donde practicar autocuidado
- **Control en primera persona** - Tú decides qué hacer y cuándo

### Filosofía del Diseño 3D

- 🎯 **Sin dependencias** - No requiere Three.js, Babylon.js ni bibliotecas externas
- ⚡ **Carga instantánea** - Todo el código está en un solo archivo HTML
- 🌐 **Funciona offline** - No necesita conexión a internet
- 🔧 **Fácil de modificar** - CSS y JavaScript vanilla, legible y bien comentado
- 📱 **Compatible** - Funciona en navegadores modernos (Chrome, Firefox, Edge, Safari)
- 🎨 **Rendimiento óptimo** - Usa aceleración por GPU nativa del navegador

### Ventajas Técnicas sobre Three.js

1. **No depende de CDN** - No se queda cargando si el CDN falla
2. **Más liviano** - Solo ~15KB vs ~500KB de Three.js
3. **Más simple** - No necesitas aprender una API compleja
4. **CSS nativo** - Usa características estándar del navegador
5. **Debuggable** - Puedes inspeccionar todo en DevTools
6. **Garantizado** - Si el navegador soporta CSS, funcionará

---

## 🎮 UN DÍA CON PROPÓSITO 2D - Juego Interactivo

### ¿Qué es?

**Un Día con Propósito** es un juego interactivo en tiempo real donde controlas a un personaje animado que debe completar tareas diarias para mejorar su bienestar. A diferencia del juego narrativo, este juego te permite:

- 🚶 **Moverte libremente** con las flechas del teclado o WASD
- 🎯 **Completar tareas interactivas** acercándote a objetos y presionando ESPACIO
- 📊 **Ver tu progreso en tiempo real** con 4 barras de estadísticas
- 🌟 **Sentir el impacto** de cada acción con mensajes motivacionales
- 🎨 **Disfrutar gráficos animados** con un personaje que se mueve, pestañea y responde

### Características Principales

#### Personaje Animado (Muñequito)
- Movimiento suave en 4 direcciones
- Animación de caminar con brazos y piernas
- Expresiones faciales (pestañeo, sonrisa)
- Responde a tus comandos en tiempo real

#### Sistema de Tareas Diarias
Completa 6 tareas esenciales para el bienestar:
1. 🍳 **Desayunar** - Nutre tu cuerpo
2. 🏃 **Hacer ejercicio** - Libera endorfinas
3. 💬 **Llamar a un amigo** - Conecta socialmente
4. 🎨 **Practicar hobby** - Encuentra alegría
5. 😴 **Descansar** - Recupera energía
6. 📝 **Reflexionar** - Practica gratitud

#### Sistema de Estadísticas
- ⚡ **Energía**: Tu vitalidad física
- 🎯 **Propósito**: Sentido de dirección en la vida
- 💚 **Autocuidado**: Qué tan bien te cuidas
- 🤝 **Conexión Social**: Tus relaciones con otros

#### Mensajes Terapéuticos
Cada tarea completada incluye:
- Validación de tu esfuerzo
- Explicación del beneficio científico
- Refuerzo positivo
- Recordatorio de que cada paso cuenta

### Cómo Jugar

1. Abre `interactive-game.html` en tu navegador
2. Usa **FLECHAS** o **WASD** para mover al personaje
3. Acércate a objetos (se resaltarán en amarillo)
4. Presiona **ESPACIO** para interactuar
5. Observa cómo tus estadísticas mejoran
6. Completa todas las tareas para terminar el día
7. ¡Comienza un nuevo día y sigue progresando!

### Filosofía del Juego

El juego enseña que:
- ✨ **Cada acción pequeña importa** - No necesitas hacer grandes cosas
- 💙 **El autocuidado no es egoísmo** - Es necesario para tu bienestar
- 🌱 **El progreso > perfección** - No tienes que ser perfecto
- 🎯 **La vida tiene propósito** - Incluso en las tareas simples
- 🤝 **No estás solo** - Las conexiones son medicina

### Beneficios Terapéuticos

Basado en principios de:
- **Terapia Conductual Cognitiva**: Pequeñas acciones cambian pensamientos
- **Activación Conductual**: El movimiento combate la depresión
- **Gamificación de Salud Mental**: El juego motiva comportamientos positivos
- **Refuerzo Positivo**: Cada éxito se celebra

---

## 📖 PATHWAYS TO LIGHT - Juego Narrativo Original

### Therapeutic Framework

This game incorporates evidence-based mental health principles:

- **Cognitive Behavioral Therapy (CBT)** - Challenging negative thought patterns
- **Dialectical Behavior Therapy (DBT)** - Building distress tolerance skills
- **Hope Theory** - Demonstrating multiple pathways to recovery
- **Connection & Support** - Emphasizing the power of reaching out
- **Self-Compassion** - Validating feelings while showing alternatives
- **Crisis Intervention** - Providing immediate resources and safety planning

### Game Features

- **📖 Interactive Narrative**: Multiple story pathways based on real recovery experiences
- **💡 Hope Meter**: Visual representation of growing inner strength
- **🛠️ Coping Skills Collection**: Discover and collect evidence-based coping strategies
- **🌈 Visual Progression**: The environment lightens as hope increases
- **🆘 Always-Accessible Crisis Resources**: Help is never more than one click away
- **💙 Multiple Endings**: All paths show that recovery is possible

### Key Messages

1. **Depression is a liar** - The voice telling you there's no hope is the illness, not reality
2. **Small steps matter** - Surviving one moment at a time is enough
3. **Reaching out is strength** - Asking for help is courageous, not weak
4. **Treatment works** - Therapy, medication, and support are effective
5. **You are not alone** - Millions of people understand what you're going through
6. **Recovery is possible** - It may not feel like it now, but better days exist

---

## 🚀 How to Use

### Playing the Games

#### Opción 1: Un Día con Propósito 3D (Experiencia Inmersiva - RECOMENDADO)

1. Abre `juego-3d-css-inmersivo.html` en cualquier navegador web moderno
2. Haz clic en "Comenzar tu Día"
3. Usa el MOUSE para mirar alrededor
4. Usa WASD para moverte por el espacio 3D
5. Presiona E para interactuar con objetos cercanos
6. Completa tareas y experimenta la inmersión 3D

#### Opción 2: Un Día con Propósito 2D (Juego Interactivo - ACCESIBLE)

1. Abre `interactive-game.html` o `juego-premium-con-personaje.html` en cualquier navegador web moderno
2. Usa las flechas del teclado o WASD para moverte
3. Presiona ESPACIO cerca de objetos para interactuar
4. Completa tareas diarias y observa tu progreso
5. Disfruta de las animaciones del personaje y mensajes motivacionales

#### Opción 3: Pathways to Light (Juego Narrativo - MÁS PROFUNDO)

1. Abre `index.html` en cualquier navegador web moderno
2. Lee cada escena cuidadosamente
3. Haz elecciones que se sientan correctas para ti
4. Recuerda: Este es un juego sobre posibilidades, no prescripciones
5. Usa el botón "💙 I Need Support Right Now" en cualquier momento para recursos de crisis inmediatos

### For Educators & Counselors

This game can be used as:
- A conversation starter about mental health
- An educational tool about depression and recovery
- A way to introduce treatment options
- A resource for teaching coping strategies
- **Important**: This game is a supplement, not a replacement for professional mental health care

### For Developers

#### Archivos del Proyecto

- `juego-3d-css-inmersivo.html` - **Juego 3D inmersivo en primera persona** (CSS 3D Transforms, todo en un archivo)
- `juego-premium-con-personaje.html` - **Juego 2D premium completo** (versión más reciente con personaje animado)
- `interactive-game.html` - Juego interactivo 2D (versión inicial)
- `juego-completo-definitivo.html` - Versión 2D con 6 habitaciones y 25 tareas
- `index.html` - Juego narrativo principal
- `game-complete.html` - Versión standalone del juego narrativo
- `game.js` - Lógica del juego narrativo
- `style.css` - Estilos del juego narrativo
- `README.md` - Esta documentación

#### Tecnologías Utilizadas

Todos los juegos están construidos con:
- **HTML5** - Estructura semántica y accesible
- **CSS3** - Diseño visual calmante con gradientes y animaciones
- **CSS 3D Transforms** - Para el juego 3D (perspective, rotateX/Y/Z, translateZ)
- **Vanilla JavaScript** - Sin dependencias, fácil de modificar
- **Canvas API** - Para los juegos interactivos 2D
- **RequestAnimationFrame** - Para animaciones suaves
- **Diseño Responsive** - Funciona en desktop y móvil

#### Características Técnicas del Juego 3D

- 🌌 **CSS 3D Transforms** - Perspectiva y volumen real sin bibliotecas
- 🎮 **Primera Persona** - Control de cámara con mouse y WASD
- 🏗️ **Geometría 3D** - Habitación completa con 6 superficies transformadas
- 🎯 **Detección de proximidad** - Sistema de interacción inteligente
- ✨ **Partículas** - Sistema de celebración con animaciones CSS
- ⚡ **GPU Acelerado** - Usa la aceleración nativa del navegador
- 💾 **Cero dependencias** - Todo en un solo archivo HTML

#### Características Técnicas del Juego 2D

- 🎨 **Canvas 2D Rendering** - Gráficos dibujados en tiempo real
- ⌨️ **Event-driven Input** - Responde al teclado inmediatamente
- 🔄 **Game Loop Optimizado** - 60 FPS con requestAnimationFrame
- 📊 **State Management** - Sistema de estado simple pero efectivo
- 🎭 **Sprite Animation** - Animaciones fluidas del personaje
- 💾 **No requiere servidor** - Funciona directamente desde el sistema de archivos

---

## 🧠 What This Game Is and Isn't

### ✅ This Game Is:
- A tool to inspire hope
- An educational resource about mental health
- A way to explore coping strategies
- A reminder that help exists
- A demonstration that recovery is possible

### ❌ This Game Is NOT:
- A replacement for professional mental health treatment
- A diagnostic tool
- A cure for depression
- A substitute for crisis intervention when needed
- Medical advice

**If you're in crisis, please reach out to a crisis helpline or emergency services immediately.**

---

## 💜 For Those Who Are Struggling

If you're playing this game because you're in pain right now, please hear this:

**The fact that you're here, exploring options, seeking understanding - that matters.** That's you fighting back against the darkness, even if it doesn't feel like it.

Depression tells you lies:
- "No one cares" - **LIE**. People care. Crisis counselors answer the phone because they care.
- "Nothing will help" - **LIE**. Treatment works for millions of people.
- "It will never get better" - **LIE**. Recovery is real and possible.
- "You're a burden" - **LIE**. You're a human being who deserves support.
- "Death is the only way out" - **THE BIGGEST LIE**. There are always other options.

### What You Can Do Right Now:

1. **Call or text a crisis line** - They're free, confidential, and available 24/7
2. **Tell someone you trust** - A friend, family member, teacher, coach, anyone
3. **Go to an emergency room** - If you're in immediate danger
4. **Text a crisis text line** - If talking feels too hard
5. **Reach out to a mental health professional** - Therapists, counselors, psychiatrists
6. **Call your doctor** - They can help coordinate mental health care

### Treatment Options That Work:

- **Therapy**: CBT, DBT, ACT, and many other evidence-based approaches
- **Medication**: Antidepressants, mood stabilizers (prescribed by doctors)
- **Support Groups**: Connect with others who understand
- **Intensive Outpatient Programs**: More support while living at home
- **Inpatient Treatment**: When you need immediate safety and intensive care
- **Crisis Intervention**: Immediate support when you need it most

**You deserve help. Recovery is possible. Please stay.**

---

## 🤝 Contributing

If you'd like to improve this game or have suggestions:

- **Add more pathways** - Diverse experiences of depression and recovery
- **Improve accessibility** - Screen reader support, keyboard navigation
- **Translate** - Make this available in more languages
- **Add resources** - More crisis lines, treatment options, support information
- **Share experiences** - (With appropriate consent) Real recovery stories

### Guidelines for Contributors:

1. **Safety first** - All content must be safe, supportive, and never harmful
2. **Evidence-based** - Use established mental health principles
3. **Hope-focused** - Always show pathways toward help and healing
4. **Non-judgmental** - Never blame or shame
5. **Accessible** - Clear language, inclusive design
6. **Crisis resources** - Always prominent and accurate

---

## 📚 Additional Resources

### Learn More About Depression:

- **National Institute of Mental Health (NIMH)**: [www.nimh.nih.gov/health/topics/depression](https://www.nimh.nih.gov/health/topics/depression)
- **Mental Health America**: [www.mhanational.org/conditions/depression](https://www.mhanational.org/conditions/depression)
- **World Health Organization**: [www.who.int/health-topics/depression](https://www.who.int/health-topics/depression)

### Find Treatment:

- **Psychology Today Therapist Finder**: [www.psychologytoday.com/us/therapists](https://www.psychologytoday.com/us/therapists)
- **SAMHSA Treatment Locator**: [findtreatment.samhsa.gov](https://findtreatment.samhsa.gov)
- **Open Path Collective** (Affordable Therapy): [openpathcollective.org](https://openpathcollective.org)

### Support Communities:

- **r/depression** (Reddit support community)
- **r/SuicideWatch** (Reddit crisis support)
- **7 Cups** - Free emotional support: [www.7cups.com](https://www.7cups.com)
- **NAMI** (National Alliance on Mental Illness): Support groups and education

---

## 📄 License & Usage

This game is created to help people. Feel free to:
- Use it for educational purposes
- Share it with those who might benefit
- Adapt it for your community's needs
- Translate it into other languages

**Please maintain:**
- The core message of hope and recovery
- Accurate crisis resources
- Evidence-based mental health information
- Compassionate, non-judgmental tone

---

## 💌 A Final Message

To whoever is reading this:

Your life has value beyond measure. The world needs the unique contribution that only you can make. The pain you feel right now is real, but it's not permanent.

Depression is treatable. Suicidal thoughts can be overcome. Recovery happens every single day to people who once felt exactly like you feel now.

**Please stay.** Please reach out. Please give treatment a chance. Please believe that better days are possible.

They are.

**You matter. You are worthy of help. You deserve to heal. Please stay to see what happens next.**

---

## 🆘 Remember

**If you're in crisis right now, please:**
- **Call 988** (US Suicide & Crisis Lifeline)
- **Text "HELLO" to 741741** (Crisis Text Line)
- **Visit findahelpline.com** for international resources
- **Go to your nearest emergency room**
- **Call emergency services** (911, 999, 000, etc.)

**You are not alone. Help is available. Recovery is possible. Please reach out.**

---

*This game was created with compassion, hope, and the belief that every life matters.*

*If you're in mental health crisis, please seek professional help immediately. This game is not a substitute for professional mental health treatment.*
