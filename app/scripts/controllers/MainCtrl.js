 (function() {
     function MainCtrl(Room, Message, $uibModal) {
         this.rooms = Room.all;
         
         this.activeRoom = null;
         this.activeRoomName = null;
         
         this.open = function(){
            var newModal = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: "small",
            });
         }

         
         this.setActiveRoom = function(room){
             this.activeRoom = room;
             this.activeRoomName = room.name;
             this.messages = Message.getByRoomId(room.$id);
         } 
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
 })();