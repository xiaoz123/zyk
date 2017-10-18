(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'庄宇坤',
        ab:'',
        name1:'庄宇坤',
        phone:'13295015238',
        phone1:'13295015238',
        createTime:'2017-9-30 15:30:00',
        email:'635114687@qq.com',
        hylx:'111'
      });
    });
  }])
})();
