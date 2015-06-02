##Challenge Text
*Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).*

The most important success factor is to produce the best solution you can to solve the problem. There are many aspects to consider within that context – efficiency, performance, documentation, etc. Code to perform the algorithm is the minimum requirement. Your deliverable should contain enough to give us a glimpse into your analysis, your approach, your skills, or anything else that will demonstrate your ability as a software developer. We will be looking for a good approach, a glimpse into your thought process, things you can do to impress us, and clean and efficient code. We’re your potential customer for this assignment, show us what you’ve got.
Your deliverable will be something that we can compile and run (to test the results), written in C# or JavaScript (web or node.js) along with whatever explanation of the code/program that you feel is necessary.

##Solution
You previously mentioned *"We’re your potential customer for this assignment, show us what you’ve got."* I interpretted this as you are shopping for a new Software Engineer, sell me on you. An ideal candidate would be able to demonstrate a solid foundation of Algorithms & Data Structures, an expertise in a particular technology, a penchant for clear understandable solutions, the ability to learn fast and deliver faster all with a good attitude. I believe the following 4 solutions demonstrates this all.

###1. fisher_yates_shuffle.js (CS Foundation)
To Run:
* node [path/to/fisher_yates_shuffle.js] [minimum integer to generate] [maximum integer to generate]

####Explanation:
Generates an ordered array with values from min to max then randomly shuffles the elements based on Durstenfelds implementation of the Fisher-Yates Shuffle (http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm) The algorithm starts at the end of the array, randomly selects an index between its current index and the start of the array then swaps the values between it's current index and the random index.

Time Complexity: O(n) as it's run time is linearly related to size of array due to one iteration

Space Complexity: O(n) as it's space is linearly related to size of array due to no additional data structures needed

###2. random_stream_runner.js & random-stream.js (JavaScript Familiarity)
To Run:
* node [path/to/random_stream_runner.js] [minimum integer to generate] [maximum integer to generate]

####Explanation:
This implementation makes use of readable streams which are available in node to solve the problem.
The stream itself is implemented in random-stream.js however I've also coupled a demo file, random_stream_runner.js which when run will read a new value from the random stream on key press and output it to stdout. This is done using a generated array of unique numbers and javascripts splice function.

###3. hashset_example.cs (Demonstration of Learning Fast)
To Run:
* NOTE: this was made using mono, compile and running instructions are for mono on OSX
* mcs [path/to/hashset_example.cs]
* mono [path/to/hashset_example.exe] [minimum integer to generate] [maximum integer to generate]

####Explanation:
I have yet to use C# so I chose to dive into it for the first time by creating a solution to this problem. The implementation is a simple class that generates a random list using the HashSet data structure native to C# to enforce unique values on a O(1) look up basis. Though as the structure gets larger and/or closer to completing it is very possible using random in a while loop will result in poor time performance. The intention of this file however was to demonstrate the use of native C# functions not time complexity.

###4. cheeky_solution.js (fun)
To Run:
* node [path/to/cheeky_solution.js] [minimum integer to generate] [maximum integer to generate]

####Explanation:
"Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive)."

I decided to take the wording of 'random order' in addition to the size of the array being directly related to the max size of of number to be generated and created Cheeky Random Sort.

The sort takes two values max and min which determine both the size of the list and the max and min size of integer that can be found in the final list. The sort then will randomly select an offset the indices of an ordered list from min to max.

[1,2,3,4,5] with offset 2 becomes [4,5,1,2,3]

This file was created to have a bit of fun with the wording of the challenge, purely for a laugh.
