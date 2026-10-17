
function listProcessor2(commands) {
    let collection = [];

    const processor = {
        add(string) {
            collection.push(string);
        },

        remove(string) {
            collection = collection.filter(item => item !== string);
        },

        print() {
            console.log(collection.join(','));
        }
    };

    for (const command of commands) {
        const [action, value] = command.split(' ');

        processor[action](value);
    }
}

listProcessor2(['add hello', 'add again', 'remove hello', 'add again', 'print']);