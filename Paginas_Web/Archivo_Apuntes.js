let miFamilia= ["Mama","Papa","Hermano"];
let tuFamilia= ["Abuelo","Abuela",miFamilia];
forFamilia:
for(miembros in tuFamilia)
{
    if(miembros > 1)
    {
        for(nombres of miFamilia )
        {
            document.write("El es mi: " + nombres + "<br>")
            break forFamilia;
        }
    
    }

    else
    {
        document.write( "El es mi:" + tuFamilia[miembros] + "<br>")

    }

}