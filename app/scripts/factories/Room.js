(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
      console.log(ref);
      
    var rooms = $firebaseArray(ref);
    console.log(rooms);
      console.log($firebaseArray);
    return {
    all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();