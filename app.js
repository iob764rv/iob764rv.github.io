
  (function() {
  var app = angular.module('newsApp', ["ngRoute"]);

  app.controller('StoreController', function(){

    var num=this;
    this.count=0;
    this.showValue=false;
    this.number=5;
    this.picture='photo.jpg';
    this.color='green';
    var message='test';
    this.message='test';
    this.radios=[{name:"one"},{name:"two"},{name:"three"},{name:"four"}];

    this.newNumber=function(value){ this.number+=value;};
    this.update= function(){
      num.count++;
    };


  });


app.config(function($routeProvider) {
    $routeProvider

    .when("/radio", {
        templateUrl : "radio.html"
    })
    .when("/news", {
        templateUrl : "news.html"
    })
    .when("/capital", {
        templateUrl : "capital.html"
    });
});



})();
