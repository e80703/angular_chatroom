var app = angular.module("myapp", ["firebase"]);

app.controller("chatCtrl",function($scope, $firebase){
	var ref = new Firebase("https://egroupchat.firebaseio.com/messages");
	// var fbref = new Firebase("https://egroupchat.firebaseio.com");
	$scope.messages = $firebase(ref).$asArray();
	

	// $scope.login = function(){
	// 	fbref.authWithOAuthRedirect("facebook", function(error, authData) {
	// 	  if (error) {
	// 	    console.log("Login Failed!", error);
	// 	  } else {
	// 	    console.log("Authenticated successfully with payload:", authData);
	// 	  }
	// 	});
	// };
	

	$scope.addMessage = function(msg){
        //$scope.messages.$add({name: msg.name, text: msg.text});
        msg.date = Date.now();
        $scope.messages.$add(msg);
        $scope.message.text = "";
	};

	$scope.removeMessage = function(msg){
		var flag = confirm("Delete?");
		if(flag)
			$scope.messages.$remove(msg);
		/*var itemRef = new Firebase("https://blinding-fire-5769.firebaseio.com/"+msg.$id);
		itemRef.remove();*/
	};

	$scope.updateMessage = function(msg){
		msg.text = prompt("Edit message", msg.text);
		$scope.messages.$save(msg);
	};
});