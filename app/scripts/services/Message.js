(function() {
  function Message($firebaseArray) {
      
    var ref = firebase.database().ref().child('messages');
    var refById = ref.orderByChild('roomId');
      
      console.log(ref);
      console.log(refById);
   
      
      
    return {
        getByRoomId: function(roomId){
            return $firebaseArray(refById.equalTo(roomId));
        }
    };
  }
      
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();