# api_grupo10
 Api Node Laboratorio de Computacion IV


---------- Daniel D'Onofrio ----------

---------- Gabriel Ponce ----------

---------- Galo Santopietro ----------

---------- Pedro Weyland ----------

EndPoint upcoming (GET)

    Descripcion:
    - Este EndPoint devuelve un listado de todas las peliculas que saldran proximamente,
    esta lista es obtenida apartir de una consulta de una API externa que en este caso es:
    'https://api.themoviedb.org/3'
    
    URL:
    - /api/v1/movies/upcoming

    Query Params:
    - page: Se puede pasar por parametro a que pagina queres acceder de toda la lista
        ej: /api/v1/movies/upcoming?page=3
        (Si pone una pagina inexistente lanzara excepcion)
    - language: Se puede pasar por parametro el idioma que se quiere que se muestre la informacion
        ej: /api/v1/movies/upcoming?language=es

    Posibles Status Code:
    - 200: OK (Cuando la lista es obtenida correctamente)
    - 400: Bad Request (Cuando un error inesperado ocurre)
    - 404: Not Found (Cuando no se encuentra la pagina recibida por el usuario)

    Cada pelicula tiene la siguiente estuctura
    - id                -> Int
    - adult             -> Boolean
    - backdrop_path     -> String
    - genre_ids         -> Array
    - original_language -> String
    - original_title    -> String
    - overview          -> String
    - popularity        -> Float
    - poster_path       -> String
    - release_date      -> String
    - title             -> String
    - video             -> Boolean
    - vote_average      -> Float
    - vote_count        -> Int

EndPoint Creditos (GET)

    Descripcion:
    - Este EndPoint devuelve una lista de los creditos que tiene una pelicula en especifico,
    a la hora de consultar este EndPoint le tendremos que mandar como path variable el id de la pelicula.
    esta lista es obtenida apartir de una consulta de una API externa que en este caso es:
    'https://api.themoviedb.org/3'

    URL:
    - /api/v1/movies/credits/{id_pelicula}:

    Posibles Status Code:
    - 200: OK (Cuando la lista es obtenida correctamente)
    - 400: Bad Request (Cuando un error inesperado ocurre)
    - 404: Not Found (Cuando no se encuentra la pelicula)

    Cada elementos de los creditos tiene la siguiente estuctura
    - id                    -> Int
    - cast_id               -> Int
    - credit_id             -> String
    - adult                 -> Boolean
    - gender                -> Int
    - known_for_department  -> String
    - name                  -> String
    - original_name         -> String
    - popularity            -> Float
    - profile_path          -> String
    - character             -> String
    - order                 -> Int
