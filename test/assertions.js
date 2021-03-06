'use strict';

const expect = require('expect');

const debug = false;

const add = (repo, bag) => done => {
    repo.add(bag.client, (err, res) => {
      expect(res).toExist();
      expect(res._id).toExist('id should exist.');
      bag.id = res._id;
      // console.log(repo.constructor.name, bag.id);
      expect(res.name).toBe(bag.client.name);
      done();
    });
  };

const findAll = (repo, bag) => done => {
    repo.findAll((err, res) => {
      expect(res).toExist();
      expect(Array.isArray(res)).toBe(true);
      expect(typeof res[0]._id).toNotBe('object');
      expect(typeof res[0]._id).toExist();
      expect(res.find(x => x._id === bag.id)).toExist();

      if (debug) {
        console.log(res);
      }

      done();
    });
  };
const findOne = (repo, bag) => done => {
    repo.findOne(bag.id, (err, res) => {
      if (err) {
        console.log(err);
      }
      expect(res).toExist('findOne is not returning an object');
      expect(typeof res._id).toNotBe('object');
      expect(res.name).toBe(bag.client.name);
      done();
    });
  };
const update = (repo, bag) => done => {
    repo.update({
      _id: bag.id,
      name: 'baz'
    }, (err, res) => {
      if (err) {
        console.log(err);
      }
      expect(res).toExist();
      expect(typeof res._id).toNotBe('object');
      expect(res.name).toBe('baz');
      if (debug) {
        console.log(res);
      }
      done();
    });
  };
const remove = (repo, bag) => done => {
    repo.remove(bag.id, (err, res) => {
      expect(res).toExist();
      expect(res.name).toBe('baz');
      expect(typeof res._id).toNotBe('object');
      repo.findOne(bag.id, (err, res) => {
        expect(res).toNotExist();
        done();
      });
    });
  };

const disconnect = repo => done => {
    expect(typeof repo.disconnect).toExist();
    expect(typeof repo.disconnect).toBe('function');
    done();
  };

const clear = repo => done => {
    expect(typeof repo.clear).toExist();
    expect(typeof repo.clear).toBe('function');
    done();
  };

const assertions = [{
  assertion: 'should add',
  method: add,
}, {
  assertion: 'should findAll',
  method: findAll,
}, {
  assertion: 'should findOne',
  method: findOne,
}, {
  assertion: 'should update',
  method: update,
}, {
  assertion: 'should remove',
  method: remove,
}, {
  assertion: 'should expose an endpoint to disconnect',
  method: disconnect,
}, {
  assertion: 'should be able to truncate',
  method: clear,
}];
module.exports = {
  assertions,
  add,
  findAll,
  findOne,
  update,
  remove,
  disconnect,
  clear
};
