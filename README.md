# CustomTableFilter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Extra Dependency 
Bootstrap has been used for styling out certain components, Have just used the css and not js dependencies of bootstrap.

## Project Details
1. Since there are no routes, lazy loading has not been implemented.
2. App component is the bootstrap component which is further hosting Dashboard Component.
3. Dashboard component is further having the Side Bar Component & Table View Component.
4. All filter processing is being done as part of Side Bar component, whereas Table View Component is a dumb component which relies on data input from Dashboard component.
5. Table View is utilizing an pure pipe for pagination implementation, it further has integration of Pagination component which has the Products per page count and navigation to next or previous pages.
7. Test Cases for all Components, Pipes with 100% coverage is completed.
8. Side Bar component is using Reactive Forms for multiple filter setup with help of Form Array in order to integrate validations.
9. Entire project is responsive to different screen sizes.
10. Data has been trimmed to be shown in table cell using CSS classes and same can be viewed as part of bootstrap-tooltip on hover.
11. trackBy used for *ngFor directives.
12. Project is architected in a way where multiple components are used to break down different tasks and all components are reusable and loosely coupled. 

## Scope of Improvement
(features missed to be implemented due to lack of time)
1. e2e test cases can be further added.
2. JEST framework integration for snapshot testing.
3. Containerization of project can be done to have better deployment strategies.
4. Better styling can be done for the project where user can select the theme of application.
5. Use of RxJS library for projecting content on template along with async pipe.
6. Bundle size of application is too large currently as data mocking is present is existing project, we can have a seperate API to fetch content and have RxJS integrations.
7. Use external library to provide entire datagrid integration along with pagination. (Did not do this to showcase UI skills).

## Hosting
Currently this project is hosted on https://agoyal13.github.io/productsUp-customDataGrid/ with 300 records of data.
   
    
