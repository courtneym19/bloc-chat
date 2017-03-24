 (function() {
     function MainCtrl(Room) {
         var $scope = Room.rooms;
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl', MainCtrl);
 })();