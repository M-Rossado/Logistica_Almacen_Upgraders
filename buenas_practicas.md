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
        add . 
        commit -m "descripción de la tarea realizada"
        push
  con la finalidad de asegurar tu trabajo.

- Una vez has concluido tu labor en esa rama debes subirla al repositorio y mergearla con develop de la siguiente forma:
        add . 
        commit -m "descripción de la tarea realizada"
        push
        git fetch --all
        git merge develop
                    En caso de que se generen conflictos:
                    Resolverlos, guardar cada modificación y continuar con:
                    git add .
                    git merge --continue
        git push

        En github crear una pull request y poner a un compañero como revisor, él será el ecargado de dar el ok y finalizar el merge de la rama con develop



        *Tengo que hacer un par de pruebas antes de confirmar 100% estos pasos 
        *He securizado las ramas main y develop para que no podamos cagarla y subir cambios directamente en ellas sin mergear con otra rama hija

    


