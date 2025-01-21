# Para trabajar con repositorios
- Posicionate desde la terminal en el lugar en el que quieras ubicar el proyecto. Por ejemplo:
        cd miCarpeta

- Clona el proyecto del repositorio a tu local. Ejemplo:
        git clone https://github.com/M-Rossado/Logistica_Almacen_Upgraders.git

- En él enocntrarás una carpeta de BACK y FRONT (a modificar)

- Para trabajar sobre el proyecto, crea siempre una rama nueva (asegúrate primero de estar posicionado en develop, y realiza un git pull para tener las últimas actualizaciones). 
Para una mejor coordinación podemos utilizar la siguiente nomenclatura:
        feature/DS-20012025MR
    (explicación: feature/DS-fecha en la que creas la rama, seguido de tus iniciales en mayúsculas, en mi caso MR)

- Al finalizar cada bloque importante (o cuando consideres), realiza: 
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

    


