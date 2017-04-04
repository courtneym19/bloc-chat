(function(){
    function ModalCtrl(Room, $uibModalInstance){
        

        this.name = '';
        
        this.submit = function(){
            $uibModalInstance.close(this.name);
        }
        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);

})();