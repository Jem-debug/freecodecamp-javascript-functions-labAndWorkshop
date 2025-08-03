function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

//test
confirmEnding("Bastian", "n")
