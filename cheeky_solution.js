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

function cheekyRandomSort(min, max) {
    /*
     cheekyRandomSort()
     Due to the constraints of the challenge:

     "Please write a program that generates a list of 10,000 numbers in random order each time it is run.
      Each number in the list must be unique and be between 1 and 10,000 (inclusive)."

     I decided to take the wording of 'random order' in addition to the size of the array being directly
     related to the max size of of number to be generated and created Cheeky Random Sort.

     The sort take two values max and min which determine both the size of the list and the max and min size of
     integer that can be found in the final list. The sort then will randomly select an offset the indices of an
     ordered list from min to max.

     [1,2,3,4,5] with offset two becomes [4,5,1,2,3]

     NOTE: This file is intended to be a bit of a jab :P and not my final solution.

     @param {int} min
     @param {int} max
     @output {array} offset_array
     */

    var offset_array = [];
    var length = max - min;
    var offset = randomIntInc(0, length);
    for (var i = 0; i <= length; i++) {
        if (i + offset > length) {
            offset_array[i + offset - length - 1] = i + min;
        }
        else {
            offset_array[i + offset] = i + min;
        }

    }

    return offset_array

}

console.log(cheekyRandomSort(parseInt(process.argv[2]), parseInt(process.argv[3])));