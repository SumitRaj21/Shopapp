const path=require('path');
const express = require("express");

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

const app = express();



app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/add-product', (req, res) => {
//     const html = `<form action="/product" method="POST">Product Name: <input type="text" name="product">
//     Product Size : <input type="number" name="size">
//     <button type="submit">Add Product</button></from>`;
//     res.send(html);
// });

// app.post('/product',(req,res)=>{
//     const body=req.body;
//     console.log(body);
//     res.redirect('/add-product');
// })

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','contactus.html'));
})
app.use('/success',(req,res)=>{
    res.send(`<h1>Form Successfully Filled</h1>`);
})
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404Page.html'));
})



app.listen(8000);