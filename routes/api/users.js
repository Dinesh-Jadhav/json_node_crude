const express = require('express')

const router = express.Router();

const uuid = express('uuid');

let users = require("../../users");


router.get('/',(req,res)=>{
    res.json(users) 
})

router.get('/:id',(req,res)=>{
    console.log(req.params);
    const found = users.some(user=>user.id===parseInt(req.params.id));
    if(found){
        res.json(users.filter(user=>user.id===parseInt(req.params.id)))
    }else{
        res.json({status:200,result:"id not found"});
    }
})

router.post('/',(req,res)=>{
    const user={
        id:5,
        name:req.body.name,
        email:req.body.email,
    }

    if(!user.name || !user.email){
        res.send("400")
    }

    users.push(user);
    res.json(users)

})


router.put('/:id',(req,res)=>{
    const found = users.some(user=>user.id===parseInt(req.params.id));
    if(found){
        const updateUser = req.body;
        users.forEach(user=>{
            if(user.id===parseInt(req.params.id)){
                user.name = updateUser.name?updateUser.name:user.name;
                user.email = updateUser.email?updateUser.email:user.email;
                res.json({msg:"user updated",user});
            }
        })
        //res.json(users.filter(user=>user.id===parseInt(req.params.id)))
    }else{
        res.json({status:200,result:"id not found"});
    }
})

router.delete('/:id',(req,res)=>{
    const found = users.some(user=>user.id===parseInt(req.params.id));
    if(found){
        users = users.filter(user=>user.id!==parseInt(req.params.id))
        res.json({msg:"user deleted",users})
    }else{
        res.json({status:200,result:"id not found"});
    }
})

module.exports = router; 