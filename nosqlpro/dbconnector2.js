var MongoClient = require('mongodb').MongoClient
  , Server = require('mongodb').Server;
  
MongoClient.connect("mongodb://admin:password@localhost:27017/newdatabase?authMechanism=SCRAM-SHA-1", {
	server: {
		poolSize: 5,
		socketOptions: {connectTimeoutMS: 500},
		auto_reconnect: true
	},
	replSet: {},
	mongos: {}}, function(err,db){
		if(err)
			console.log(err);
		else
			console.log("success");
	} 
);
