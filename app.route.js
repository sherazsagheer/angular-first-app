(function(){
	"use strict";
	angular
		.module('myApp1')
		.config(routeConfig);

	function routeConfig($stateProvider,$urlRouterProvider){
		$stateProvider
		
		/*.state('home', {
			url:'/',
			template:"<h1>Test</h1>",
			//controller:"profileController",
			//controllerAs:"vm"
		})*/

		.state('profile', {
			url:'profile',
			templateUrl:"app/modules/profile/profile.html",
			controller:"profileController",
			controllerAs:"vm"
		})
		.state('friendlist', {
			url:'friendlist',
			templateUrl:"app/modules/friendlist/friendlist.html",
			controller:"friendlistController",
			controllerAs:"vm"
		})

		.state('editProfile', {
			url:'editProfile',
			templateUrl:"app/modules/editprofile/editprofile.html",
			controller:"editprofileController",
			controllerAs:"vm"
		})

	}
})();