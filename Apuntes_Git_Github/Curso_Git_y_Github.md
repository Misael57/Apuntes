# Curso de Git y Github
## ¿Que es Github?
Es una plataforma en donde los usuarios de un proyecto pueden trabajar de forma individual y combinar el codigo en uno. Al igual que tambien a la hora de hacer cambios en el programa original. **Git** va a ser el software grafico que nos van a ayudar a interactuar con github.
### Comandos Basicos de Git Configuracion Inicial

**Mostrar Version**
Sirve para que la Consola muestre la version de nuestro programa git
```
// Este es el Comando a usar
$ git --version
// Esto es lo que nos va a devolver
git version 2.39.1.windows.1
```
**Configuracion de Cuenta**

Usa este comando para configurar tu correo electronico desde gif
```
// Este es un ejemplo con mi cuenta
 git config --global user.email alejandromisael48@gmail.com
```

Usa este comando para configurar tu Nombre de Usuario desde gif
```git
// Este es un ejemplo con mi Nombre
git config --global user.name "Misael Hernandez"
```
Usa este comando si quieres modificar algo de la informacion global y local de git desde visual studio code
```
git config --global core.editor "code --wait"
```

Usa este comando para abrir visual studio para la configuracion para modificarla pero no te dejara avanzar hasta que lo cierres.
```
git config --global -e
```

**Comando para usuarios de Linux y Mac**

Este sirve para estandarizar los saltos de linea de los archivos:
```
// Se deben de usar estos comandos para los usuarios de Linux y Mac
git config --global core.autocrif input
```
Para los de Windows 
```

git config --global core.autocrif true
```

**Comandos de Ayuda**

Este sirve para que tu puedas ver la documentacion en consola de git
```
git config -h
```
Este sirve para que te mande a la Pagina web de Ayuda de git
```
git help config
```
**Comandos de Directorio Local**
Sirve para Acceder a las carpetas por medio de Consola
```
// Sirve para acceder en las Carpetas,Discos y Directorios

cd "Nombre de Carpeta"
```
Sirve para Crear Carpetas desde Consola
```
// Se creo una Carpeta llamada Apuntes

mkdir Apuntes
```
