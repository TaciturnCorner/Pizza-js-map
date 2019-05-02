
var mongoose	=	require('mongoose');
mongoose.connect('mongodb://kma-test:@mongodb-818-0.cloudclusters.net/kma-test?authSource=admin');
var db =	mongoose.connection;
db.on('error',	function	(err)	{
    console.log('connection	error:',	err.message);
});
db.once('open',	function	callback	()	{
    console.log("Connected	to	DB!");
})



var MovieSchema =	new	mongoose.Schema({
    name: String,
    age: Number
});

var Movie	=	mongoose.model('DidykTimur',	MovieSchema);


var movie	=	new	Movie({
    title:	"Lord	of	the	Rings",
    release_date:	new	Date("2007-08-01"),
    cast:	["John",	"Paula"]
});
movie.save(function(err,	movie_db){
    if(!err)	{
        console.log(movie_db._id);
    }
});


for(var i = 0; i< 10; ++i){
    var movie	=	new	Movie({
        name: "asd" + i,
        age: 100+ 1
    });
    movie.save(function(err,	movie_db){
        if(!err)	{
            console.log(movie_db._id);
        }
    });
}


