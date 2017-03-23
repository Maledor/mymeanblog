(function(){
  angular.module('mymeanblog')
  .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var userURL = '/users';
    var users = [];

    function login(){
    }

    function getOne(){
      return $http.get(`${userURL}/${user._id}`)
                  .then(function(response){
                    users = reponse.data.users._id;
                  });
    }

    function getAll(){
      return $http.get(userURL)
                  .then(function(response){
                    users = response.data.users;
                  });
    }

    function signup(user){
      return $http.user(userURL, user)
                  .then(getAll);
    }


    function deleteUser(user){
      return $http.delete(`${userURL}/${user._id}`)
                  .then(getAll);
    }


    function update(user){
      return $http.put(`${userURL}/${user._id}`, user)
                  .then(getAll);
    }

    return{
      getAll: getAll,
      delete: deleteTodo,
      update: update,
      login: login,
      signup: signup
    };

  }
})();
