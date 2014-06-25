/**
 * Created by lmw on 16/04/2014.
 */

// basic linear congruential generator
function makeRngGenFunc(seed) {
    // based on: http://rosettacode.org/wiki/Linear_congruential_generator#Go
    function lcg(a, c, m, seed) {
        var r = seed;
        return function() {
            r = (a*r + c) % m;
            return r;
        };
    }

    var g = lcg(214013, 2531011, 1<<31, seed);
    return function() {
        // microsoft generator has extra division step
        return g() / (1 << 16);
    };
}