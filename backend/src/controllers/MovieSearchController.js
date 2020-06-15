const axios = require('axios')

module.exports = {
  async index (req, res){
    const { title } = req.query
    const response = await axios.get(`http://www.omdbapi.com/?apikey=925eba28&s=${title}`)
    return res.json(response.data)
  }
}
