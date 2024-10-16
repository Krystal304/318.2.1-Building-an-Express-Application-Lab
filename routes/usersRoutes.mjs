

import express from 'express';
 
const router = express.Router();

router.get ('/', (req, res) =>{
    res.send('user list');
}) 

router.get('/new', (req, res) => {
    res.send('user new form');
})


router.post('/', (req, res)=>{
    res.send('create user')
})

router
.route('/:id')
.get((req,res)=>{
    // console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res)=>{
    res.send(`Update User With ID ${req.params.id}`)
  })
.delete ((req, res)=>{
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{ name: "Krystal" }, { name: "Kendall"}]
router.param("id", (req, res, next, id)=>{
   req.user = users[id]
    next()
})
export default router;