module.exports.profile=function(req,res){

    // return res.end("<h1>user profile</h1>")
    return res.render('contact',{
        title:"contact page"
    })
}

module.exports.about=function(req,res){
    return res.render('about',{
        title:'about page'
    })
}


module.exports.data=function(req,res){
    return res.render('data',{
        title:"data page"
    })
}