

import express from 'express';

const app = express();

const PORT = 3000;


// view engine
app.set ('view engine', 'ejs')


//routes
app.get(`/`, (req, res) => {
    console.log(`Here`)
    res.render('index', { text: 'World' })
    // res.send('Hi')
})



app.use('/users', userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});