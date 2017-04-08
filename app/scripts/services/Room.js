(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
      
    var messageRef = firebase.database().ref().child('messages').orderByChild('roomId');
      
 

  
    return {
        all: rooms,
        addNewRoom: function(newRoomName){
            rooms.$add({name: newRoomName}).then(function(){
                var id = ref.key;
                rooms.$indexFor(id);
            });
        }

    }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();