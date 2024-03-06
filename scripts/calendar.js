document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('update-calendar');
    const reverseButton = document.getElementById('reverse-button');

    // Initial grid items with specific content
    const initialGridItems = [
        createGridItem('First Meetings','pages/updates.html#update-start', ['date-calendar', 'darken']),
        createGridItem('04/12/2023', 'pages/updates.html#update1', ['date-calendar', 'darken']),
        createGridItem('11/12/2023', 'pages/updates.html#update2', ['date-calendar', 'darken']),
        createGridItem('18/12/2023', 'pages/updates.html#update3', ['date-calendar', 'darken']),
        createGridItem('26/02/2024', 'pages/updates.html#update4', ['date-calendar', 'darken']),
        createGridItem('04/03/2024', 'pages/updates.html#update5', ['date-calendar', 'darken']),
    ];

    // Append initial grid items to the grid container
    initialGridItems.forEach(item => gridContainer.appendChild(item));

    // Set initial button text
    reverseButton.textContent = 'Oldest to Newest';

    reverseButton.addEventListener('click', function () {
        const gridItems = Array.from(document.querySelectorAll('.date-calendar')).reverse();

        gridContainer.innerHTML = '';
        gridItems.forEach(item => gridContainer.appendChild(item));

        // Toggle button text
        reverseButton.textContent = reverseButton.textContent === 'Oldest to Newest' ? 'Newest to Oldest' : 'Oldest to Newest';
    });

    function createGridItem(content, link, classNames) {
        const gridItem = document.createElement(link ? 'a' : 'div');
        gridItem.classList.add(...classNames);
        
        if (link) {
            gridItem.href = link;
        }
        gridItem.textContent = content;
        return gridItem;
    }
});
