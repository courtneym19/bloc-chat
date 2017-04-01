(function(){
    function ModalCtrl(Room, $uibModalInstance){
        
        
        this.createNewRoom = function(){
        }
        
        this.cancel = function(){
            $uibModalInstance.dismiss();
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
    
})();