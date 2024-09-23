# api_grupo10
 Api Node Laboratorio de Computacion IV


---------- Daniel D'Onofrio ----------

Endpoint popular series (GET)

    Descripcion:
    Este endpoint devuelve una lista de todas las series registradas en orden segun su popularidad. La lista de peliculas proviene de una consulta a la API externa de peliculas: 'https://api.themoviedb.org/3'

    URL:
    api/v1/series/popular

    Query Params: 
    -page: Con este parametro se puede elegir que pagina de la lista desea obtener. Por defecto el valor es 1.
        ejemplos:
        -api/v1/series/popular?page=2
        -api/v1/series/popular?page=200
    -language: Este parametro permite elegir en que idioma se va a mostar la informacion de las peliculas de la lista. por defecto el valor es en-US.
        ejemplos:
        -api/v1/series/popular?language=en
        -api/v1/series/popular?language=es
        -api/v1/series/popular?language=fr

    Posibles Status Code:
    -200: OK (Cuando la lista es obtenida correctamente)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -404: Not Found (Cuando no se encuentra la pagina recibida por el usuario)

    Estructura de datos de cada serie:
    -id: Int
    -adult: Boolean
    -backdrop_path: String
    -genre_ids: Array
    -origin_country: Array
    -original_language: String
    -original_name: String
    -overview: String
    -popularity: Float
    -poster_path: String
    -first_air_date: String
    -name: String
    -vote_average: Float
    -vote_count: Int

Endpoint series details (GET)

    Descripcion:
    Este endpoint devuelve los detalles de una serie en especifico la cual se busca por ID. Los detalles de la pelicula provienen de una consulta a la API externa de peliculas: 'https://api.themoviedb.org/3'

    URL:
    api/v1/series/:idSerie

    Posibles Status Code:
    -200: OK (Cuando la lista es obtenida correctamente)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -404: Not Found (Cuando no se encuentra la pagina recibida por el usuario)

    Estructura de datos de cada serie:
    -id: Int
    -adult: Boolean
    -backdrop_path: String
    -genre_ids: Array
    -origin_country: Array
    -original_language: String
    -original_name: String
    -overview: String
    -popularity: Float
    -poster_path: String
    -first_air_date: String
    -name: String
    -vote_average: Float
    -vote_count: Int

---------- Gabriel Ponce ----------

**Endpoints personas populares (GET)**

Descripcion: 
Este endpoint devuelve una lista de todas las personas ordenadas por popularidad.
Pagina de consulta externa: 'https://api.themoviedb.org/3'

URL: /api/v1/person/popular

Querys Params:
page: Numero de pagina, aqui se puede especificar la pagina que se desea consultar
  Ejemplo:  api/v1/person/popular?page=4
language: Idioma, aqui se puede especificar el idioma que se desea consultar
  Ejemplo:  api/v1/person/popular?language=es
            api/v1/person/popular?language=en-US


Status Code de respuesta:
200: 'OK', el endpoint devuelve una peticion exitosa
400: 'Bad Request', hay un error con la peticion
404: 'Not Found', no se encuentra la pagina

Estructura de datos de personas:

-adult : boolean
-gender : integer
-id : integer
-known_for : array of objects
-known_for_department : string
-name : string
-popularity : number 
-profile_path :string


**Endpoints People Details (GET)**

Este endpoint devuelve los detalles de una persona especifica, aqui se busca por id
Pagina de consulta externa: 'https://api.themoviedb.org/3'

URL: /api/v1/person/{person_id}

Status Code de respuesta:
200: 'OK', el endpoint devuelve una peticion exitosa
400: 'Bad Request', hay un error con la peticion
404: 'Not Found', no se encuentra la persona con el id especificado


Estructura de datos detalles de personas:

-id: integer
-adult : boolean
-also_known_as : array of strings
-biography: string
-birthday: string
-deathday: string
-gender: integer
-homepage: string
-imdb_id: string
-known_for_department: string
-name: string
-place_of_birth: string
-popularity: number
-profile_path: string


---------- Galo Santopietro ----------

Endpoint popular movies (GET)

    Descripcion:
    Este endpoint devuelve una lista de todas las peliculas registradas en orden segun su popularidad. La lista de peliculas proviene de una consulta a la API externa de peliculas: 'https://api.themoviedb.org/3'

    URL:
    api/v1/movie/popular

    Query Params: 
    -page: Con este parametro se puede elegir que pagina de la lista desea obtener. Por defecto el valor es 1.
        ejemplos:
        -api/v1/movie/popular?page=2
        -api/v1/movie/popular?page=200
    -language: Este parametro permite elegir en que idioma se va a mostar la informacion de las peliculas de la lista. por defecto el valor es en-US.
        ejemplos:
        -api/v1/movie/popular?language=ja
        -api/v1/movie/popular?language=es
        -api/v1/movie/popular?language=es-ES

    Posibles Status Code:
    -200: OK (Cuando la lista es obtenida correctamente)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -404: Not Found (Cuando no se encuentra la pagina recibida por el usuario)

    Estructura de datos de cada pelicula:
    -id: Int
    -adult: Boolean
    -backdrop_path: String
    -genre_ids: Array
    -original_language: String
    -original_title: String
    -overview: String
    -popularity: Float
    -poster_path: String
    -release_date: String
    -title: String
    -video: Boolean
    -vote_average: Float
    -vote_count: Int

Endpoint movie details (GET)

    Descripcion:
    Este endpoint devuelve los detalles de una pelicula en especifico la cual se busca por ID. Los detalles de la pelicula provienen de una consulta a la API externa de peliculas: 'https://api.themoviedb.org/3'

    URL:
    api/v1/movie/details/:idMovie

    Posibles Status Code:
    -200: OK (Cuando la lista es obtenida correctamente)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -404: Not Found (Cuando no se encuentra la pagina recibida por el usuario)

    Estructura de datos de cada pelicula:
    -id: Int
    -adult: Boolean
    -backdrop_path: String
    -genre_ids: Array
    -original_language: String
    -original_title: String
    -overview: String
    -popularity: Float
    -poster_path: String
    -release_date: String
    -title: String
    -video: Boolean
    -vote_average: Float
    -vote_count: Int

---------- Pedro Weyland ----------

EndPoint upcoming (GET)

    Descripcion:
    - Este EndPoint devuelve un listado de todas las peliculas que saldran proximamente,
    esta lista es obtenida apartir de una consulta de una API externa que en este caso es:
    'https://api.themoviedb.org/3'
    
    URL:
    - /api/v1/movie/upcoming

    Query Params:
    - page: Se puede pasar por parametro a que pagina queres acceder de toda la lista
        ej: /api/v1/movie/upcoming?page=3
        (Si pone una pagina inexistente lanzara excepcion)
    - language: Se puede pasar por parametro el idioma que se quiere que se muestre la informacion 
        ej: /api/v1/movie/upcoming?language=es
        ej: /api/v1/movie/upcoming?language=en-US
        ej: /api/v1/movie/upcoming?language=fr

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
    - /api/v1/movie/credits/{id_pelicula}:

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
