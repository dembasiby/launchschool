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
