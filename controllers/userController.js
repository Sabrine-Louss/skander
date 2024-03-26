const User = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
   
     try {
         const {email, password, name} = req.body
         const newUser = await User.findOne({email})
         if (newUser) res.status(400).json({msg:"email exist!!, please try to login"})
         else {
             const hashedPw = await bcrypt.hash(password, 10)
             console.log("hashedPw :", hashedPw)
             const createUser = await User.create({email, name, password: hashedPw})
             const token = await jwt.sign({id: createUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"})
             res.status(201).json({msg:"user created with success", user: createUser, token: token})
         }
     } catch (error) {
         res.status(500).json({msg:"something went wrong"})
     }
 }


const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const newUser = await User.findOne({email})
        if (!newUser) res.status(400).json({msg:"email does not exist, please try to register"})
        else {
            const checkPw = await bcrypt.compare(password, newUser.password)
            if (!checkPw) res.status(400).json({msg:"invalid password or email, please try again"})
            else {
                const token = await jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"})
                res.status(201).json({msg:"user created with success", user: newUser, token: token})
            }
        }
    } catch (error) {
        res.status(500).json({msg:"something went wrong"})
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.body.userId})
        if (!user) res.status(400).json({msg:"user doesn't exist "})
        res.status(200).json({msg:"got data", user: user})

    } catch (error) {
        res.status(500).json({msg:"something went wrong", error: error.message})
    }
}



module.exports = {register, login , getUser}