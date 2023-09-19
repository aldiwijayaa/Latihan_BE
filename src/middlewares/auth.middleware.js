const jwt = require ("jsonwebtoken")
module.exports = {
  autentication: async(req,res,next) => {
    try {
      const {token} = req.headers
      const decoded = jwt.verify(token, 'bebas');
      req.decodedToken = decoded
      next()
    } catch (error) {
      return res.status(401).json({
        message: "unauthorized",
        error
      })
    }
  },
  authorizationAdmin: (req, res, next) => {
    try {
      const decoded = req.decodedToken
      if(decoded.role === "admin"){
        next()
      }else{
        res.status(401).json({
          message: "unauthorized, only admin can access this endpoint"
        })
      }
    } catch (error) {
      return res.status(401).json({
        message: "unauthorized, only admin can access this endpoint",
        error
      })
    }
  },
  authorizationOperator: (req, res, next) => {
    try {
      const decoded = req.decodedToken
      if(decoded.role === "operator"){
        next()
      }else{
        res.status(401).json({
          message: "unauthorized, only operator can access this endpoint"
        })
      }
    } catch (error) {
      return res.status(401).json({
        message: "unauthorized, only operator can access this endpoint",
        error
      })
    }
  }
}