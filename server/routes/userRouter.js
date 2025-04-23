const express=require('express')
const router=new express.Router()
const userControllers=require('../controllers/userController')

router.post('/signup',userControllers.registerControllers)

router.post('/login',userControllers.loginControllers)


module.exports=router