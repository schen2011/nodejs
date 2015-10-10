var MongoClient = require('mongodb').MongoClient,
	Server = require('mongodb').Server;
var client = new MongoClient(new Server('localhost',27017,{
socketOptions: {connectTimeoutMS:500}, poolSize:5, auto_reconnect:true},
	{numberOfRetries:3, retryMilliSeconds:500}));
	
client.open(function(err, client){
	if(err){
		console.log("Connection failed via client object");
	}
	else
	{
		var db = client.db("newdatabase");
		if(db)
		{
			console.log("Connected via client object...");
			db.authenticate("admin", "password", function(err, result){
				if(err){
					console.log("authentication failed");
					client.close();
					console.log("Connection closed...");
				}
				else{
					console.log("Authenticated via client object");
					db.logout(function(err,result){
						if(!err)
							console.log("logged out");
						client.close();
						console.log("connection closed");
					})
				}
				
			})
		}
		else
		{
			console.log("db does not exist");
		}
	}
});