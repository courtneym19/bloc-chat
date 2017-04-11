(function(){
    function UserModalCtrl($cookies, $uibModalInstance){
        
        this.submit = function(username){
            if (username.length >= 1) {
                $cookies.put('blocChatCurrentUser', username);
                $uibModalInstance.close();
            }
            else {
               alert("Please enter a username"); 
            }
        }


    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();