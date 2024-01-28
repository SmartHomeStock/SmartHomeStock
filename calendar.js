document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    const reverseButton = document.getElementById('reverse-button');

    // Initial grid items with specific content
    const initialGridItems = [
        createGridItem('04/12/2023', '#', ['date-calendar', 'darken']),
        createGridItem('11/12/2023', '#', ['date-calendar', 'darken']),
        createGridItem('18/12/2023', '#', ['date-calendar', 'darken']),
        createGridItem('25/12/2023', null, ['date-calendar', 'darken']),
        createGridItem('01/01/2024', null, ['date-calendar', 'darken']),
        createGridItem('08/01/2024', '#', ['date-calendar', 'darken'])
    ];

    // Append initial grid items to the grid container
    initialGridItems.forEach(item => gridContainer.appendChild(item));

    // Set initial button text
    reverseButton.textContent = 'Oldest to Newest';

    reverseButton.addEventListener('click', function () {
        const gridItems = Array.from(document.querySelectorAll('.grid-item')).reverse();

        gridContainer.innerHTML = '';
        gridItems.forEach(item => gridContainer.appendChild(item));

        // Toggle button text
        reverseButton.textContent = reverseButton.textContent === 'Oldest to Newest' ? 'Newest to Oldest' : 'Oldest to Newest';
    });

    function createGridItem(content, link, classNames) {
        const gridItem = document.createElement(link ? 'a' : 'div');
        gridItem.classList.add('grid-item', ...classNames);
        
        if (link) {
            gridItem.href = link;
        }
        gridItem.textContent = content;
        return gridItem;
    }
});
