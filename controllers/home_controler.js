module.exports.home=function(req,res){
  //  // this below line indicate directly on server;
    // return res.end('<h1>expres is in home controler</h1>') 
  //  // this line take code home.ejs 
    return res.render('home',{
        title:"home page"
    });
}



// module.exports.famous=function(req,res){
//     return res.end("<h1>hey suno famous</h1>")
// }

// module.exports.funny=function(req,res){
//     return res.end('<h1 style="color:blue;">hey funny</h1>')
// }



