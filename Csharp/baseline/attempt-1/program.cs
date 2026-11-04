//Console app: read numbers until a blank line, store in a List<int>, print count, sum, average, max. Then add a Student class with 2 properties and one method. Write down where you got stuck.

int count = 0;
int sum = 0;
int max = 0;
int average = 0;



list<int> numbers = new List<int>();

while(true){
		string input = console.Readline

		if (input == "")
			break
		}

		int num = 0;

		if (int.TryParse(input, out num))
	{
	// needed some help here to put the number into the list

		numbers.Add(num);

			count = count + 1;
	}
// needed help with the for loop syntax
for(int i = 0; i < numbers.count; i++)
	{
	int current = numbers[i]
	sum = sum + current;

		if (current > max)
		{
			max = current
		}
	}

double average = (double) sum / count;


Console.WriteLine($"Count: {count}");
Console.WriteLine($"Sum: {sum}");
Console.WriteLine($"Average: {average}");
Console.WriteLine($"Max: {max}");
