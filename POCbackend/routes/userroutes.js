const express = require('express')
const router = express.Router();
 const {getuser, setuser, edituser, deleteuser,singleUser} = require('../controllers/usercontroller')
//const {getuser, setuser, edituser, deleteuser,singleUser} = require('../controllers/mysqlcontroller')
//const {getUser, setuser} = require('../controllers/rediscontroller')

router.get('/',getuser)
router.post('/',setuser)
router.put('/edit/:id',edituser)
router.delete('/:id',deleteuser)
router.get('/single/:id', singleUser)





module.exports=router