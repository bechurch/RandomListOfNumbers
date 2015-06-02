var ReadableStream = require('stream').Readable;
var util = require('util');

util.inherits(RandomStream, ReadableStream);

function orderedIntListGenerator (min, max){
    /*
    orderedIntListGenerator()
    creates an array in ascending order from {min} to {max} inclusive

    @param {int} min
    @param {int} max
    @output {array} ordered_array
     */
    var ordered_array = [];
    var length = max - min;
    for (var i = 0; i <= length; i++) {
        ordered_array[i] = i + min;
    }
    return ordered_array
}

function RandomStream(low, high) {
    /*
     RandomStream()
     initializes a readable stream that produces unique random numbers from {low} to {high}

     @param {int} min
     @param {int} max
     @output {ReadableStream object}
     */
    if (!(this instanceof RandomStream)) return new RandomStream(low, high);

    ReadableStream.call(this, {

        //ensure that all read calls return 1 object
        objectMode: true
    });

    //generate a ordered array of ints from min to max for which to pull data from
    this._ordered_array = orderedIntListGenerator(low, high)
}

RandomStream.prototype._read = function() {
    /*
     RandomStream().read()
     randomly splices a value from the ordered_list object
     and sends it to whoever invoked the read method

     @output {int}
     */

    //end when ordered array has no more values
    if (this._ordered_array.length < 1) {
        this.push(null);
    } else {

        //choose an index at random for which to splice a value from
        var random_index = getRandomInt(0, this._ordered_array.length);
        var random_val = this._ordered_array.splice(random_index, 1);
        this.push(random_val[0]);
    }
};

function getRandomInt(min, max) {
    /*
     getRandomInt()
     returns a random integer from min to max inclusive

     @param {int} min
     @param {int} max
     @output {int}
     */
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = RandomStream;