function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let elements = document.querySelectorAll('tbody tr');
        let input = document.getElementById('searchField');

        for (const element of elements) {
            if (
                element.textContent.toLowerCase().includes(input.value.toLowerCase())
                && input.value !== ''
            ) {
                element.classList.add('select');
            } else {
                element.classList.remove('select');
            }
        }

        input.value = '';
    }
}