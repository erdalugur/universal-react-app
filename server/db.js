const movieData = require('./movies')

let movies = []
let Movies = function () {
    this.fetchAll = async function () {
        return movieData
    }
    this.firstOrDefault = function (filter) {
        return movieData.find(filter) || null
    }
    this.saveChanges = function (movie) {
        movies.push(movie)
    }
}
module.exports = {
    movies: new Movies()
}