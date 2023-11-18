var URL_Menu = "menu.json";
var design = angular.module("design", ["ngAnimate"]);

design.controller("menuList", function($scope, $http){

	$scope.selectedMenu = "";
		
	$scope.MenuClick = function(clicked){
		$scope.selectedMenu = $scope.selectedMenu === clicked ? "": clicked;
	}
 
	function onCompleteMenuList(response){
		$scope.menuListArray = response.data;
	}
	function onErrorMenuList(response){
		console.log("Menu Listesi Getirme Hatası\nJSON yolu yanlış verilmiş olabilir.");
	}
	$http.get(URL_Menu).then(onCompleteMenuList, onErrorMenuList);

});	