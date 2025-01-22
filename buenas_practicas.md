# Para trabajar con repositorios
- Posicionate desde la terminal en el lugar en el que quieras ubicar el proyecto. Por ejemplo:
        cd miCarpeta

- Clona el proyecto del repositorio a tu local. Ejemplo:
        git clone https://github.com/M-Rossado/Logistica_Almacen_Upgraders.git

- En él encontrarás una carpeta de BACK y FRONT (a modificar)

# Para comenzar a trabajar con ramas

- Para trabajar sobre el proyecto, crea siempre una rama nueva (asegúrate primero de estar posicionado en main, y realiza un git pull para tener las últimas actualizaciones). 
Para una mejor coordinación podemos utilizar la siguiente nomenclatura para nombrar las ramas:
        feature/user-form_v1
    (explicación: 
    feature/nombre corto del componente o sección que estas realizando seguido de la versión, por si a futuro necesitas abrir más ramas del componente con v2, v3, v4, etc)

- Al finalizar cada bloque importante (o cuando consideres), realiza: 
        git add . 
        git commit -m "descripción de la tarea realizada"
        git push
  con la finalidad de asegurar tu trabajo.

- Una vez has concuido tu labor en esa rama debes subirla al repositorio y mergearla con develop de la siguiente forma:
        git add . 
        git commit -m "descripción de la tarea realizada"
        git push
        git fetch --all
        git merge main
                    En caso de que se generen conflictos
                    Resolverlos, guardar cada modificación y continuar con:
                    git add .
                    git merge --continue
        git push

       Ir al repositorio de GitHub y crear una pull request, puedes confirmar tu mismo el mergeo, o puedes asignar un compañero revisor para que eche un vistazo a tu código y de él la confirmación.

       Cuando finalices, borra tu rrama desde el repositorio (en tu local la seguirás teniendo, eso no importa)

       *Las rama main está securizada para que no podamos cagarla y realizar un push directamente sobre ellas

    


