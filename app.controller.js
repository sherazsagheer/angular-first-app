(function(){
	"use strict";
	angular
		.module('myApp1')
		.controller("myAppController",myAppController);//main/app shell controller

	function myAppController(UserService){
		var vm 			=  this;
		vm.username 	= 'sheraz';
		vm.UserService	=	UserService;

		
	}

})();