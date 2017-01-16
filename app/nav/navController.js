/*
* @Author: QCF
* @Date:   2017-01-16 17:18:41
* @Last Modified by:   QCF
* @Last Modified time: 2017-01-16 19:54:27
*/

;(function() {

  angular.module("dbMVP")
  .controller("NavController", ["$scope", '$rootScope', 'movieServices', function($scope, $rootScope, movieServices) {
    $scope.inputText = "";
    $scope.searchMoive = function(event, text) {
      var url = "http://api.douban.com/v2/movie/search";
      var keycode = event.keyCode || event.which;
      if(keycode === 13 || keycode === 108) {
        // hotServer.getAllHotMovie(url, {q:text, start:0, count: 15}, function(result) {
        //  console.log(result);
        // $scope.$broadcast("message", {inputText:text});
        // window.location.href = "/#/search";
        // });
        $rootScope.text = text;
        window.location.href = "/#/search";
      }
    }
  }]);


})();