# **Introduccion a Javascript**
Para empezar con este universo de este lenguaje de programacion. Necesitas saber lo siguiente:
- Su sintaxis es facil
- Es un lenguaje interprete
- Tiene usos como el maching learning, aplicaciones mobiles,videojuegos,etc.
- Tiene case sensitive
- El Hoisting es la forma en como ejecuta javascript a nuestro navegador que es de paso a paso.

## **Antes de Empezar**
La forma en que se compone una variable es la siguiente:

**Categoria de Variable** + **identificador** = **Valor de variable**
```js
var num1 = 10;
```
Al momento de crearlas hay que tomar en cuenta algunas cosas:
* Puedes usar la Nomenclatura Pascal y guiones bajos en el identificador
* Fijarse en el orden del codigo debido a que javascript lo lee paso a paso
* Es una buena practica usar el **;**
* Tambien puedes poner un signo de dolar $ al principio de los nombres de las variables ya que este lo toma como texto.

## **Formas de Escritura y Lectura en Javascript**
Existen muchas formas de mostrar datos a nuestro navegador;
> Mostrarlo en Consola con el Comando
```js
console.log("Hola Mundo");
```
> Usando la alerta del Navegador
```js
alert('Mensaje');
```
> Mostrarlo en el documento html (Solo se usa para pruebas)
```js
document.write("Hola Mundo")
```
> Mostrarlo en html pero con etiquetas
```js
document.getElementById("NombreID").innerHTML = "Hola Mundo";
```
> Otra forma de Mostrar en el Navegador
```js
prompt("¿Cuanto dinero tienes?");
```
## **Variables y tipos de datos en Javascript**
Existen diferentes categorias de variables en este lenguaje y son 3 que son de forma nativa:
- **var:** Tiene alcance global o es una variable publica
```js
var nombre = "Misael";
```
> `var`: Cuando se usa este para declarar una variable se puede declarar 2 veces la misma variable
- **let:** Tiene menos alcance o es una variable privada
```js
let: num_1= 19;
```
> **`let`**: Cuando se tiene este para declarar tenemos que tomar en cuenta que no podemos declarar la misma variable 2 veces y solo tiene **alcance de bloque**
- **const:** Solo tiene un solo valor y no se puede Modificar
```js
const bool= true;
```
> **Const**: Solo usalo cuando vayas a usar una nueva matriz,objeto,funcion o expresion regular.

Los Tres tipos aceptan de forma primitiva valores de tipo `string,bool y number`.
### **Formas de Declaracion**
Existen distintas formas de declarar una variable y son las siguientes:

1. **Declararla primero y luego inicializarla:**
En una linea vamos a <mark style="background-color: aqua;"> Declararla </mark> y vamos a darle un valor en otra linea
```js
let num_1;
num_1= 45;
```
2. **Declararla y Iniciarla a la vez:** Es la forma comun la que usan los programadores
```js
let num_2 = 25;
```
3. **Declarar y Inicializar varias variables al mismo tiempo:** Este solo se aplica cuando se va a poner el mismo tipo de dato en todas
```js
let num_1= 1; let num_2= 2; let num_3= 3;
// Tambien se puede usar comas
var num_4= 4, num_5= 5, num_6= 6;
```
#### **Tipos de Valores**
**Valor Fijo:** Se les llama literales y estan tienen que seguir ciertas reglas:
- Solo se acpetaran numeros con o sin punto decimal
```js
document.write(10.50);
```
- Solo se aceptara texto si estos tienen comillas simples o dobles:
```js
document.write("Hola Mundo");
```

**Valor de Variable:** Son las que se usan normalmente para almacenar datos:
```js
var pi;
pi= 3.1416;
```
## Operadores de Asignacion
En esta seccion solo veremos las Operaciones Basicas que todos conocemos para cambiar los valores de una variable (Suma,Resta,Multiplicacion y Divicion):

1. **Suma:** Para que haga esta Operacion se tiene que usar el signo de `+`, Su estructura es la siguienta:
```js
let valor_original= 15;
valor_original += 3:
document.write(valor_original);
```
> Forma de Javascript

```js
let valor_original= 15;
valor_original= valor_original + 3;
document.write(valor_original);
```
> Forma Comun

