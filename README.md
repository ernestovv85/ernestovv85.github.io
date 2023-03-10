# Encriptador
Las "llaves" de encriptación que utilizaremos son las siguientes:

`La letra "e" es convertida para "enter"`

`La letra "i" es convertida para "imes"`

`La letra "a" es convertida para "ai"`

`La letra "o" es convertida para "ober"`

`La letra "u" es convertida para "ufat"`

**Requisitos:**
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

Por ejemplo:
`"gato" => "gaitober"`
`gaitober" => "gato"`

- La página debe tener campos para 
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- El resultado debe ser mostrado en la pantalla.

**Extras:**
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del `ctrl+C` o de la opción "copiar" del menú de las aplicaciones.

**Elementos principales de la página**

- Título de su sitio web
- Campo para el texto que va a ser encriptado/desencriptado
- Un botón para encriptar
- Un botón para desencriptar
- Área para mostrar el texto encriptado/desencriptado.

Extra!
- Un rodapie con los datos de la persona que desarrolló el sitio web!

**Campo para el texto que va a ser encriptado/desencriptado**

Para la realización de esta parte de nuestro encriptador podemos usar tanto una etiqueta HTML <input> o <textarea>

input - HTML: Lenguaje de etiquetas de hipertexto | MDN

<textarea> - HTML: Lenguaje de etiquetas de hipertexto | MDN

**Área para mostrar el texto encriptado/desencriptado.**
  
En esta sección puedes ocultar y mostrar diferentes elementos dependiendo del estado, comenzarás con una imagen que debe ser substituida por el texto encriptado/desencriptado