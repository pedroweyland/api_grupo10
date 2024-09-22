# api_grupo10
 Api Node Laboratorio de Computacion IV

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

