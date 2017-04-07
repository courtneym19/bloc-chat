 (function() {
     function MainCtrl(Room, $uibModal) {
         this.rooms = Room.all;
         
         this.open = function(){
            var newModal = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: "small",
                resolve:{
                    $uibModalInstance: function(){
                        return this.$uibModalInstance;
                    },
                 
                }
            });
         }
         
     }
 
     angular
         .module('blocChat')
         .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
 })();