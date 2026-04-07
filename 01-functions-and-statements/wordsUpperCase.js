function wordsUppercase(text) {

    let pattern = /[\w]+/g;
    let matches = text.matchAll(pattern);

    let words = [];

    for (const match of matches) {
        words.push(match[0].toUpperCase());
    }
    console.log(words.join(', '));
}
wordsUppercase('Hi, how are you?');