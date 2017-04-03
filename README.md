# TDD en Javascript

### Introducción

Tanto el PDF como la charla se centran en aprender a realizar TDD en Javascript utilizando los frameworks y liberías más comunes de testing:

* **Frameworks de testing**: [JasmineJS](https://jasmine.github.io/2.3/introduction.html), [MochaJS](https://mochajs.org/)
* **Librería de stubs y aserciones**: [SinonJS](http://sinonjs.org/) y [ChaiJS](http://chaijs.com/)
* **Herramientas de ejecución de tests**: [Karma-runner](https://karma-runner.github.io/0.13/index.html).
* **Navegadores headless**: [PhantomJS](http://phantomjs.org/)

### Arquitectura

La arquitectura consiste en generadores para aplicaciones utilizando **yeoman**. Los pasos seguidos hasta montar la arquitectura varían en función de los objetivos en mente de cada uno de ellos. Se utiliza  [AngularJS](https://angularjs.org/) para el primer ejercicio y JS para el segundo.

### Ejercicios de testing

#### 1. Calculadora y Calculadora2

Se trata de implementar 2 módulos, **area.js y volumen.js**, **dependientes entre ellos**. ¿Por qué?, para introducir el concepto de **stubs, spies y mocks**, necesarios en la realización de tests unitarios.

Existen 2 ejercicios: **calculadora** y **calculadora2**

##### Calculadora

* **Generador**: [```$ yo cg-gas```](https://github.com/Lunatic83/generator-cg-gas)

Este ejercicio pretende introducir la implementación básica de tests unitarios utlizando **Jasmine y Karma-runner**. Los tests unitarios se encuentran bajo la carpeta **app/test/\*_spec**. Este primer ejemplo **no incluye la cobertura de código**.

###### Comandos

1. Instalación de dependencias: ```$ bower install && npm install```
2. Mostrar la aplicación en el navegador: ```$ gulp serve```
3. Ejecutar los tests unitarios: ```$ gulp test:unit```

##### Calculadora2

* **Generador**: [```$ yo nody```](https://github.com/qiu8310/generator-nody)

Este ejercicio pretende introducir la implementación básica de tests unitarios utilizando **Mocha y Sinon**. Los tests unitarios se encuentran bajo la carpeta **test/test\*.js**. Este segundo ejemplo incluye la cobertura de código con **Istanbul**.

###### Comandos

1. Instalación de dependencias: ```$ bower install && npm install```
2. Ejecutar los tests unitarios: ```$ gulp test```
3. Mostrar la aplicación en el navegador: acceso al fichero ```index.html``` bajo el directorio ```src```
