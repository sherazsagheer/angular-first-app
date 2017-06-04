(function(){
	"use strict";

	angular
		.module("myApp1")
		.service('UserService',UserService);

		function UserService(){
			var user = {
				name:'sheraz',
				email:'sheraz.saghir@gmail.com',
				gender:'male',

			};

			function updateUserProfile(email,name){
				//console.log(name);
				user.name	= 	name;
				user.email	=	email;
				
			}

			return{
				user,
				updateUserProfile
			}

		}
})()