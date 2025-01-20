function capitalizeFirstLetter(str) {
  if (typeof str !== "string") {
    throw new Error("The argument must be a string");
  }

  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function getTrimmedString(str, limit) {
  if (typeof str !== "string" || typeof limit !== "number") {
    throw new Error("The arguments must be a string and a number");
  }

  if (str.length <= limit) return str;

  const trimmedStr = str.slice(0, limit);
  const separators = [" ", "!", "?", ".", ",", ";", ":"];
  let separationIndex = limit;

  for (let i = trimmedStr.length - 1; i >= 0; i--) {
    if (separators.includes(trimmedStr[i])) {
      separationIndex = i;
      break;
    }
  }

  return `${trimmedStr.slice(0, separationIndex)}...`;
}

function isSubstring(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new Error("The arguments must be strings");
  }

  const lowCaseStr1 = str1.toLowerCase();
  const lowCaseStr2 = str2.toLowerCase();

  if (lowCaseStr1.includes(lowCaseStr2) || lowCaseStr2.includes(lowCaseStr1)) {
    return true;
  }
  return false;
}
