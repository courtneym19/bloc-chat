 (function() {
     function MainCtrl(Room, Message, $uibModal, $cookies) {
         this.rooms = Room.all;
         
         this.activeRoom = null;
         this.activeRoomName = null;
         
         this.open = function(){
            var newModal = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: "small"
            });
         }
         
         
         this.setActiveRoom = function(room){
             this.activeRoom = room;
             this.activeRoomName = room.name;
             this.messages = Message.getByRoomId(room.$id);
         } 
         
         this.sendMessage = function(newMessage){
             Message.send({
                 username: $cookies.get('blocChatCurrentUser'),
                 roomId: this.activeRoom.$id,
                 content: newMessage,
                 timestamp: Date.now()
             })
         }
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', MainCtrl]);
 })();