import chai from 'chai'
import * as io from 'socket.io-client';

// const server = require('../src/index');
const should = chai.should();

describe('the socket test', function() {
  let socket;
  let options = {
    transports: ['websocket'],
    'force new connection': true
  };
  let socketUrl = "http://localhost:5000";


  beforeEach(done => {
    socket = io.connect(socketUrl, options)
    socket.on('connect', () => {
      console.log('socket connected');
      done();
    })

  });

  it('has a working test suite', function () {
    [].should.be.empty;
  });

  it('tweets back a tweet', function (done) {
    socket.emit('tweet', 'yeah')

    socket.on('retweet', function (data) {
      data.should.eql('yeah');
      done();
    });

  });

});
