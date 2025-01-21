# Para trabajar con repositorios
- Posicionate desde la terminal en el lugar en el que quieras ubicar el proyecto. Por ejemplo:
        cd miCarpeta

- Clona el proyecto del repositorio a tu local. Ejemplo:
        git clone https://github.com/M-Rossado/Logistica_Almacen_Upgraders.git

- En él encontrarás una carpeta de BACK y FRONT (a modificar)

- Para trabajar sobre el proyecto, crea siempre una rama nueva (asegúrate primero de estar posicionado en develop, y realiza un git pull para tener las últimas actualizaciones). 
Para una mejor coordinación podemos utilizar la siguiente nomenclatura:
        feature/user-form_v1
    (explicación: feature/nombre corto del componente o sección que estas realizando seguido de la versión, por si a futuro necesitas abrir más ramas del componente con v2, v3, v4, etc)
- Al finalizar cada bloque importante (o cuando consideres), realiza: 
        add . 
        commit -m "descripción de la tarea realizada"
        push
  con la finalidad de asegurar tu trabajo.

- Una vez has concuido tu labor en esa rama deber subirla al repositorio y mergearla con develop de la siguiente forma:
        add . 
        commit -m "descripción de la tarea realizada"
        push
        git fetch --all
        git merge develop
                    En caso de que se generen conflictos:s
                    Resolverlos, guardar cada modificación y continuar con:
                    git add .
                    git merge --continue
        git push 

       Ir al repositorio de GitHub y crear una pull request asignando a un compañero como revisor,
       él será el encargado de dar el ok y confimar el merge

    


