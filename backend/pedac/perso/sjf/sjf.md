/\*
Go for it Demba

Scheduling is how the processor decides which jobs(processes) get to use the processor and for how long. This can cause a lot of problems. Like a really long process taking the entire CPU and freezing all the other processes. One solution is Shortest Job First(SJF), which today you will be implementing.

SJF works by, well, letting the shortest jobs take the CPU first. If the jobs are the same size then it is First In First Out (FIFO). The idea is that the shorter jobs will finish quicker, so theoretically jobs won't get frozen because of large jobs. (In practice they're frozen because of small jobs).

You will be implementing:

function SJF(jobs, index)
It takes in:

"jobs" a non-empty array of positive integers. They represent the clock-cycles(cc) needed to finish the job.
"index" a positive integer. That represents the job we're interested in.
SJF returns:

A positive integer representing the cc it takes to complete the job at index.
Here's an example:

Understand the p
Input: non=empty arrayof positive integers

Output: an integer that represents a clock-cycles

Data structure
[[3, 0], [20, 1]]

-

Algorithm

- declare a variable `nested` and initialize it to an empty array. It will be a nested array of value and index
- traverse the array (input) and store each value and index in an array. Append that array to `nested
- when the loop is over, sort the nested array based on the first element and the second of the nested array
- declare a variable `result` and initialize to 0
- traverse the nested array from the smallest value until we get to the `index'. At each index , add the value to result
- return result

SJF([3, 10, 20, 1, 2], 0)
at 0cc [3, 10, 20, 1, 2] jobs[3] starts
at 1cc [3, 10, 20, 0, 2] jobs[3] finishes, jobs[4] starts
at 3cc [3, 10, 20, 0, 0] jobs[4] finishes, jobs[0] starts
at 6cc [0, 10, 20, 0, 0] jobs[0] finishes
so:

SJF([3,10,20,1,2], 0) == 6
\*/

```js
function SJF(jobs, index) {
  let jobsAndIndexes = jobs.map((n, i) => [n, i]);

  let result = 0;
  jobsAndIndexes.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i <= jobsAndIndexes.length; i++) {
    result += jobsAndIndexes[i][0];
    if (jobsAndIndexes[i][1] === index) break;
  }

  return result;
}

console.log(SJF([3, 10, 20, 1, 10, 2], 0));
```
