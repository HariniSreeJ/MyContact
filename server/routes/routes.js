import express from'express'
import { Login, Register } from '../controller/userController.js'
const router=express.Router()
import { body } from 'express-validator'

router.post('/register',
    [body('name').trim().notEmpty().withMessage("Name Should Not be Empty"),
    body('email').trim().notEmpty().withMessage("Email Should Not be Empty")
    .isEmail().withMessage("Invalid Email!!!"),
    body('password').trim().notEmpty().withMessage("Password Should Not be Empty")
    .isLength({min:5,max:30}).withMessage("Password length be 5-30")
    ],Register)

router.post('/login',[
    body('email').trim().notEmpty().withMessage("Email Should Not be Empty")
    .isEmail().withMessage("Invalid Email!!!"),       
    body('password').trim().notEmpty().withMessage("Password Should Not be Empty")
    .isLength({min:5,max:30}).withMessage("Password length be 5-30")
     ],Login)


export{router as Router}