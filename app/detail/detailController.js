/*
* @Author: QCF
* @Date:   2017-01-16 15:22:40
* @Last Modified by:   QCF
* @Last Modified time: 2017-01-16 15:45:24
*/


;(function() {

  angular.module("dbMVP")
  .controller("DetailController", ["$scope", '$routeParams', 'hotServer', function($scope, $routeParams, hotServer) {
  	// 需要在这里面拿到ID值，来请求该电影的详细信息
  	console.log($routeParams.id);
  	var url = "https://api.douban.com/v2/movie/subject/" + $routeParams.id;
  	hotServer.getAllHotMovie(url, {}, function(data) {
  		console.log(data);
  		$scope.movieDetail = data;
  		$scope.$digest();
  	})
  }]);


})();