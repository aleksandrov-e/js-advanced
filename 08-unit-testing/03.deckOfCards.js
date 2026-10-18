function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (!validFaces.includes(face) || !Object.keys(suits).includes(suit)) {
            throw new Error('Invalid card!');
        }

        return {
            face,
            suit,
            toString() {
                return `${this.face}${suits[this.suit]}`;
            }
        };
    }

    const result = [];

    for (const card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        try {
            const currentCard = createCard(face, suit);
            result.push(currentCard.toString());
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(result.join(' '));
}
printDeckOfCards(['AS', '10H', 'QD']);