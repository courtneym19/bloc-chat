(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
             });
         $stateProvider
             .state('main', {
                 url: '/',
                 controller: 'MainCtrl as main',
                 templateUrl: '/templates/main.html'
             })
         
            /* .state('modal', {
                url: '/modal',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
            })
            */
     }
        
     angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
         .config(config);
 })();