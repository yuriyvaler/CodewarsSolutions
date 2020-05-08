/*
 text = '          I
                will
                 get
          everything
                   I
                want'
 */
function wordsInColumn(text){
    text= text.split(' ');
    let long = text.reduce((a, b) => a.length > b.length ? a : b, 0);
    let s = '';
    for (let i = 0; i < text.length; i++) {
        s += " ".repeat(long.length - text[i].length) + text[i];
        s += (i == text.length - 1)? "": "\n";
    }
    return s;
}