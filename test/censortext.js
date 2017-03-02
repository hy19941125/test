function censor(inStr)
{
	for(idx in censoredWords)
	{
		inStr = inStr.replace(censoredWords[idx],"****");
	}
	for(idx in customCensoredWords)
	{
		inStr = inStr.replace(customCensoredWords[idx],"****");
	}
	return inStr;
}

function addCensoedWord(word)
{
	customCensoredWord.push(word);
}

function getCensoredWords()
{
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoedWords = addCensoedWord;
exports.getCensoredWords = getCensoredWords;