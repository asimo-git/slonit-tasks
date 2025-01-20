function sumNumericFields(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}

function getSortedNumericFields(obj) {
  const numericFields = Object.keys(obj).filter(
    (key) => typeof obj[key] === "number"
  );
  return numericFields.sort((a, b) => obj[b] - obj[a]);
}
