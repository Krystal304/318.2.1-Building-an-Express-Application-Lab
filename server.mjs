

import express from 'express';

import userRouter from './routes/usersRoutes.mjs';

const app = express();

const PORT = 3000;


// view engine
app.set ('view engine', 'ejs')
// app.use(logger)


//routes
app.get(`/`, logger, (req, res) => {
    // console.log(`Here`)
    res.render('index', { text: 'World' });
    // res.send('Hi')
});



app.use('/users', userRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}


app.listen (3000)
// app.listen(PORT, ()=>{
//     // console.log(`Server is running on PORT: ${PORT}`);
// });