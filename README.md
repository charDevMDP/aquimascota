# APP AQUIMASCOTAS :dog: :cat:

## Participando de la Hackaton de ElRinconDelDev :computer:

[Link Hackaton](https://www.lahackathondeldev.com/)

[Link Oficial de ElRinconDelDev](https://www.elrincondel.dev/)

### En una semana trate de desarrollar un aplicacion de mascotas perdidas y encontradas, esta muy verde todavia pero voy a ir mejorandola de a poco. 


#### RESULTADO HASTA EL MOMENTO DESPLEGADO EN VERCEL:




[AQUI MASCOTAS - WEB :earth_americas:  ](https://aquimascota.vercel.app/)

* Credenciales para probar 


| USUARIO | CONTRASEÑA |
   |---|---|
   | test@test.com | 123456 |

-----

**SI QUERES PROBAR EL CODIGO LOCALMENTE EN TU COMPUTADORA:**

__CHECKEA ESTO__ :white_check_mark:


> Para poder visualizar el projecto hay de clonarse el repo, configurar los variables de ambientes necesarias en un archivo .env 

```
archivo .env

// autenticacion
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
AUTH_SECRET=

// base de datos 
DATABASE_URL= postgress

// cloudinary para las imagenes
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

```

> Luego deberia instalar las dependencias necesiarias 

```
  pnpm install
```

> Y finalmente levantar el proyecto en desarrollo

```
pnpm run dev
```