/*
* @Author: QCF
* @Date:   2017-01-14 17:54:17
* @Last Modified by:   QCF
* @Last Modified time: 2017-01-16 13:46:44
*/
;(function(angular) {
    'use strict';
    var app = angular.module("dbMVP");
    app.service('movieServices', [function() {
        this.jsonp = function(url, data, fn) {
            function getData(data) {
                fn(data);
                document.body.removeChild(script);
            }

            window['getData'] = getData;

            
            var searchData = '?';
            
            
            for(var i in data) {
                searchData += i + "=" + data[i] + "&";
            }
            
            
            var script = document.createElement("script");
            script.src = url + searchData + "callback=getData";
            document.body.appendChild(script);
        }
    }]);
})(angular);
