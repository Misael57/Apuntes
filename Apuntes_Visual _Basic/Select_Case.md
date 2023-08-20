**Estructura de un Select Case**

Este es muy diferente a los `if` ya que son estructuras de seleccion y no se les puede poner condiciones tan especificas:

- Se debe poner al comienzo la palabra inicial `select`
- Poner la **variable** la que se hara cargo de las diferentes elecciones
- Cuando se vaya una decision recuerda poner primero la palabra `case` y despues la condiciones con la que se va a ejecutar las instrucciones
- Usa un  `case Else` cuando no se cumpla ninguna de las condiciones de los antiguos case.
- Al acabar todos los `case` no se te olvide poner al final para acabar la palabra `End Select`
````vb
Dim num_selec As Byte
    Dim num_text As String
        Dim num_1 As Integer
        Dim num_2 As Integer
        Console.WriteLine("Programa de Operaciones Basicas")
        Console.WriteLine("")
            Console.WriteLine("1. Suma")
                Console.WriteLine("2. Resta")
                    Console.WriteLine("3. Multiplicacion")
                        Console.WriteLine("4. Division")
                            num_text= Console.ReadLine()
                           num_select= CByte(num_text)

'Estructura del Select Case'
Select num_select
Case 1:
    Console.WriteLine("Ingresa el Primer Valor")
    num_1= Console.ReadLine()
    Console.WriteLine("Ingresa el Segundo Valor")
      num_2= Console.ReadLine()
    Console.WriteLine("El Resultado de tu Suma es de" & num_1+num_2)
    Console.ReadLine()
Case 2:
    Console.WriteLine("Ingresa el Primer Valor")
      num_1= Console.ReadLine()
    Console.WriteLine("Ingresa el Segundo Valor")
    num_2= Console.ReadLine()
    Console.WriteLine("El Resultado de tu Resta es de" & num_1-num_2)
    Console.ReadLine()
Case 3:
    Console.WriteLine("Ingresa el Primer Valor")
      num_1= Console.ReadLine()
    Console.WriteLine("Ingresa el Segundo Valor")
    num_2= Console.ReadLine()
    Console.WriteLine("El Resultado de tu Multiplicacion es de" & num_1*num_2)
    Console.ReadLine()
Case 4:
    Console.WriteLine("Ingresa el Primer Valor")
      num_1= Console.ReadLine()
    Console.WriteLine("Ingresa el Segundo Valor")
    num_2= Console.ReadLine()
    Console.WriteLine("El Resultado de tu Divicion es de" & num_1/num_2)
    Console.ReadLine()
Case Else:

    Console.WriteLine("No escojiste ninguna Opcion")
    Console.ReadLine()
End Select
````