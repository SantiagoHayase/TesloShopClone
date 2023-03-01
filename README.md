# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

MongoDB URL Local:

```
mongodb://localhost:27017/entriesdb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llenar la base de datos con información de pruebas

Llamar a:

```
https://localhost:3000/api/seed
```

// import { NextFetchEvent, NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// // import { jwt } from "../../utils";

// export async function middleware(req: NextRequest, ev: NextFetchEvent) {
// // const { token = "" } = req.cookies;
// // try {
// // await jwt.isValidToken(token);
// // return NextResponse.next();
// // } catch (error) {
// // const requestedPage = req.page.name;
// // return NextResponse.rewrite(`/auth/login?p=${requestedPage}`);
// // const url = `/auth/login?p=${requestedPage}`;
// // return NextResponse.rewrite(url);
// // return NextResponse.redirect("/auth/login?p=???")
// //}
// // return new Response("No autorizado", {
// // status: 401,
// // });

// const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
// if (!session) {
// const requestedPage = req.nextUrl;
// return NextResponse.redirect(`/auth/login?p=${requestedPage}`);
// }
// return NextResponse.next();
// }
