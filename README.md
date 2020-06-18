# AppCityBike

Ejemplo de SPA realizada en Angular consumiento la API Restful de "http://api.citybik.es".

## Instalar Dependencias
- Ejecutar `npm install`

## Iniciar proyecto
Ejecutar en terminal el comando `ng serve` e introducir en el navegador `http://localhost:4200/` o ejecutar `ng serve -o` y se abrira automaticamente en el navegador.

## Generar proyecto - Produccion
Ejecutar en terminal el comando `ng build` y comprobar que se ha generado el directorio `/dist`. 

## Pruebas unitarias
Ejecutar en terminal el comando `ng test` via [Karma](https://karma-runner.github.io).

## Genera reporte de cobertura de codigo

Ejecutar en terminal el comando `ng test --code-coverage` y nos generare un directorio `coverage` con informes de cobertura de código en archivos `.html`.
Si conseguimos mantener la cobertura de nuestro codigo entre un 60%-80%, segun la norma, esta realmente bien.

## Pruebas end-to-end
Ejecutar en terminal el comando `ng e2e` via [Protractor](http://www.protractortest.org/).

## Ayuda
Para mas informacion, ejecutar el comando `ng help` en el terminal o ir a [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Este proyecto se ha generado con [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7
