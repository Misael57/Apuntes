# Introduccion a los Vectores o Arrays
Consisten en crear una especie almacen de variables  para guardar muchos valores. El **Array** Es un conjunto de datos del mismo tipo que son accedidos por medio de posiciones o indices, para posteriormente utilizarlos en nuestros programas. Son utilies para almacenar grandes datos sin tener que realizar muchas lineas de codigo.
> Importante: Siempre van a empezar con la posicion numero 0

## Tipos de Declaracion de Arrays
### Metodo Comun (Sin Valores):
- Se pone como primera palabra `Dim`
- Se pone el **nombre de nuestro Array**
- Se pone entre () el numero de elementos que va a contener el Array
- Despues se pone la palabra `As` 
- Declararlo con **solo un tipo de variables** ("No puede ser de diferentes tipos")
```vb
Dim nombres(6) As String
```
### Metodo New String (Nombres Incluidos):
- Se pone como primera palabra `Dim`
- Se pone el **nombre de nuestro Array**
- Se pone el signo `=`
- Se pone la Palabra `New` + **Tipo de Valor del Array**
- Se pone al final **()** y se abren las llaves `{**Aqui van a ir nuestros valores**}`
```vb
Dim nombres = New String() {"Maria", "Pedro", "Daniela", "Juan", "Camilo", "Mario"}
```

### Metodo Bucle For
- Declarar el Array con el **Metodo Comun**
- Ponemos un bucle `For`
- En la variable contadora debe de **empezar con 0**
- Ponerle la palabfra `To` + **El numero de posiciones** que tiene el Array
- Dentro del `For` se va a poner Comandos para que el usuario ingrese los valores de cada posicion
- Al final Se va a poner el **Nombre del Array** + **la variable contadora** + El comando que se va a usar para ingresar datos
```vb
 Dim nombres(6) As String
        For i = 0 To 5
            Console.WriteLine("Ingresa el valor de la posicion " & i)
            'Se va a almacenar en una posicion del Array'
            nombres(i) = Console.ReadLine()
        Next
```

### Metodo Manual
- Se debe declarar la variable de la forma del **Metodo Comun**
- Para asignarle un valor a un especio en el Array de forma individual se debe de:
1. Ponerle el **nombre** que le pusimos al declarar el Array en el **Metodo Comun**
2. Abrir **() y Asignarle el Espacio** que le corresponde al Elemento
3. Poner el Signo `=` y Poner el valor del mismo tipo que fue declarado del Array
```vb
Dim nombre (6) As String
nombre(0)= "Carlos"
nombre(1)= "Eduardo"
nombre(2)= "Nicolas"
nombre(3)= "Alejandro"
nombre(4)= "Dalton"
nombre(5)= "Mario"
```

## Como Mostrar un valor especifico ubicado en el Array

Esto nos va ayudar a saber cantidades que se almacenan en el Array por medio de los comandos que lo muestren en el programa. 
- Declarar la variable como lo hacemos de forma comun con el `Dim` + **_nombre_** + `As`+ **_Tipo de Variable_** + `=` + **_nombre del Array_** * `(Posicion del valor)`
- Escribir el **Comando de Escritura** para mostrar el Resultado en el Programa (En este caso es `Console.WriteLine`)
- Poner el **nombre de la variable que creamos** y en **()** ponemos la posicion que nosotros queremos mostrar
```vb
Dim nombre (6) As String
nombre(0)= "Carlos"
nombre(1)= "Eduardo"
nombre(2)= "Nicolas"
nombre(3)= "Alejandro"
nombre(4)= "Dalton"
nombre(5)= "Mario"
'Variable delaclarada para mostrar valor en la posicion 4'
Dim numero_1 As String= nombre(4)
Console.WriteLine(numero_1)
Console.ReadLine()
```
## Como Mostrar los Valores de todas las Posiciones en el Array
Este nos va a permitir ver todo el contendio que hay en nuestro Array pero para que esto funcione necestiamos el uso del `For`

- Usar el Metodo For como: `For` + **_Variable Contadora_** + `=` + **_Posicion desde el numero Cero_** + `To` + **_Nombre del Array_**`.Length` + `-`+ **1** + `Step` + **1**
- Usar dentro del `For` el Comando de Escritura que se use para la ocasion (En este caso es `Console.WriteLine`)
- Dentro del `Console.WriteLine` se va a poner el **_nombre del Array_** a mostrar valores + Entre Parentesis (**_variable contadora_**)
```vb
Dim nombre (6) As String
nombre(0)= "Carlos"
nombre(1)= "Eduardo"
nombre(2)= "Nicolas"
nombre(3)= "Alejandro"
nombre(4)= "Dalton"
nombre(5)= "Mario"
'Uso del For para para mostrar todos los valores en la posicion 4'

For i= 0 To nombre.Length - 1 Step 1
Console.WriteLine(nombre(i))
Next
Console.ReadLine()
```

Tambien se puede usar el `For Each` de la sig manera:

- Para usar el For Each se hace la sig estructura: `For` + `Each`+ **_nombre de la variabe que se va a declarar_** + `As` + `Tipo de Variable que tiene los valores array` + `In` + **_nombre del array_**
- Usar dentro del `For Each` el Comando de Escritura que se use para la ocasion (En este caso es `Console.WriteLine`)
- Dentro del los parentesis del `Console.WriteLine` va a ir el **nombre de la variable que declaramos en el** `For Each`
```vb
Dim nombre (6) As String
nombre(0)= "Carlos"
nombre(1)= "Eduardo"
nombre(2)= "Nicolas"
nombre(3)= "Alejandro"
nombre(4)= "Dalton"
nombre(5)= "Mario"
'Uso del Bucle For Each'
For Each nom As String In nombre 
Console.WriteLine(nom)
Next
```