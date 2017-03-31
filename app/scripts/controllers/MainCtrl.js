 (function() {
     function MainCtrl(Room) {
         this.rooms = Room.all;
         console.log(this.rooms);
         console.log("inside controller");
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl', ['Room', MainCtrl]);
 })();