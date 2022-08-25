require ('dotenv/config');

module.exports = {
 HTTP_HOST: process.env.HTTP_HOST || 'localhost',
 HTTP_PORT: +process.env.HTTP_PORT || 3000,
 MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/',
}