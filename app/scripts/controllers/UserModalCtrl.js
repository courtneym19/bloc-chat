(function(){
    function UserModalCtrl($cookies, $uibModalInstance){
        
        this.submit = function(username){
            $cookies.put('blocChatCurrentUser', username);
            $uibModalInstance.close();
        }


    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();