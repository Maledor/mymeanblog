(function() {
  angular.module('mymeanblog')
          .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService'];

  function PostController($scope, PostService){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: 'j3h42kj21g54lk21jh43',
      title: 'The Greatest Thing Ever',
      body: 'stuff and things stuff and things stuff and things stuff and things stuff and things',
      created: new Date(),
      updated: new Date()
    };

    function edit(post){
      console.log('editing the post');
    }

    function create(post){
      PostService.create(post);
    }
  }
}());
