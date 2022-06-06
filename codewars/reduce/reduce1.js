function longestConsec1(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    let res = strarr
    .map((value, index) => (
      strarr.slice(index, index+k).join('')
    ))
    .reduce((longest, current) => current.length > longest.length ? current : longest)
     
    return res; 
}

const longestConsec1 = (a, k) => (k < 1 || a.length < 1 || k > a.length)
// Test for k
  ? ''
// Map Reduce for longest k combo string
  : a.map((_, i, a) => a.slice(i, i + k).join(''))
  .reduce((a, b) => a.length >= b.length ? a : b)

longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) //"ixoyx3452zzzzzzzzzzzz"
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15); //""
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) // "abigailtheta"
