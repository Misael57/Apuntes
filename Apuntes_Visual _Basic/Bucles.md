# Introduccion a los Bucles
Los bucles vienen siendo los ciclos de repeticion que nos ayudan a repetir procesos ya sea de una forma: **definida,indefinida y infinito**

Concepto Principal:

**_Variable Contadora_**: Es aquella que va a definir el limite de cuantas veces se va a repetir el ciclo. **Ojo**: Estas deben de ser de tipo Integer.
- Por lo general las variables contadoras empiezan con un **valor de 0**
- La variable contadora debe ser igual a ella misma sumado por el **aumento que se le va a dar**
````vb
Dim contadora As Integer
contadora= 0
contadora= contadora +1
````
## Bucle Determinado For
Permite repetir de una forma definida las veces que queremos que las instrucciones o tareas se repitan.

**Estructura del For**
- La palabra principal que va a ir es la Palabra `For`
- Poner el valor inicial de la **variable contadora**
- Poner el limite de la variable con la palabra `To` y establecerlo
- Al final se pone la palabra `step` y son los saltos  que se va a realizar **la variable contadora**
- Terminar el bucle `For` con la palabra `Next`
- Tambien se puede terminar antes de tiempo con la palabra `End For`
```vb
Dim i As Integer= 0
i= 0


'Estructura de una Variable For'
For i= 1 To 10 Step 1
Console.WriteLine("Este mensaje se repetira 10 veces")
Console.ReadLine()
Next
```

**Ejemplo:**
```vb
'programa para imprimir una serie de numeros'
Dim suma As Integer = 1

        For i = 2 To 20 Step 1
            Console.Write(suma & " , ")
            suma = suma + i

        Next

        Console.ReadLine()

```

## Bucle Indeterminado While

Este bucle ayuda a repetir y ejecutar tareas un cierto indeterminado de veces de acuerdo al valor que existe en la vuelta del bucle (Condicion para que se siga repitiendo). Para hacer un Bucle `While` se debe de seguir las siguientes requerimientos:

1. Poner la palabra `while` para empezar el bucle
1. Poner la **variable** que se va a usar para que se cumpla la condicion
1. Al final del Bucle se le debe de poner un `End While`

```vb
Dim numero A Integer= 1
'Estructira del While'
While numero <> 0

Console.WriteLine("Estamos dentro del bucle")
Console.Write("Ingresa un nuevo numero")
numero= Console.ReadLine()
Console.ReadLine()
End While
```
```vb
'Programa para sumar digitos'
 Console.WriteLine("Ingresa un Digito")
        Dim digito As Integer = Console.ReadLine
        Dim suma_digito As Integer = 0
        While digito > 0
            suma_digito = suma_digito + digito Mod 10 'Mod sirve para sacar el residuo de una divicion'
            digito = Math.Truncate(digito / 10)
        End While
        Console.WriteLine("La suma de los digitos es de" & suma_digito)
        Console.ReadLine()
```

## Bucle Indeterminado Do Loop
Permite repetir un bloque de instrucciones mientras una condicion sea verdadera o hasta que se convierta en verdadera. Para realizarlo se debe seguir los siguientes requerimientos:
1. Para empezar el Bucle se debe de empezar con la palabra `Do`
1. Al finalizar el Bucle se debe poner la palabra `Loop Until` o `Loop While` mas la **condicion** que se tiene que realizar a verdadero.
```vb
Dim numero As Integer
'Estructura del Bucle Do Loop'
'Until: Solo se va a repetir si es falsa la funcion y no dejara de hacerlo hasta que se convierta en verdadero'
Do
Console.WriteLine("Estamos dentro del bucle")
Console.Write("Ingresa un nuevo numero")
numero= Console.ReadLine()
Console.ReadLine()
Loop Until numero <> 0
```
```vb
Dim numero As Integer
'Estructura del Bucle Do Loop'
'While: Solo se va a repetir si es Verdadera la funcion y no dejara de hacerlo hasta que se convierta en Falsa'
Do
Console.WriteLine("Estamos dentro del bucle")
Console.Write("Ingresa un nuevo numero")
numero= Console.ReadLine()
Console.ReadLine()
Loop While numero <> 0
```
## Bucles Anidados ("Uno encima de Otro")
Se le llama **Anidado** aquellos bucles en los que dentro de uno se encuentra otro **bucle**. Esto quiere decir que cuando nosotros lo hacemos en el bucle principal se puede encuentrar  otro **bucle secundario**.

- Darle un buen uso a los bucles que hemos visto anteriormente
- Algunos Bucles no van a funcionar debido a que fallan cuando se ubican de forma equivocada causando que no se ejecute 1 bucle
```vb
'Programa para repetir un Mensaje de forma Infinita'
 'Uso de For para poder repetir 10 veces la condicion'
 For i = 0 To 10 Step 1
        'Uso del While cuando "i" es igual a 10 causando repetir el mensaje infinitamente'
            While i = 10
                Console.WriteLine("Hola Mundo")
            End While
        Next
        Console.ReadLine()
```