2. **Resta:** Para que se haga esta Operacion necesitaremos del uso del signo `-`, su estructura es la siguiente:
```js
let valor_original= 15;
valor_original -= 3:
document.write(valor_original);
```
> Forma Javascript
```js
let valor_original= 15;
valor_original= valor_original - 3;
document.write(valor_original);
```
> Forma Comun
3. **Multiplicacion:** Para realizar esta Operacion se necesita usar el signo de `*`, su estructura es la siguiente es:
```js
let valor_original= 15;
valor_original *= 3:
document.write(valor_original);
```
> Forma Javascript
```js
let valor_original= 15;
valor_original= valor_original * 3;
document.write(valor_original);
```
> Forma Comun

4. **Divicion:** Para realizar esta Operacion se necesita dar el uso de `/`, Su estructura es la siguiente:
```js
let valor_original= 15;
valor_original /= 3:
document.write(valor_original);
```
> Forma Javascript
```js
let valor_original= 15;
valor_original= valor_original / 3;
document.write(valor_original);
```
> Forma Comun
4. **Residuo:** Para realizar esta Operacion se necesita dar el uso de `%`, Su estructura es la siguiente:
```js
let valor_original= 16;
valor_original %= 3:
document.write(valor_original);
```
> Forma Javascript
```js
let valor_original= 16;
valor_original= valor_original % 3;
document.write(valor_original);
```
> Forma Comun

4. **Exponensacion:** Para realizar esta Operacion se necesita dar el uso de `**`, Su estructura es la siguiente:
```js

let valor_original= 15;
valor_original **= 3:
document.write(valor_original);
//Existe tambien otro metodo usando la clase Math
{
let valor_original= 15;
valor_original= Math.pow(valor_original,3);
console.log(valor_original);
}
```
> Forma Javascript
```js
let valor_original= 15;
valor_original= valor_original * valor_original * valor original;
document.write(valor_original);
```
> Forma Comun


## Formas de Concatenacion
En javasript existen formas de unir cadenas de texto y numeros y este apartado veremos algunas. 
1. **Concatenar dos Cadenas:** Esto quiere decir que vamos a unir dos cadenas de texto.
```js
// Para realizar esto se debe usar el signo de "+"
let nombre= 'Misael';
nombre= nombre + " Hola";
document.write(nombre);
```

2. **Concatenar cadenas y numeros:** Esto quiere decir que aparte de cadenas de texto, tambien van a existir numeros.
```js
let palabra= 'El valor de este numero es';
let numero = 5;
document.write(palabra + numero);
```
3. **Metodo Concat:** Este es un metodo comun en los strings y hace lo mismo que el sigo `+` solo que la diferencia es que es un **Metodo**
```js
let frase= "El valor de numero es ";
let numero= 5;
document.write(frase.concat(numero))
```
> Ojo: Solo se puede usar con los valores de String.

4. **Usar la llave y signo de Peso:** Esto tambien es otra forma de hacerlo directamente de una cadena:
```js
var nombre= "Misael"
var frase;
frase= `soy ${nombre} y estoy caminando`;
document.write(frase);
```
> Tambien se puede usar codigo html directamente de la misma forma
```js
var html;
html= `<h1 style="color: blue;">Hola Mundo<h1>`
document.write(html);
```
5. **Doble Coma y Coma simple:** Si quieres usar uno de estos existen estas maneras:
```js
//Forma de usar coma doble
let misael= `Misael Alejandro "Hernandez" Mendoza`;
//Forma de usar coma simple
let mama= "Nadia Judith `Mendoza` Recio";
document.write(misael);
document.write(mama);
```

- **Usar Numeros con Cadenas:** Esto quiere decir que agreguemos en la misma linea cadenas de texto y tambien valores numericos.
```js
//El Resultado sera una cadena
var total = "4" + 5 + 6;
console.log(total);
//El Resultado sera una cadena y numero.
var total2= 5 + 2 + "6";
console.log(total2);
```
> El resultado va a ir variando dependiendo de como nosotros vayamos a manejar la concatenacion
## Operadores Logicos
Estos sirven para evaluar condiciones y determinar si se cumplen o no. Estos usan mucho el `true` y `false`.

- **AND:** Para que esta se relize (o sea _verdadera_), se tienen que cumplir las dos condiciones que se tienen planteadas.
```js
var num_real= 5 != 4 && 4 < 5;//True
document.write(num_real);
```

- **OR:**  Esta operador solo se va a realizar si una de las condiciones que estan planteadas se cumple:
```js
// La Primera condicion no se cumple pero la Segunda Si
var num_real= 4 != 4 || 4 < 5;
document.write(num_real);
```

