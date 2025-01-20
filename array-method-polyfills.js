function mySlice(arr, start = 0, end = arr.length) {
  if (!Array.isArray(arr)) {
    throw new Error("An array must be passed to the function");
  }

  const length = arr.length;
  const validStart =
    start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  const validEnd = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);

  const result = [];

  for (let i = validStart; i < validEnd; i++) {
    result.push(arr[i]);
  }

  return result;
}

function myIndexOf(arr, item, from = 0) {
  if (!Array.isArray(arr)) {
    throw new Error("An array must be passed to the function");
  }

  const length = arr.length;

  let validStart =
    from < 0 ? Math.max(length + from, 0) : Math.min(from, length);

  for (let i = validStart; i < length; i++) {
    if (arr[i] === item) return i;
  }

  return -1;
}

function myIncludes(arr, item, from = 0) {
  if (!Array.isArray(arr)) {
    throw new Error("An array must be passed to the function");
  }

  const length = arr.length;

  let validStart =
    from < 0 ? Math.max(length + from, 0) : Math.min(from, length);

  for (let i = validStart; i < length; i++) {
    if (arr[i] === item) return true;
    if (Number.isNaN(item) && Number.isNaN(arr[i])) return true;
  }

  return false;
}
