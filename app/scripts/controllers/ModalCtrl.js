(function(){
    function ModalCtrl(Room, $uibModalInstance){

        this.name = '';
        
        this.submit = function(newRoomName){
            $uibModalInstance.close(this.name);
            Room.addNewRoom(newRoomName);
        }

        
        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();