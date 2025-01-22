# Para traerte el proyecto a local
- Posicionate desde la terminal en el lugar en el que quieras ubicar el proyecto. Por ejemplo:
        cd miCarpeta

- Clona el proyecto del repositorio a tu local. Ejemplo:
        git clone https://github.com/M-Rossado/Logistica_Almacen_Upgraders.git

- En él enocntrarás una carpeta de BACK y FRONT (a modificar)

# Para trabajar con repositorios y ramas
- Para trabajar sobre el proyecto, CREA SIEMPRE UNA NUEVA RAMA: 
        - Primero asegúrate de estar posicionado en main y actualizala, desde la interfaz de visual, o desde la consola con
                git checkout main
                git pull
        - luego crea tu nueva rama, desde visual o con el comando
                git branch feature/nombre-rama

                Para una mejor coordinación podemos utilizar la siguiente nomenclatura para nombrar las ramas:
                feature/user_form_v1
                (explicación: se pone feature/ porque crea una carpeta invisible que organizará todas las ramas que partan de main,
                seguido nombramos nuestra rama con algo corto que haga referencia al componente que estamos haciendo y su versión)
        - publica la rama con un git push

- Al finalizar cada bloque importante (o cuando consideres), realiza: 
        git add . 
        git commit -m "descripción de la tarea realizada"
        git push
  con la finalidad de asegurar tu trabajo.

- Una vez has concluido tu labor en esa rama debes subirla al repositorio y mergearla con main de la siguiente forma:
        git add . 
        git commit -m "descripción de la tarea realizada"
        git push
        git checkout main
        git pull
        git checkout user_form_v1 (el nombre de tu rama)
        git merge main
                    En caso de que se generen conflictos:
                    Resolverlos, guardar cada modificación y continuar con:
                    git add .
                    git commit      (esta vez sin mensaje)
        git push

- POR ÚLTIMO, ve a github, crear una pull request. Puedes temrinar de confirmarla tu o poner a un compañero de revisor para que termine el proceso.

        *He securizado la rama main para que no podamos cagarla y subir cambios directamente en ella sin mergear con otra rama hija, así no podemos 
        pisar el trabajo de los demás.xxxx

    


