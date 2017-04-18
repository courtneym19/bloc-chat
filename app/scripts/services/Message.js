(function() {
  function Message($firebaseArray, $cookies) {
      
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
    
      
    return {
        getByRoomId: function(roomId){
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        },
        
        send: function(newMessage) {
            messages.$add(newMessage).then(function(ref){
                var id = ref.key;
                messages.$indexFor(id);
              });
        }
    };
  }
      
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();