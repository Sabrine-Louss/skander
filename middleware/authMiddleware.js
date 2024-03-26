const jwt = require("jsonwebtoken")

module.exports.authMiddleware = async(req,res,next)=>{
    try{
        const token = req.headers.token
        if (!token) res.status(401).json.authMiddleware({msg: "You're not authorized!"})
        else {
            const  verifyToken = jwt.verify(token, process.env.JWT_SECRET)
            req.body.userId = verifyToken.id
            next()
        }
    }
    catch (error){
        res.status(500).json({msg:"Something went wrong!" , error:error.message})

    }
}