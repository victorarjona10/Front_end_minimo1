# AngularProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Additional things

ng serve to start


--------------------------------------------------------------------------------------------------------------------------------
De la parte del backend y mongoDB esta

- neuva coleccion
- la relacion con userID que se refiere a USER
- 3 tipos de datos diferentes (objectId DEL USERID, NUMBER Y STRING)
- NUEVO ENDPOINT, NUEVO MODELO, LAS OPERACIONES CRUD

DE ANGULAR ESTA

- NUEVO COMPONENTE
- NUEVO SERVICIO
- USO DE LAS LLAMDAS AL NUEVO ENDPOINT

PROBLEMAS Y COSAS QUE NO ESTAN

nose porque, al hacer un post de confianza en el nuevo endpoint desde angular no funciona pero desde postman si que funciona. Osea que las interacciones a la BBDD funcionan solo que la post desde angular no. 

Listado de paginas y buscador no he hecho nada

y lo del nuevo modelo, al final confianza es algo nuevo pero no hemos usado modelos en nuestro proyecto

npm install after git clone

API: https://github.com/victorarjona10/EA_PROYECTO_QUICKFIND npm install to install dependencies & npx ts-node src/app.ts to run the API

