(function(){
  angular.module('mymeanblog')
  .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var postURL = '/posts';
    var posts = [];

    function getOne(){
      return $http.get(`${postURL}/${post._id}`)
                  .then(function(response){
                    posts = reponse.data.posts._id;
                  });
    }

    function getAll(){
      return $http.get(postURL)
                  .then(function(response){
                    posts = response.data.posts;
                  });
    }

    function create(post){
      return $http.post(postURL, post)
                  .then(getAll);
    }


    function deletePost(post){
      return $http.delete(`${postURL}/${post._id}`)
                  .then(getAll);
    }


    function update(post){
      return $http.put(`${postURL}/${post._id}`, post)
                  .then(getAll);
    }

    return{
      getOne: getOne,
      getAll: getAll,
      create: create,
      delete: deletePost,
      update: update
    };

  }
})();
