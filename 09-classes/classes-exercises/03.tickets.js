function solve(input, sort) {
    let tickets = [];
    class Ticket {
        constructor(destination, price, status) {
                this.destination = destination,
                this.price = price,
                this.status = status
        }
    }

    for (const line of input) {
        let [destination, price, status] = line.split("|")
        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }
    if (sort === 'destination') {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sort === 'price') {
        tickets.sort((a, b) => a.price - b.price);
    } else if (sort === 'status') {
        tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return tickets;

}
console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));