(function() {
  angular.module('mymeanblog')
          .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
      {
        _id: 'kj1 g4lk132`jg41',
        title: 'YEAH',
        body: 'YUP',
        created: new Date(),
        updated: new Date()
      }
    ];

    function edit(post){
      console.log('moving to the edit page');
    }
    function deletePost(post){
      console.log('deleting the post with _id of' + post._id);
    }
  }
}());
