module.exports = {
  products: async (req, res) => {
    try {
      // const data = await namaModel.getAllProduct()
      const data = ['a', 'b', 'c'];
      return res.json({
        data,
        message: "get all products success"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        error
      })
    }
  },
  users: async (req, res) => {
    try {
      const data = ['1', '2', '3'];
      return res.json({
        data,
        message: "get all users success"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        error
      })
    }
  },
  stock: async (req, res) => {
    try {
      const data = ['a1', 'b2', 'c3'];
      return res.json({
        data,
        message: "get all stock success"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        error
      })
    }
  }
}