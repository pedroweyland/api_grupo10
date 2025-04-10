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

Endpoint watchlist (GET):

    Descripcion:
    Este endpoint devuelve la lista de peliculas que estan en la watchlist del usuario.
    
    URL:
    api/v1/lists/watchlist/:userId
    
    Posibles Status Code:
    -200: OK (Cuando la lista es obtenida correctamente)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -404: Not Found (Cuando no se encuentra la pagina recibida por el usuario)

Endpoint add to watchlist (POST):
    Descripcion:
    Este endpoint agrega una pelicula a la watchlist del usuario.
    
    URL:
    api/v1/lists/watchlist
    
    Posibles Status Code:
    -200: OK (Cuando la pelicula es agregada correctamente)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -404: Not Found (Cuando no se encuentra la pagina recibida por el usuario)
    
Endpoint remove from watchlist (DELETE):
    
    Descripcion:
    Este endpoint elimina una pelicula de la watchlist del usuario.
    
    URL:
    api/v1/lists/watchlist

    Posibles Status Code:
    -200: OK (Cuando la pelicula es eliminada correctamente)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -404: Not Found (Cuando no se encuentra la pagina recibida por el usuario)


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

Endpoint favorite list (POST)

    Descripcion:
    Este endpoint agrega a la lista de favoritos del usuario una pelicula o serie. Si la pelicula o serie no esta en la base de datos local, la agrega.

    URL:
    api/v1/lists/favorite/

    Posibles Status Code:
    -201: Created (Cuando se agrega la serie o pelicula a la lista de favoritos del usuario)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -500: Internal Server Error (Cuando hay un fallo del servidor)

    Datos a ingresar:
    -id_user: int
    -id_media_api: int
    -media_type: string

    Estructura de datos de salida:
    -id: int
    -id_user: int
    -id_media: int
    -type: string

Endpoint favorite list (GET)

    Descripcion:
    Este endpoint obtiene una lista con todas las peliculas y series que hayan sido marcadas como favoritos por el usuario.

    URL:
    api/v1/lists/favorite/<id_user>

    Posibles Status Code:
    -200: OK (Cuando la consulta es exitosa)
    -500: Internal Server Error (Cuando hay un fallo del servidor)

    Estructura de datos de cada serie o pelicula:
    -id: int
    -id_user: int
    -id_media: int
    -type: string
    -media details
        id: int
        id_media_api: int
        type: string
        title: string
        original_title: string
        release_date: string
        overview: string
        poster_path: string
        vote_average: double
    
Endpoint favorite list (DELETE)

    Descripcion:
    Este endpoint elimina de la lista de favoritos del usuario una pelicula o serie.

    URL:
    api/v1/lists/favorite/

    Posibles Status Code:
    -200: OK (Cuando la consulta es exitosa)
    -400: Bad Request (Cuando un error inesperado ocurre)
    -500: Internal Server Error (Cuando hay un fallo del servidor)

    Datos a ingresar:
    -id_user: int
    -id_media_api: int
    -media_type: string

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

EndPoint Register usuario (POST)

    Descripcion:
    - Este EndPoint sirve para crear usuarios en nuestra base de datos propia, a la hora de consultar este EndPoint vamos a tener que mandar un JSON que contenga los datos necesarios para poder registrar dicho usuario, este JSON tiene que contener los siguientes datos: 'username', 'email' y 'password' (La contraseña se guardara encriptada en la base de datos)

    URL:
    - /api/v1/auth/register

    Posibles Status Code:
    - 200: Ok (Se creo correctamente el usuario y nos retorna dicho usuario creado)  
    - 400: Bad Request (Posibles errores: Email existente, Username existente, contraseña con longitud menor a 8 caracteres)

    Cada elementos de los usuarios tiene la siguiente estuctura

    - id                                  -> Int
    - username                            -> String
    - email                               -> String
    - password (Se encuentra encriptada)  -> String
    - firstName                           -> String
    - lastName                            -> String
    - phone                               -> String
    - address                             -> String

EndPoint Update usuario (PUT)

    Descripcion:
    - Este EndPoint sirve para actualizar el usuario deseado, a la hora de consultar este EndPoint vamos a tener que mandar un JSON que contenga los datos necesarios para poder actualizar dicho usuario, este JSON tiene que contener si o si el 'id' al usuario que se va a modificar, luego se puede decidir que dato se puede modificar 'username', 'firstName', 'lastName', 'phone' y 'address'

    URL:
    - /api/v1/auth/update

    Posible Status Code:
    - 200: Ok (Se modifico correctamente el usuario y nos retorna dicho usuario)
    - 400: Bad Request (Nombre de usuario existente)
    - 404: Not Found (No se encontro el usuario a modificar)