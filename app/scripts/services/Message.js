(function() {
  function Message($firebaseArray) {
      
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
      
    /* var message = {
        username: username,
        content: content,
        timestamp: timestamp,
        roomId = roomId
    } */
    
      
    return {
        getByRoomId: function(roomId){
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        },
        send: function(newMessage) {
        // take Message object as argument (newMessage)
            //submit newMessage to Firebase server 
        }
    };
  }
      
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();