function isDerangement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return false;
    }
  }
  return true;
}

function generateDerangement(n) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let derangement = arr.slice();
  let numSwaps = Math.floor(Math.random() * n);
  for (let i = 0; i < numSwaps; i++) {
    let idx1 = Math.floor(Math.random() * n);
    let idx2 = Math.floor(Math.random() * n);
    [derangement[idx1], derangement[idx2]] = [derangement[idx2], derangement[idx1]];
  }
  if (isDerangement(arr, derangement)) {
    return derangement;
  } else {
    return generateDerangement(n);
  }
}

function runSimulation() {
  let boxes = Array.from({ length: 100 }, (_, i) => i + 1);
  let derangement1 = generateDerangement(50);
  let derangement2 = generateDerangement(50);
  let shuffledBoxes = [...derangement1, ...derangement2].map((idx) => boxes[idx - 1]);
  let numSuccesses = 0;
  for (let i = 1; i <= 100; i++) {
    if (shuffledBoxes[i - 1] === i) {
      numSuccesses++;
    }
  }
  return numSuccesses === 100;
}

const numRuns = 1000;
let numSuccesses = 0;
for (let i = 0; i < numRuns; i++) {
  if (runSimulation()) {
    numSuccesses++;
  }
}
const successRate = numSuccesses / numRuns;

console.log(`Success rate over ${numRuns} runs: ${successRate}`);
