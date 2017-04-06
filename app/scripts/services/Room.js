(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
      
    var messageRef = firebase.database().ref().child('messages').orderByChild('roomId');
      
 

  
    return {
        all: rooms,
        addNewRoom: function(newRoomName){
            rooms.$add({name: newRoomName});
            console.log(rooms);
        }
    }

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();