document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('calendar-container');
    const reverseButton = document.getElementById('reverse-button');

    // Initial grid items with specific content
    const initialGridItems = [
        createGridItem('First Meetings', 'updates.html#update-start', ['date-calendar', 'darken']),
        createGridItem('04/12/2023', 'updates.html#update1', ['date-calendar', 'darken']),
        createGridItem('11/12/2023', 'updates.html#update2', ['date-calendar', 'darken']),
        createGridItem('18/12/2023', 'updates.html#update3', ['date-calendar', 'darken']),
        createGridItem('30/01/2024', 'updates.html#update3', ['date-calendar', 'darken']),
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
