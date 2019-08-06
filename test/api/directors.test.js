const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token, directorId, director;

describe('Directors Pages Testing', (_) =>{
    before((done) => {
        chai.request(server)
        .post('/authenticate')
        .send({username:'test1', password:'12345'})
        .end((err, res) => {
            token = res.body.token;
            done();
        });
    });

    describe('/GET directors testing', (_) => {
        it('it should GET all the directors', (done) => {
            chai.request(server)
            .get('/api/directors')
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    describe('/POST direktors testing', (_) => {
        it('it should add a new director', (done) => {
            director = {
                name: "Jennifer",
                surname: "Kent",
                bio: "Jennifer Kent is an actress and director, known for Karabasan (2014)",
            }
            chai.request(server)
            .post('/api/directors')
            .send(director)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name').eql(director.name);
                res.body.should.have.property('surname').eql(director.surname);
                res.body.should.have.property('bio').eql(director.bio);
                directorId = res.body._id;
                done();
            });
        });
    });

    describe('/GET directors/:director_id', (_) => {
        it('it should a details directors', (done) => {
            chai.request(server)
            .get('/api/directors/'+directorId)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body[0].should.have.property('name');
                res.body[0].should.have.property('surname');
                res.body[0].should.have.property('bio');
                res.body[0].should.have.property('movies');
                done();
            });
        });
    });

    describe('/PUT directors/:director_id testing', (_) => {
        it('should PUT director by id', (done) => {
            newDirector = {
                name: director.name+'s',
                surname: director.surname+'s',
                bio: director.bio+'s',             
            };
            chai.request(server)
            .put('/api/directors/'+directorId)
            .send(newDirector)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id').eql(directorId);
                res.body.should.have.property('name').eql(newDirector.name);
                res.body.should.have.property('surname').eql(newDirector.surname);
                res.body.should.have.property('bio').eql(newDirector.bio);
                //console.log(res.body);
                done();
            });
        });
    });

    describe('/DELETE directors/:director_id testing', (_) => {
        it('should DELETE director by id', (done) => {
            chai.request(server)
            .delete('/api/directors/'+directorId)
            .set('x-access-token', "token")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('_id').eql(directorId);
                res.body.should.have.property('name').eql(newDirector.name);
                res.body.should.have.property('surname').eql(newDirector.surname);
                res.body.should.have.property('bio').eql(newDirector.bio);
                //console.log(res.body);
                done();
            });
        });
    });
});