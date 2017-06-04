(function(){

	//"use strict";

	angular
		.module('myApp1')
		.controller('friendlistController',friendlistController);

		function friendlistController(){
			var vm = this;
			var friendData = null;

			vm.pageTitle = 'Friend List Page';

			vm.friends =[
			{
				id:1,
				firstname:"Rehman",
				lastname:"bhatti",
				age:'24',
				gender:'male'
			},
			{
				id:2,
				firstname:"usman",
				lastname:"malik",
				age:'25',
				gender:'male'
			},

			{
				id:3,
				firstname:"shoaib",
				lastname:"khan",
				age:'27',
				gender:'male'
			}
		]

		function friendDetail(user_id){
			//alert("test");
			var friend = vm.friends.filter(function(obj,id){
				return obj.id == user_id;
			})[0];
		    vm.friendData = "Age :"+friend.age+"Gender: "+friend.gender;

		}

		//Expose the funciton for view friend detail.
		vm.friendDetail = friendDetail;

		}
})()