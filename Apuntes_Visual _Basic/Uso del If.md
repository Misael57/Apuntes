# Uso del If
Se usa para cuando hagamos programas de seleccion pero solo se van a cumplir si la **condicion se realiza o es correcta**. 

**Estructura del If**
El if se va a conformar de la siguiente Manera
- Poner siempre la sintaxis `if` al inicio del comando
- Poner la condicion que se va a relacionar con alguna variable que ya hayamos declarado
- Terminar con la Palabra `Then`
- Se usa `Else` para cuando no se cumpla la condicion de ningun if y else if y se realizen otras series de pasos diferentes
- `Else If` es igual que un if normal solo que esta se consideraria una segunda decision con uan condicion distinta
- "

````vb
Dim edad As Integer
Console.WriteLine("Cual es tu edad")
edad = Console.ReadLine()
'Estructura del If`
If edad = 18 Then
    Console.WriteLine("Eres Mayor de Edad")
Else if edad <= 18 Then 
Console.WriteLije("Eres menor de edad")
Else
Console.WriteLine("Porfavor ingresa un numero valido")
End if

````

**If con Operador AND**
````vb
Dim edad As Integer
Console.WriteLine("Ingresa tu edad")
edad= Console.ReadLine()
 'Estructura if con And'

If edad <= 18 AND edad >= 25
Console.WriteLine("Eres un Adulto")
End If
Else If edad >=

````
