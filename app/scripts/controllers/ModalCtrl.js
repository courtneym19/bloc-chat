(function(){
    function ModalCtrl(Room, $uibModalInstance){
        
        this.submit = function(newRoomName){
            Room.addNewRoom(newRoomName);
            $uibModalInstance.close();
            throw Error('error!');
  
        }

        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();