(function(){
    function ModalCtrl(Room, $uibModalInstance){
    
        
        this.submit = function(newRoomName){
            Room.addNewRoom(newRoomName);
            $uibModalInstance.close();
        }

        
        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();