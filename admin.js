const path=require('path');
const express=require("express");
const router=express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname,'../', 'views','add-product.html'));
});

router.post('/add-product',(req,res)=>{
    const body=req.body;
    console.log(body);
    res.redirect('/shop');
});

module.exports=router;