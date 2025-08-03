const truncateString = (str, num) => {
  if (str.length <= num){
    return str
  }else {
    const strlength = str.length
    const strToReplace = str.slice(num, strlength)
    const strTransform = str.replace(strToReplace, "...")
    return strTransform
  }
}

// test
truncateString("A-tisket a-tasket A green and yellow basket", 8)
