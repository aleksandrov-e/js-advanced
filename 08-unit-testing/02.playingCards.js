
function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
    if (!validFaces.includes(face)) {
        throw new Error('Invalid card face!')
    }
    if (!Object.keys(suits).includes(suit)) {
        throw new Error('Invalid card suit!')
    }
 
    return {
        face,
        suit,
        toString(){
            return `${this.face}${suits[suit]}`
        }
    }
}

const newCard = createCard('2','S');
console.log(newCard.toString()); // 2♠