- **NOT:** Este lo que hace es invertir la condicion de una expresion. Como pasar de falso a verdadero o viceversa:
```js
// Aqui pasa que es falsa la expresion pero la convierte a verdadera
var num_real= !(5 < 4)
document.write(num_real)
```

<!-- Investigar sobre Operadores de Comparacion,Operadores Logicos y camelCase-->
## Operadores de Comparacion
Estos se relacionan con las variables booleanas ya que se relacionan con respecto a que si cumplen ciertas condiciones.Estos no devolveran valores de tipo booleano: Verdadero y Falso.:

- **Igualacion:** Significa que tienen el mismo valor que contenga una variable es igual a otra.
```js
let num_1= 23;
let num_2= 23;
document.write(num_1==num_2) //True
```
- **Mayor y Menor:** Este sirve para indicar si una variable su valor sea alto o bajo con la que se esta comparando.
```js
// Mayor que >
var condicion = 6 > 5; //True
// Menor que <
var condicion2= 5 < 6; //False
document.write(condicion);
```
- **Distinto:** Significa que la primera variable contiene  valor diferente al que se le esta comparando.
```js
var condicion= 6!= 5; //True
var condicion= 5!= 5; //False
document.write(condicion);
```

## Ambito de Bloque
Cuando nosotros queremos que nuestro programa tenga variables globales debido a que esto puede ocasionar muchos problemas en lo que respecta con cualquier minimo cambio. Por eso se usa las **`{}`** para poder encerrar a nuestros bloques de codigo.

- Las variables que tengan **`let`** no pueden modificarse fuera de las llaves
```js
{
    let x= 45;

}

// Aqui no se pueden usar ya que esta fuera de las llaves
```

- Las variables que tengan **`var`** se pueden moficar fuera de las llaves
```js
{
    var x= "Hola";
}

x= "¿Como estas";
```

- Redeclarar variables usando **`var`** es un problema ya que este no importa si las variables tienen diferente valor, siempre va a poner para todas la ultima delclaracion;
```js
num_1= 30;
var num_1;
// Al Principio su valor es de 30
{
    var num_1= 50;
}

// El valor de num_1 va a ser de 50 dentro y fuera de las llaves
```
> Puedes tambien primero poner el valor a una variable y luego declararla pero solo si se usa **`var`**

- Redeclarar variables usando **`let`** resuelve el problema anterior ya que los valores seran muy diferentes los que esten dentro y afuera de las llaves
```js
let num_1= 40;
// Al principio y fuera del Parentesis la variable tendra el valor de 40
{
    let num_2= 60;
// Dentro del Parentesis la variable tendra un valor 60.
}
```
> Puedes redeclarar variables con **`let`** todas las que quieras pero solo y si se realizan en bloques.


## Condicionales con IF
Esto nos van a ayudar mucho ya que su funcion es **Ejecutar una cierta accion cuando se presente una ciera situacion especifica**.

**_Estructura de un if:_** La forma basica seria de la siguiente manera: **_if + (condicion) + {Codigo a ejecutar}_**
```js
let num_1= 10;
if(num_1 != 5)
{
    console.log("Este es un numero diferente a 5");

}
```
> Si vamos a presentar mas de dos situaciones en los **`if`** es necesario usar **`else if`** y **`else`**. El `else if` es una opcion especifica por si las condiciones anteriores se cumplieron y `else` es una opcion general por si todas las condiciones anteriores no cumplieron


```js
var nombre= "Misael";

// Este va a evaluar si nombre tiene el valor de Carlos Mendoza
if(nombre== "Carlos Mendoza")
{
    alert("Hola Carlos");
}

//Este va a evaluar si nombre tiene el valor de Misael
else if (nombre== "Misael")
{
    alert("Hola Misael")

}

else
{
    alert("¿Como te llamas?");

}
```
> **Nota:** Puedes usar Operadores Aritmeticos,Logicos y mas en los if.

## Arrays
Son contenedores de valores muy comunes en los lenguajes de programacion ya que su funcion es almacenar diferentes tipos de valores en un solo lugar.

**_Estructura Basica de un Array:_** **`Nombre del Array + [Elementos]`**

```js
frutas= ["Manzana","Banana","Pera","Uvas"]
```
> Los **`Arrays`** Tienen la costumbre de que el numero de posiciones que tengan siempre va a empezar desde 0

