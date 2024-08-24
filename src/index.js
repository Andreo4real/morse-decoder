const MORSE_TABLE = {
    'nnn.-':     'a',
    'n-...':   'b',
    'n-.-.':   'c',
    'nn-..':    'd',
    'nnnn.':      'e',
    'n..-.':   'f',
    'nn--.':    'g',
    'n....':   'h',
    'nnn..':     'i',
    'n.---':   'j',
    'nn-.-':    'k',
    'n.-..':   'l',
    'nnn--':     'm',
    'nnn-.':     'n',
    'nn---':    'o',
    'n.--.':   'p',
    'n--.-':   'q',
    'nn.-.':    'r',
    'nn...':    's',
    'nnnn-':      't',
    'nn..-':    'u',
    'n...-':   'v',
    'nn.--':    'w',
    'n-..-':   'x',
    'n-.--':   'y',
    'n--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'ppppp':  ' ',
};

function decode(expr) {
    let currexpr = "";
    let array = [];
    let resarray = [];
    let result = [];
    for (let i = 0; i <= expr.length; ++i) {
        currexpr += expr[i];
        if (currexpr.length == 2) {
            if (currexpr === '00') {
                array.push('n');
            }
            
            if (currexpr === "10") {
                array.push('.');
            }
            
            if (currexpr === '11') {
                array.push('-');
            }
            
            if (currexpr === '**') {
                array.push('p');
            }
            currexpr = '';
        }
        
    }
    
    
    let resexpr = array.join('');
            console.log(resexpr);
    let stroka = ""
    
        for (let i = 0; i <= resexpr.length; ++i) {
        stroka += resexpr[i]

        if (stroka.length === 5) {
            resarray.push(stroka);
            stroka = '';
        }
    }

    for (i = 0; i <= resarray.length; i++) {
        result[i] = MORSE_TABLE[resarray[i]]
    }

    return result.join('');
}

module.exports = {
    decode
}