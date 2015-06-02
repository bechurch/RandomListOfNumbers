using System;
using System.Collections.Generic;

public class RandomUniqueIntList
{
	public static List<int> RandomList(int min, int max)
	{
		/*
		RandomList()
		returns a list of size {max} - {min} filled with unique random values from {min} to {max}.
		takes advantage of the built-in HashSet data types to determine if a value has been used in O(1) time
		*/

		if(max < min){
			min = max;
		}

		// create an approriately sized array for the values that need to be generated
		int length = max - min + 1;
		List<int> randomList = new List<int>(length);

		Random rand = new Random();
		HashSet<int> uniqueHash = new HashSet<int>();
		
		for (Int32 i = 0; i < length; i++) {
		    int curValue;

		    //find a value thats not in the hash
		    do {
		        curValue = rand.Next(min, max + 1);
		    } while (uniqueHash.Contains(curValue));

		    //add the value to both the List and the Hash
		    randomList.Add(curValue);
		    uniqueHash.Add(curValue);
		}

		return randomList;
	} 

	public static void Main(string[] args)
	{
		
       if( args.Length < 2)
       {
           Console.WriteLine("usage: [path to executable] [min number in list] [max number in list]");
       }
       else
       {
       		//generate the random list and print each element to a new line in stdout
			List<int> randomList = RandomList(Convert.ToInt32(args[0]), Convert.ToInt32(args[1]));
			randomList.ForEach(i => Console.Write("{0}\n", i));
       }
	}
}