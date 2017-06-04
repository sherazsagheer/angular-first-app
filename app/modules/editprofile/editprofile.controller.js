(function(){
	"use strict";
	angular
		.module('myApp1')
		.controller('editprofileController',editprofileController);

	function editprofileController(UserService){
		var vm =this;
		vm.pageTitle = 'Edit User Profile';
		vm.UserService = UserService;
		vm.username = UserService.user.name;
		vm.useremail = UserService.user.email;
	}

})()