// implement your solution here
function mostFrequent(s) {
 var word = s.toLowerCase().split(/[ (),!.";:-]+/).filter(Boolean).sort();
 return word;
}