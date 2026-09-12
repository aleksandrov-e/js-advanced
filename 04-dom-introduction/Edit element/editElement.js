function editElement(elements, match, replacer) {
    while (elements.innerHTML.includes(match)) {
        elements.innerHTML = elements.innerHTML.replace(match, replacer);
    }
   
}