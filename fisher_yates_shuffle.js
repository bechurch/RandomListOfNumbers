function randomIntInc (low, high) {
    /*
     randomIntInc()
     returns a random integer between {low} and {high} inclusive

     @param {int} low
     @param {int} high
     @output {int}
     */
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function swapIndices(array, i, j) {
    /*
     swapIndices()
     swaps the values at array[i] and array[j]

     @param {int} i
     @param {int} j
     @output {array}
     */
    var hold = array[i];
    array[i] = array[j];
    array[j] = hold;
    return array
}

function orderedIntListGenerator(min, max){
    /*
     orderedIntListGenerator()
     creates a ascending list of values from min to max inclusive

     @param {int} min
     @param {int} max
     @output {array}
     */

    var ordered_array = [];
    var length = max - min;
    for (var i = 0; i <= length; i++) {
        ordered_array[i] = i + min;
    }
    return ordered_array
}

function fisherYatesShuffle(array){

    /*
     fisherYatesShuffle()
     takes an array and randomly shuffles the elements based on Durstenfelds implementation of the
     Fisher-Yates Shuffle (http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm)

     The algorithm starts at the end of the array, randomly selects an index between its current index
     and the start of the array then swaps the values between it's current index and the random index.

     Time Complexity: O(n) as it's run time is linearly related to size of array due to one iteration
     Space Complexity: O(n) as it's space is linearly related to size of array due to no additional data structures needed

     @param {aray} array
     @output {array} array
     */

    for (var i = array.length - 1; i > 0; i--) {
        var random_int = randomIntInc(0, i);
        array = swapIndices(array, i, random_int);
    }
    return array
}

function randomListGenerator(min, max) {
    /*
     randomListGenerator()
     creates a random list of values from min to max inclusive of size min - max

     @param {int} min
     @param {int} max
     @output {array}
     */
    return fisherYatesShuffle(orderedIntListGenerator(min, max));
}

//min and max values come from command line arguments
console.log(randomListGenerator(parseInt(process.argv[2]), parseInt(process.argv[3])));