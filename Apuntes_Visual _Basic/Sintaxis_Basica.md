---
title: "Sintaxis_Basica_vb_Apunte#1"
tags: ""
---

## Sintaxis Basica en Visual Basic 
Comando para **escribir texto y que se muestre en la consola**:
```vb
'Este sirve para que haga un salto de linea y ingresemos el valor'
Console.WriteLine("Escribe texto Aqui")
Console.Readline()
`Este sirve para ingresar el valor pero a lado del Mensaje`
Console.Write("Escribe texto Aqui")
Console.Readline()
```
Comando para que **muestre texto pero se ingresa cualquier tecla para terminar**:
```vb
Console.Readkey(true)
```
Comando para **crear variables**:
* Siempre se usa al **principio la palabra "Dim" antes de declarar y "As" despues del nombre de la variable**
* Asignarle un **nombre a la variable**
* Especificar el **tipo de dato que tendra la variable**
```vb
// Variable Integer
Dim variable_1 As Integer= 15
// Variable Double
Dim variable_2 As Double= 12.30
// Variable Char 
Dim variable_3 As Char="a"
// Variable String
Dim variable_4 As String="Hola Mundo"
// Variable Boolean
Dim variable_5 As Boolean= True
```
Comando para **crear constantes**:
* Siempre se usa al **principio la palabra "Const" antes de declarar y "As" despues del nombre de la constante**
* Asignarle un **nombre a la constante**
* Especificar el **tipo de dato que tendra la constante**
* Declarar **un valor fijo** a la constante
```vb
Const pi As Double= 3.1416
```

## Ambito de Variables
Variables Locales: Son declaradas dentro de un metodo y solo se pueden usar en ellas mas no se puede acceder fuera y ni en otro metodo. Ejemplo:
```vb
Sub Main()
Dim numero As Integer= 4
`sobrescribimos el valor de la variable`
numero= 6
End Sub
```

Variables Globales: Son declaradas fuera de los metodos y al inicio ya que esta va a servir para que cualquiera pueda acceder a ella sin importar que estan en diferentes espacios.
```vb
Module Module1
    `Declaracion en el Mpdulo`
    Dim numero As Integer = 10
    
    `Acceso a la variable en un metodo`
    Sub Main()
        numero = 15

    End Sub

End Module
```
## Operaciones y Expresiones
**Expresion de Suma:** Cuando se declara una variable con dos valores sumandose
```vb
Dim suma As Integer= 8+5
`Impresion de la suma`
Console.WriteLine(suma)
Console.ReadLine()
```

**Expresion de Resta:** Cuando se declara una variable con dos valores Restandose
```vb
Dim resta As Integer= 8-5

`Impresion de la resta`
Console.WriteLine(resta)
Console.ReadLine()
```

**Expresion de Division:** Cuando se declara una variable con dos valores dividiendo
```vb
Dim division As double= 8/5
`Impresion de la division`
Console.WriteLine(division)
Console.ReadLine()
```
**Expresion de Residuo de Division:**
Se utiliza para tomar el residuo de la Division:
```vb
Dim residuo As double= 8 Mod 5
`Impresion de la division (residuo)`
Console.WriteLine(residuo)
Console.ReadLine()
```

**Expresion de Multiplicacion:** Cuando se declara una variable con dos valores multiplicandose
```vb
Dim multip As Integer= 8*5
`Impresion de la multiplicacion`
Console.WriteLine(multip)
Console.ReadLine()
```
**Expresion de Incremento:** Cuando se declara una variable y se le incrementa por valor.
```vb
Dim numero As Integer= 8
numero += 2
`Impresion de la variable incrementada`
Console.WriteLine(numero)
Console.ReadLine()
```

**Expresion de Reduccion:** Cuando se declara una variable y se le reduce por valor.
```vb
Dim numero As Integer= 8
numero -= 2
`Impresion de la variable reducida`
Console.WriteLine(numero)
Console.ReadLine()
```
**Expresion de Condiciones Booleanas (Mayor que):** Cuando se declara una variable booleana y se le pone una condicion solo nos puede arrojar dos resultados. Si es **True o False**
```vb
Dim condicion As Boolean= -14 > 2
`Impresion del Resultado de la Condicion`
Console.WriteLine(condicion)
Console.ReadLine()
```

**Expresion de Condiciones Boolean(Igual a):** Cuando se declara una variable booleana y se le pone una condicion que puede es igual al valor. Solo nos puede arrojar dos resultados: Si es **True o False**
```vb
Dim condicion As Boolean= (2 = 2)
`Impresion del Resultado de la Condicion`
Console.WriteLine(condicion)
Console.ReadLine()
```

**Expresion de Condiciones Booleanas (Operador Logico And):** Cuando se declara una variable booleana y se le pone una condicion solo va a ser verdadero si ambos son verdaderos (cumplen la condicion). Solo nos puede arrojar dos resultados: Si es **True o False**
```vb
Dim condicion As Boolean= 7 > 4 And 3 > 6
`Impresion del Resultado de la Condicion`
Console.WriteLine(condicion)
Console.ReadLine()
```

**Expresion de Condiciones Booleanas (Operador Logico Or):** Cuando se declara una variable booleana y se le pone una condicion solo va a ser falso si ambos son falso (no cumplen la condicion). Solo nos puede arrojar dos resultados: Si es **True o False**
```vb
Dim condicion As Boolean= 7 > 4 Or 3 > 6
`Impresion del Resultado de la Condicion`
Console.WriteLine(condicion)
Console.ReadLine()
```
**Expresion de Condiciones Booleanas (Operador Logico Not):** Cuando se declara una variable booleana y se le pone una condicion se va a poner lo opuesto de su resultado original. Solo nos puede arrojar dos resultados: Si es **True o False**
```vb
Dim condicion As Boolean= Not 14 > 8
`Impresion del Resultado de la Condicion`
Console.WriteLine(condicion)
Console.ReadLine()
```

## Entrada de Datos por Consola
Para que el usuario ingresecon teclado el valor de una variable tipo String se va a usar el **Console.Readline()**:
```vb
`Introducir valor de forma manual`
 Dim nombre As String = Console.ReadLine()
        `Imprime el valor`
        Console.WriteLine("Tu nombre es" & nombre)` El simbolo & sirve para concatenar`
        Console.ReadLine()
```
