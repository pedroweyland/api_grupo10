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
        -api/v1/movie/popular?language=ja
        -api/v1/movie/popular?language=es
        -api/v1/movie/popular?language=es-ES

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

---------- Galo Santopietro ----------

---------- Pedro Weyland ----------

