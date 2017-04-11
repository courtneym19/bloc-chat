(function(){
    function ModalCtrl(Room, $uibModalInstance){

        this.submit = function(newRoomName){
            Room.addNewRoom(newRoomName);
            $uibModalInstance.close();
            document.querySelector("btn-submit").addEventListener("click", function(){
                document.querySelector("new-room").blur();
            })
        }

        
        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();