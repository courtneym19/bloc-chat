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
            
             newModal.result.then(function(newRoomName){
                 Room.addNewRoom(newRoomName);
             })

         }
         
         this.setActiveRoom = function(room){
             this.activeRoom = room;
             this.activeRoomName = room.$value;
             //this.messages = Message.getMessagesById(room.$id);
         }
         
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
 })();