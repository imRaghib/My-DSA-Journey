const nemo = ["nemo"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}
// findNemo(nemo);

// 017

//// Log all paris of array
const boxes = [1, 2, 3, 4, 5];

for (let i = 0; i < boxes.length; i++) {
  for (let j = 0; j < boxes.length; j++) {
    console.log([boxes[i], boxes[j]]);
  }
}
