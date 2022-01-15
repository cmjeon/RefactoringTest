import chai from 'chai';
import assert from 'assert';
var expect = chai.expect;
import { Province, sampleProvinceData } from './index.js'


describe('province', function () {
  it('shortfall', function () {
    const asia = new Province(sampleProvinceData())
    assert.equal(asia.shortFall, 5)
  })
})

// test case
describe('province', function () {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  })
  it('shortfall', function () {
    expect(asia.shortFall).equal(5);
  })
  it('profit', function () {
    expect(asia.profit).equal(230);
  })
  it('change production', function () {
    asia.producers[0].production = 20;
    expect(asia.shortFall).equal(-6);
    expect(asia.profit).equal(292);
  })
  it('zero demand', function () {
    asia.demand = 0;
    expect(asia.shortFall).equal(-25);
    expect(asia.profit).equal(0);

  })
  it('negative demand', function () {
    asia.demand = -1;
    expect(asia.shortFall).equal(-26)
    expect(asia.profit).equal(-10)
  })
  it('empty string demand', function () {
    asia.demand = "";
    expect(asia.shortFall).NaN
    expect(asia.profit).NaN
  })
})

describe('no producers', function () {
  let noProducers;
  beforeEach(function () {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20
    }
    noProducers = new Province(data);
  })
  it('shortfall', function () {
    expect(noProducers.shortFall).equal(30);
  })
  it('profit', function () {
    expect(noProducers.profit).equal(0);
  })
})

describe('string for producers', function () {
  it('', function () {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20
    };
    const prov = new Province(data);
    expect(prov.shortFall).equal(0);
  });
})