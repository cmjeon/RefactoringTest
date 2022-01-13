var assert = require('assert');
import {Province} from 'index';

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortFall, 5);
    });
});