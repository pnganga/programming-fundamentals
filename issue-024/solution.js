// implement your solution here
function mostFrequent(s) {
    var wordList = s.toLowerCase().split(/[ (),!.";:-]+/).filter(Boolean).sort();
    var result = {},
        frequentWord = wordList[0],
        count = 1,
        frequentWordList = [];
    wordList.forEach(function(item) {
        if (item > " ") {
            if (!result[item]) {
                result[item] = 1;
            } else {
                result[item]++;
            }
            if (result[item] >= count) {
                frequentWord = item;
                count = result[item];	
                frequentWordList.push(frequentWord);
            }
        }
    })
    frequentWordList.sort();
    frequentWordList.forEach(function(item) {
        if (result[item] > result[frequentWordList[0]]) {
            frequentWord = item;
        } else {
            frequentWord = frequentWordList[0];
        }
    })
    return frequentWord;
}
