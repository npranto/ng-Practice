angular.module('app')
	.service('service', function () {
		var users = [
		{
			name: "Shakib",
			city: "Cambridge",
			state: "MA",
			age: 20,
			gender: "male"
		},
		{
			name: "Artyom",
			city: "Boston",
			state: "MA",
			age: 21,
			gender: "male"
		},
		{
			name: "Shahidul",
			city: "Allston",
			state: "RI",
			age: 17,
			gender: "male"
		},
		{
			name: "Rokeya",
			city: "Lowell",
			state: "MA",
			age: 21,
			gender: "female"
		},
		{
			name: "Zia",
			city: "Amherst",
			state: "NY",
			age: 16,
			gender: "female"
		},
		{
			name: "Jackie",
			city: "Cambridge",
			state: "MA",
			age: 20,
			gender: "female"
		},
		{
			name: "Neal",
			city: "Boston",
			state: "MA",
			age: 18,
			gender: "male"
		},
		{
			name: "Jack",
			city: "Dallas",
			state: "TX",
			age: 29,
			gender: "male"
		},
		{
			name: "Ahfida",
			city: "Cambridge",
			state: "MA",
			age: 20,
			gender: "female"
		},
		{
			name: "Zubair",
			city: "Dallas",
			state: "TX",
			age: 19,
			gender: "male"
		},
		]

		this.getUsers = function(){
			return users.slice();
		}

		this.addUser = function(userObj){
			users.push(userObj);
		}

		this.deleteData = function(index){
			users.splice(index, 1);
		}

// end service
	});