**Usar elementos de un Array:** Para esto es importante saber en que posicion se ubican los elementos que nosotros vayamos a usar. Por ejemplo si solo queremos imprimir la palabra **Banana** seria:
```js
frutas= ["0Manzana","1Banana","2Pera","3Uvas"]
document.write(frutas[1]);
```

**Arrays Asociativos:** Es igual que el anterior solo que lo que cambia es que el valor de cada posicion se le va a asociar con una palabra clave. Ejemplo:
```js
let Misael= {
	edad: 18,
	Estudios: "Universidad",
	Promedio: 8.0
};
//Aqui va a mostrar el valor que contenga la palabra edad
document.write(Misael["edad"]);
```
> Si vas a mostrar el valor de una palabra recuerda siempre usar entre las llaves las **comas dobles**

**Asignacion de valores en variables:** Solo es de declarar una variable y especificar que elemento queremos que se vaya a guardar. Ejemplo:
```js
//Array que vamos a usar
let Misael= {
	edad: 18,
	Estudios: "Universidad",
	Promedio: 8.0
};
//Almacenando valor de edad
let edadMia= Misael["edad"]
```

## Bucles
Estas nos ayudan a **ejecutar repetidamente el codigo solo hasta que la condicion que nosotros le hayamos dados se haya cumplido** o puede variar dependiendo del **`Bucle`** que vayamos a usar.

### Estructura Basica de un While

**`while + (condicion) + {codigo a ejecutar}`**
Solo se va a ejecutar hasta que la condicion que nosotros hayamos especificado se convierta en verdadera.
Ya que si la condicion siempre va a ser verdadera vamos a crear un **bucle infinito** y jamas se detendra. 
```js
// Bucle no infinito
num_1= 0;
while(num_1 >= 10)
{
    num_1++
    document.write(num_1 + "<br>");
}
```
> Recuerda que este bucle **primero va a preguntar la condicion y despues va a realizar el codigo**

### Estructura Basica de un Do while
**`Do + {codigo a ejecutar} + while(condicion)`**
Ejecuta primero el codigo y luego checa la condicion. Solo se detendra hasta que la condicion que nosotros hayamos especificado se convierta en Verdadera.
Ya que si la condicion siempre va a ser verdadera vamos a crear un **bucle infinito** y jamas se detendra. 
```js
let num_1= 10;
do
{
    document.write(num_1 + "</br>");
    num_1--;
    
}
while(num_1 > 0 && num_1 <= 10)
```
> Recuerda que este bucle **primero ejecuta el codigo y despues pregunta la condicion**

## Estructura Basica de un For
**`For + (variable contadora;condicion incremento) + {}`**

Este es un bucle en el que podemos modificar cuando va a empezar a ejecutarse y cuando termina. La diferencia con los demas es que lleva una **variable contadora**.
```js
let i;
for(i= 0; i <= 5; i++)
{
    document.write(`El resultado es:${i}` + "</br>")

}
```

### For In
**`For + (variable contadora + in + nombre de array) + {}`**

Este nos ayuda mucho cuando queremos saber las posicion de un array.
```js
let familia= ["Mama","Papa","Hermano"];
for(miembros in familia)
{
    document.write(miembros + "<br>")

}
```
### For of
Este nos ayuda a saber que es lo que contiene los elementos dentro del array
```js 
let familia= ["Mama","Papa","Hermano"];
for(miembros of familia)
{
    document.write(miembros + "<br>")

}
```
## Sentencias en los Bucles
### Break
Este nos Ayuda a que los Bucles **se detengan en un cierto punto** a la hora de ejecutar nuestro codigo. Normalmente van acompañados con los **`if`**. Asi se veria en un **`while`**
```js
let num_1 = 100;
while(num_1 >= 0)
{
    document.write(num_1);
    num_1--;
    if(num_1 == 50)
    {
        document.write("Adios")
        break;

    }

}
```
> Este se puede usar en cualquiera de los bucles.

### Continue
Este nos ayuda mucho ya que permite detener el bucle en cierto punto saltandose un cierto elemento que no cumple con la condicion y permite continuar con los demas.
```js
let i;
for(i= 10; i >= 0 ; i--)
{
    document.write(i + "br");
    if (i == 5)
    {
        document.write("Lo siento" + "<br>");
        continue;

    }
}
```

