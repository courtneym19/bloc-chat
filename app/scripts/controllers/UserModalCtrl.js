(function(){
    function UserModalCtrl($cookies, $uibModalInstance){
        
        var username = '';
        
        this.submit = function(username){
            if (username === undefined){
               alert("Please enter a username"); 
            }
            
            else if (username.length >= 1) {
                $cookies.put('blocChatCurrentUser', username);
                $uibModalInstance.close(); 
            }
        }


    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();