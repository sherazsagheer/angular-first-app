(function(){

	"use strict";

	angular
		.module('myApp1')
		.controller('profileController',profileController);

		function profileController(UserService){
			var vm = this;
			vm.UserService = UserService;
			vm.pageTitle = 'Profile Page 1' ;
		}
})()