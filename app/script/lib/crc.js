/**
 * Created by lmw on 16/04/2014.
 */


function CRC32 (polynomial) {
    // if polynomial not supplied then default to IEEE CRC32 implementation
    if (polynomial === undefined)
        polynomial = 0xedb88320;

    this.table = this.generateTable(polynomial);
    this.begin();
}

CRC32.prototype.generateTable = function (polynomial) {
    var table = [];

    for (var i = 0; i < 256; i++) {
        var n = i;
        for (var j = 8; j > 0; j--) {
            if ((n & 1) == 1) {
                n = (n >>> 1) ^ polynomial;
            } else {
                n = n >>> 1;
            }
        }
        table[i] = n;
    }
    return table;
};

CRC32.prototype.begin = function () {
    this.crc = 0xffffffff;
};

CRC32.prototype.end = function () {
    this.crc = ~this.crc;
    return this.crc < 0 ? 0xffffffff + this.crc + 1 : this.crc;
};

CRC32.prototype.addByte = function(byte){
    this.crc = (this.crc >>> 8) ^ this.table[(byte & 0xff) ^ (this.crc & 0xff)];
};

CRC32.prototype.addString = function (str) {
    for (var i = 0; i < str.length; i++)
        this.addByte(str.charCodeAt(i));
};