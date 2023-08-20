# **Introduccion a Creacion de Paginas Web**
El Lenguaje de Etiquetas HTML es la estructura de una Pagina web ya que sin ella no existen, Es un lenguaje tan simple y no exige mucho. A continuacion empezaremos con algunas etiquetas:

- La primera etiqueta para empezar con nuestro proyecto es:
```html
<html> </html>
```

- Esta etiqueta sirve para que los parrafos tengan una estructura separada entre cada linea y no necesariamente usar el salto de linea
```html
<pre> </pre>
```
- Esta etiqueta sirve para poner en negritas el texto
```html
<b> </b>
```
- Esta etiqueta sirve para poner el texto en Italika
```html
<i> </i>
```
- Esta etiqueta sirve para poner enfasis a una palabra
```html
<em> </em>
```
- Esta etiqueta sirve para poner el texto muy pequeño
```html
<small> </small>
```
- Esta etiqueta sirve para marcar un texto.
```html
<mark> </mark>
```
- Esta etiqueta sirve para poner una linea como si estuvieramos eliminando una palabra
```html
<del> </del>
```
- Esta etiqueta sirve para poner una linea debajo del texto como si lo estuvieramos agregando
```html
<ins> </ins>
```
- Esta etiqueta sirve para cuando queramos por subindice en un texto
```html
<sub> </sub>
```
- Esta etiqueta sirve para cuando queramos poner un superindice en un texto
```html
<sup> </sup>
```
- Esta etiqueta sirve para señalar que el texto vino de una cierta cita y se le aplica automaticamente sangria
```html
<blockquote> </blockquote>
```
- Esta etiqueta sirve para agregar citas cortas
```html
<q> </q>
```
- Esta etiqueta sirve para definir una Abreviatura
```html
<abbr> </abbr>
```
> Este se puede usar con el atributo `title` para que cuando el Mouse se ponga en la palabra aparezca la palabra completa
- Esta etiqueta sirve para invertir el orden del texto
```html
<bdo dir="rtl"> </bdo>
```
- Esta etiqueta sirve para poner informacion de contacto del autor
```html
<address> </address>
```
- Esta etiqueta sirve para citar una obra de un autor externo 
```html
<cite> </cite>
```
- Esta etiqueta sirve para que se separen las lineas horizontalmente y se vaya creando una linea
```html
<hr>
```
- Esta etiqueta sirve para resaltar texto importante de un parrafo
```html
<strong> </strong>
```
> En las etiquetas de html el primero que se abre es el ultimo en cerrarse.

- La Etiqueta `head` sirve para que pongamos informacion entendible para que el navegador lo entienda
```html
<head> </head>
```

- La etiqueta `body` sirve para la informacion que se va a utilizar para el usuario
```html
<body> </body>
```
- La etiqueta `title` nos ayuda a identificar el nombre a nuestra Pagina web
```html
<title> </title>
```

Combinando estas **tres etiquetas** quedaria como:
```html
<html>
    <head>
        <title> Mi primera Pagina web </title>
        </head>
        <body>
            <p> Hola Mundo </p>
            </body>
</html>
```

La etiqueta `h1` sirve para poner titulos y subtitulos  en nuestra pagina html. Va disminuyendo el tamaño conforme el numero que se tenga
```html
<h1> </h1>
```
> Puede Alcanzar hasta el `h6` y no se puede repetir el `h1` ya que el navegador no lo tomaria como importante y es mejor que solo repitamos del (3-6).

