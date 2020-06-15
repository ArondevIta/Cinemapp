const axios = require('axios')
const Movie = require('../models/Movie')

module.exports = {
  async index (req, res){
    const movies = await Movie.find()
    return res.json(movies)
  },

  async store(req, res){
    const { imdb } = req.body
    console.log(imdb)
    const response = await axios.get(`http://www.omdbapi.com/?apikey=925eba28&i=${imdb}`)
    const { Title, Type, Year, imdbID, Poster } = response.data
    const movie = await Movie.create({
      title: Title,
      imdbID: imdbID,
      typeMovie: Type,
      year: Year,
      poster: Poster
    })
    return res.json(movie)
  },

  async drop(req, res){
    const { id } = req.params
    const movie = await Movie.findById(id)

    if(movie){
      await Movie.findByIdAndRemove(id)
      return res.json({message: 'Movie desfavorited'})
    }else{  
      return res.json({ message: 'Movie not found'})
    }
    
  }
}
