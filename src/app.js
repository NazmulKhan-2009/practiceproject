const express = require('express');
const { dirname } = require('path');
const app=express()
const path = require('path') ;
const hbs=require('hbs')
const port=process.env.PORT || 3000 ;

// console.log()

const template_path=path.join(__dirname, '../templates/views')
const partial_path=path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partial_path)

app.use(express.static(path.join(__dirname , '../public')))  //by thapa vi

// app.use(express.static('public')) //by me


app.get('/', (req,res)=>{
 res.render('index')
})

app.get('/about' , (req , res)=>{
 res.render('about')
})

app.get('/weather' , (req , res)=>{
 res.render('weather')
})

app.get('*' , (req , res)=>{
 res.render('404error', {ermsg:'Ops the page Not found,Click here to back'})
})





app.listen(port, ()=>console.log('Listening from port '+ port)) ;