La Palbra clave `lorem` + `Tab` Nos ayuda a crear de la nada texto y este tiene el proposito de observar como seria nuestra pagina web con letras antes de pasar la informacion valida
```html
<p> lorem </p>
```
### Ejercicio de Parrafos, Titulos y Nombre de la Pagina
![Ejercicio#1](img/Practica%231.PNG)
</br>
</br>
---
## **Estructura de una Pagina Web**

- La etiqueta `header` sirve para que se pueda agregar contenido en la **Parte Superior** de una Pagina web
```html
<header></header>
```
  - La etiqueta `footer` sirve para que se pueda agregar contenido en la **Parte Inferior** de una Pagina web
```html
<footer></footer>
```
- La etiqueta `nav` sirve para que se pueda agregar contenido en la **Barra de Navegacion** de una Pagina web
```html
<nav></nav>
```
- La etiqueta `main` sirve para que se pueda agregar el  **Contenido Principal** de una Pagina web
```html
<main></main>
```
- La etiqueta `section` sirve para que se pueda agregar contenido en una **seccion especifica**  de una Pagina web. Solo se va a usar cuando vas a introducir contenido importante a tu pagina web
```html
<section></section>
```
-  La etiqueta `article` sirve para que se pueda agregar contenido en un **articulo especifico**  de una Pagina web
```html
<article></article>
```
-  La etiqueta `aside` sirve para que se pueda agregar contenido en una **barra lateral**  de una Pagina web
```html
<aside></aside>
```
-  La etiqueta `div` sirve para que cuando no puedas utilizar ninguna etiqueta de las anteriores de una Pagina web y para que puedas acomodar algun apartado especifico de la pagina web
```html
<div></div>
```
![Ejercicio#1](img/Estructura_Html_Paginaweb.PNG)
</br>
</br>

## **Uso de Enlaces y Imagenes**
Para que nosotros podamos usar la etiqueta `nav` y creemos nuestra barra de navegacion necesitamos de las sigueentes etiquetas

- La etiqueta `a` nos va a servir para que nos muestre el texto y se acomode en la barra de navegacion
```html
<a></a>
```
Pero necesitamos agregar **Atributos** para que cumpla con su funcion que en este caso se le llama `href` y este nos va a ayudar a poner enlaces a nuestra pagina
```html
<a href="">Texto</a>
```
> Tambien puedes usar el atributo `target` que puede tener diferentes valores: **_self,_blank,_parent,_top**
Este atributo le dice al navegador como abrira el link si dentro de la misma pagina(self), abriendolo con otra pestaña(blank),abrirlo en el marco principal (parent) o cuerpo completo de la ventana(top).
- La etiqueta `img` se usa para agregar imagenes a la pagina y solo tiene llaves de apertura. Pero este se va a acompañar con un atributo llamado `src`
> Tambien se puede poner los atributos `alt` para agregar texto cuando haya error en cargar la imagen y tambien esta las propiedades `width` y `height`
```html
<img src="" alt="Hola Mundo" height= "40" width= "60"
```
![Ejercicio#3](img/Practica%233.PNG)

> Tambien lo que puedes hacer es crear enlaces y ponerlos en imagenes de esta forma
```html
<a href="https://www.youtube.com/watch?v=SUL11lUd6sI&list=RDSUL11lUd6sI&start_radio=1">
<img src="img/Paloma.PNG" alt="No disponible" height="600" width= "800"> 
</a>
```

## **Formulario**
Para qe nosotros creemos Formularios se debe de usar la etiqueta `form`. Pero esto no basta ya que necesita tambien mas etiquetas:
```html
<form></form>
```
* La etiqueta `legend` sirve para poner indicaciones a los usuarios.
```html
<legend></legend>
```
* La etiqueta `fieldset` se utiliza para agrupar elementos relacionados en un formulario y definir una sección con un borde alrededor del conjunto de elementos
```html
<fieldset></fieldset>
```
* La etiqueta `label` Sirve para que le pongamos un nombre a un campo en especifico
```html
<label> Nombre </label>
```
* La etiqueta `input` sirve para agregar los campos donde el usuario va a poner la informacion que se le pide y existen muchos tipos de input. Este de tipo tipo **Texto**.
```html
<input type="text">
```
- La propiedad del `placeholder` ayuda a que aparezca texto dentro del campo donde el usuario pondra la informacion.
```html
<input type="text" placeholder="Nombre">
```
* La etiqueta `textarea` es un campo amplio que nos ayuda a que el usuario escriba contenido mas extenso.
```html
<textarea></textarea>
```
* La etiqueta `button` nos ayuda a crear un boton para que realize na cierta accion en nuestro formulario.
```html
<button type="submit">Texto</button>
```
![Ejercicio#4](img/Practica%234.PNG)

* La etiqueta `span` nos ayuda a dividir un elemento dentro de una etiqueta:
```html
<span> </span>
```