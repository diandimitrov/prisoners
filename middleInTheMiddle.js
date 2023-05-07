function findNumber(prisonerId, boxes) {
    let numTries = 0;
    let currentBox = Math.floor(Math.random() * boxes.length);
    while (numTries < 50) {
      numTries++;
      if (currentBox === prisonerId - 1) {
        return true;
      }
      currentBox = boxes[currentBox];
    }
    return false;
  }
  
  function runSimulation() {
    let boxes = Array.from({ length: 100 }, (_, i) => i + 1);
    boxes = boxes.sort(() => Math.random() - 0.5);
    let numSuccesses = 0;
    for (let i = 1; i <= 100; i++) {
      if (findNumber(i, boxes)) {
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