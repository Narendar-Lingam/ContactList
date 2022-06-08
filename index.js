const express=require("express");
const path=require("path");
const port=8000;
const app=express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded());
app.use(express.static('assets'))
//middleware i
// app.use(function(req,res,next){
//     console.log("middleware 1 called")
//     next();
// })
// //middleware 2
// app.use(function(req,res,next){
//     console.log("middleware 2 called")
//     next()
// })
var contactList=[
    {
        name:"Naru",
        phone:"0000000000000"
    },
    {
        name:"abhi",
        phone:"111111111111"
    }
]
app.get('/',function(req,res){
    return res.render('home',
    {
        title:"contactlist",
        contact_list:contactList
    
    });
})
app.get('/practice',function(req,res){
    return res.render('/practice')
})
app.post("/create-contact",function(req,res){
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });
    contactList.push(req.body)
    return res.redirect('back')
});
// for deleting a contact
app.get('/delete-contact',function(req,res){
    // get the query from url
    let phone=req.query.phone;
    let contactIndex=contactList.findIndex(contact=> contact.phone == phone);
    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');

})
app.listen(port,function(err){
    if(err){
        console.log("error",err)
    }
    console.log("yup server is running",port);
})