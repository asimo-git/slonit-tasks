function myFilter(array, callback) {
  if (!Array.isArray(array) || typeof callback !== "function") {
    throw new TypeError(
      "The function arguments must be an array and a function"
    );
  }

  const result = [];

  array.forEach((item) => {
    if (callback(item)) result.push(item);
  });

  return result;
}
