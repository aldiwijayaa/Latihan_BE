const jwt = require ("jsonwebtoken")
module.exports = {
  login : async (req,res) => {
    try {
      const {email, password} = req.body
      if (email === "admin@gmail.com"&& password === "admin"){
        const token = jwt.sign({enail: 'admin@gmail.com', role: "admin"} , 'bebas');
        return res.json({
          data: token,
          message:"login as Admin succes"
        })
      }else if (email === "operator@gmail.com"&& password === "operator"){
        const token = jwt.sign({enail: 'operator@gmail.com', role: "operator"} , 'bebas');
        return res.json({
          data: token,
          message:"login as operator succes"
        })
      }else{
        return res.status(404).json({
          message: " Login gagal, email atau password salah"
        })
      }
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        error
      })
  }
}
}