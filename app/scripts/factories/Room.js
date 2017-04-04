(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    var addNewRoom = function(newRoomName){
        rooms.$add({$value: newRoomName});
    };
        
    return {
        all: rooms,
        addNewRoom: addNewRoom
    }

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();