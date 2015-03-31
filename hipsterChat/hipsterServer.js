var net = require('net');
var prompt = require('prompt');
var port = 3000


var Event = function(date, topic, headcount, registered, emails) {
  this.date = date;
  this.topic = topic;
  this.headcount = headcount;
  this.registered = registered;
  this.emails = emails;
}

// var messageLog = [];
// var joinedLog = messageLog.join("");

var testEvent = new Event("Jan 1st", "How to improve your life", 4, [], []);
//var admin = new Event(process.argv[2], process.argv[3] )

var server = net.createServer(function(socket) {
  console.log('client connected');

  socket.write("So you haven't given up yet, here's another chance at failure :)\n ")
  socket.write("Welcome, the next event is " + testEvent.date +": "+ testEvent.topic +"\n there are "+ testEvent.headcount +" going to this event "+ testEvent.registered + testEvent.emails);

  socket.on('data', function(data) {
//     var receivedMessage = [];
// var loggedMessage = receivedMessage.push(function input (callback){
//   callback(); 
// });

//     input(function(){
//       data.toString().trim()
//     })
    console.log(data.toString().trim());
    //messageLog.push(data.toString().trim());
    //socket.write(data.toString().trim());
    // receivedMessage = data.toString().trim()
    //var loggedMessage = receivedMessage.push(data.toString().trim());
   //console.log(loggedMessage[0]);
   
 if (data.toString().trim().indexOf("register") === 0 ) {
       receivedMessage.push(data.toString().trim().indexOf("meir"));
       socket.write("Thanks you for registering, please type your first name and email address")
       
     
    if (process.argv.length > 3){
      testEvent.headcount ++;
     socket.write("Your registration is confirmed")
   } if (process.argv.length < 3) {
    socket.write("Please make sure you've included your name and email.")
   }
 
}

 });
      
    

  socket.on('end', function() {
    console.log('client disconnected');
  });
});
 

server.listen(port, function() { //'listening' listener
  console.log('listening on port ' + port );
});