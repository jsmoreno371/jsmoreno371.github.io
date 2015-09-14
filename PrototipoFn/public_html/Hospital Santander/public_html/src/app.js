(function (ng) {

    var mainApp = ng.module('mainApp', [
        'bookModule',
        'ngRoute'
    ]);
    
    var espApp =  ng.module('espApp', [
        'especialidadModule',
        'ngRoute'
    ]);

    mainApp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/book', {
                    templateUrl: 'src/modules/book/book.tpl.html',
                    controller: 'bookCtrl',
                    controllerAs: 'ctrl'
                })
                .otherwise('/book');
        }]);
    
    espApp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/especialidad', {
                    templateUrl: 'src/modules/especialidad/especialidad.tpl.html',
                    controller: 'especialidadCtrl',
                    controllerAs: 'ctrl'
                })
                .otherwise('/especialidad');
        }]);
    
    
})(window.angular);
