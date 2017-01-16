/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular.module("dbMVP")
  .controller("HotController", ["$scope", 'movieServices', function($scope,movieServices) {
  	$scope.isLoading = true;
    $scope.currentPage = 1;
    $scope.totalPage = 1;
    var pageCount = 10;

  	var getUrl = "https://api.douban.com/v2/movie/in_theaters";
  	movieServices.jsonp(getUrl, {start:0, count: pageCount}, function(result) {
  		$scope.allHotMovies = result;
  		
      $scope.isLoading = false; 
      $scope.totalPage = Math.ceil(result.total / pageCount);
  		$scope.$digest();
  	});
//请求下一页
    $scope.nextPage = function(page) {
      //如果当前页等于总页数则不做任何操作
      if(page == $scope.totalPage) {
        return;
      }
      $scope.isLoading = true;
      var start = page*pageCount;
      movieServices.jsonp(getUrl, {start:start, count: pageCount}, function(result) {
        $scope.allHotMovies = result;
        
        $scope.isLoading = false; 
        $scope.totalPage = Math.ceil(result.total / pageCount);
        $scope.currentPage++;
        $scope.$digest();
      });
    }

    $scope.previousPage = function(page) {
      if(page === 1) {
        return;
      }

      $scope.isLoading = true;
      var start = (page-1)*pageCount;
      movieServices.jsonp(getUrl, {start:start, count: pageCount}, function(result) {
        $scope.allHotMovies = result;
        
        $scope.isLoading = false; 
        $scope.totalPage = Math.ceil(result.total / pageCount);
        $scope.currentPage--;
        $scope.$digest();
      });
    }

    $scope.$on("message", function(event, data) {
      $scope.isLoading = true; 

      var url = "https://api.douban.com/v2/movie/search";

      movieServices.jsonp(url, {q:data.inputText}, function(result) {
        $scope.allHotMovies = result;
        console.log(result);
        
        $scope.isLoading = false; 
        $scope.totalPage = Math.ceil(result.total / pageCount);
        
        $scope.$digest();
      });
    })

  }]);

})();