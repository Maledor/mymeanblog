(function() {
  angular.module('mymeanblog')
          .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService', '$routeParams'];

  function PostController($scope, PostService, $routeParams){
    $scope.edit = edit;
    $scope.create = create;
    $scope.mockPost = {
        _id: 'f87dsg5fd8765g',
        title: 'What?',
        body: 'Who?',
        created: new Date(),
        updated: new Date()
      };
      var id = $routeParams.postId;
      PostService.getOne(id)
                  .then(function(){
                    console.log('success');
                  })
                  .catch(function(){
                    console.log('error');
                  });

    function edit(post){
      PostService.edit(post);
    }
    function create(post){
      PostService.create(post);
    }
  }
}());
