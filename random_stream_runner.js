/*
random_stream_runner.js

reads a unique random integer from min to max values from the random stream
and prints to stdout when a key is pressed

NOTE: this file is only intended to demonstrate the stream defined in random-stream.js

@param {int} min
@param {int} max
@output {int}
 */
var RandomStream = require('./random-stream');

//init the RandomStream with the min and max values given as command line args
var random = RandomStream(parseInt(process.argv[2]), parseInt(process.argv[3]));

console.log('Press any key to print next chunk of stream or CTRL + C to exit');

//set stdin to raw so as we can monitor inputs
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding( 'utf8' );

process.stdin.on('data', function (key) {
    var chunk = random.read();

    //kill process if the stream has no more unique values or ctrl+c has been pressed
    if (chunk == null || key === '\u0003') {
        process.exit();
    }

    //output the value from the stream to stdout
    console.log(chunk)
});
