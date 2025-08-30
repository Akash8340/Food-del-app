import jwt from "jsonwebtoken";

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if(!token){
        return res.status(401).json({success:false, message:"Not Authorized Login Again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        //manually adding body if no body in req
        if (!req.body) req.body = {};
        req.body.userId = token_decode.id; //add userId to request body
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({success:false, message:"Error"});
    }
}

export default authMiddleware;