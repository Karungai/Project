document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('keyup', function(event) {
        const searchText = event.target.value.toLowerCase();
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            if (section.innerText.toLowerCase().includes(searchText)) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
