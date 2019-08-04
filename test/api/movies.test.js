const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token, movieId, movie, newMovie;

describe('Movies Pages', (_) =>{
    before((done) => {
        chai.request(server)
        .post('/authenticate')
        .send({username:'test1', password:'12345'})
        .end((err, res) => {
            token = res.body.token;
            done();
        });
    });

    describe('/GET movies testing', (_) => {
        it('it should GET all the movies', (done) => {
            chai.request(server)
            .get('/api/movies')
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('title');
                res.body[0].should.have.property('category');
                done();
            });
        });
    });

    describe('/POST movies testing', (_) => {
        it('it should POST a movie', (done) => {
            movie = {
                director_id: '5d40b579f5912e470202ab7e',
                title: 'Udemy',
                category: 'Mystrey',
                country: 'ABD',
                year: 1960,
                token               
            };
            chai.request(server)
            .post('/api/movies')
            .send(movie)
            .end((err, res) => {
                res.should.have.status(200);
                //console.log(res.body);
                res.body.should.be.a('object');
                res.body.should.have.property('director_id');
                res.body.should.have.property('title');
                res.body.should.have.property('category');
                res.body.should.have.property('country');
                res.body.should.have.property('year');
                movieId = res.body._id;
                done();
            });
        });
    });

    describe('/GET movies/:movie_id testing', (_) => {
        it('it should GET a movie details by the given id', (done) =>{
            chai.request(server)
            .get('/api/movies/'+movieId)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                //console.log(res.body);
                res.body.should.be.a('object');
                res.body.should.have.property('director_id');
                res.body.should.have.property('title');
                res.body.should.have.property('category');
                res.body.should.have.property('country');
                res.body.should.have.property('year');
                res.body.should.have.property('_id').eql(movieId);
                done();
            });
        });
    });

    describe('/PUT movies/:movie_id testing', (_) => {
        it('should PUT movie by id', (done) => {
            newMovie = {
                director_id: movie.director_id,
                title: movie.title+'s',
                category: movie.category+'s',
                country: movie.country+'s',
                year: movie.year+5,
                token               
            };
            chai.request(server)
            .put('/api/movies/'+movieId)
            .send(newMovie)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('director_id').eql(newMovie.director_id);
                res.body.should.have.property('title').eql(newMovie.title);
                res.body.should.have.property('category').eql(newMovie.category);
                res.body.should.have.property('country').eql(newMovie.country);
                res.body.should.have.property('year').eql(newMovie.year);
                res.body.should.have.property('_id').eql(movieId);
                //console.log(res.body);
                done();
            });
        });
    });

    describe('/DELETE movies/:movie_id testing', (_) => {
        it('should DELETE movie by id', (done) => {
            chai.request(server)
            .delete('/api/movies/'+movieId)
            .send(newMovie)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('director_id').eql(newMovie.director_id);
                res.body.should.have.property('title').eql(newMovie.title);
                res.body.should.have.property('category').eql(newMovie.category);
                res.body.should.have.property('country').eql(newMovie.country);
                res.body.should.have.property('year').eql(newMovie.year);
                res.body.should.have.property('_id').eql(movieId);
                //console.log(res.body);
                done();
            });
        });
    });
});