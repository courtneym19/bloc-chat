 (function() {
     function MainCtrl(Room, $uibModal) {
         this.rooms = Room.all;
         
         this.open = function(){
            var newModal = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: "small",
            });
             
             newModal.result.then(function(newRoomName){
                 Room.addNewRoom(newRoomName);
             })

         }
         

     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
 })();