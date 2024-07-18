function addRow() {
    const rowsContainer = document.getElementById('rowsContainer');
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('grid-input');

    const input = document.createElement('input');
    input.type = 'number';
    input.value = 1;
    
    const select = document.createElement('select');
    const optionFr = document.createElement('option');
    optionFr.value = 'fr';
    optionFr.textContent = 'fr';
    const optionPx = document.createElement('option');
    optionPx.value = 'px';
    optionPx.textContent = 'px';
    const optionPercent = document.createElement('option');
    optionPercent.value = '%';
    optionPercent.textContent = '%';
    select.appendChild(optionFr);
    select.appendChild(optionPx);
    select.appendChild(optionPercent);

    const removeButton = document.createElement('button');
    removeButton.textContent = '✖';
    removeButton.onclick = () => rowsContainer.removeChild(rowDiv);

    rowDiv.appendChild(input);
    rowDiv.appendChild(select);
    rowDiv.appendChild(removeButton);

    rowsContainer.appendChild(rowDiv);
}

function addColumn() {
    const columnsContainer = document.getElementById('columnsContainer');
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('grid-input');

    const input = document.createElement('input');
    input.type = 'number';
    input.value = 1;
    
    const select = document.createElement('select');
    const optionFr = document.createElement('option');
    optionFr.value = 'fr';
    optionFr.textContent = 'fr';
    const optionPx = document.createElement('option');
    optionPx.value = 'px';
    optionPx.textContent = 'px';
    const optionPercent = document.createElement('option');
    optionPercent.value = '%';
    optionPercent.textContent = '%';
    select.appendChild(optionFr);
    select.appendChild(optionPx);
    select.appendChild(optionPercent);

    const removeButton = document.createElement('button');
    removeButton.textContent = '✖';
    removeButton.onclick = () => columnsContainer.removeChild(columnDiv);

    columnDiv.appendChild(input);
    columnDiv.appendChild(select);
    columnDiv.appendChild(removeButton);

    columnsContainer.appendChild(columnDiv);
}

function updateGrid() {
    const rowsContainer = document.getElementById('rowsContainer');
    const columnsContainer = document.getElementById('columnsContainer');
    
    const rows = Array.from(rowsContainer.getElementsByClassName('grid-input')).map(rowDiv => {
        const input = rowDiv.querySelector('input').value;
        const unit = rowDiv.querySelector('select').value;
        return input + unit;
    });
    
    const columns = Array.from(columnsContainer.getElementsByClassName('grid-input')).map(columnDiv => {
        const input = columnDiv.querySelector('input').value;
        const unit = columnDiv.querySelector('select').value;
        return input + unit;
    });

    const rowGap = document.getElementById('rowGap').value + document.getElementById('rowGapUnit').value;
    const columnGap = document.getElementById('columnGap').value + document.getElementById('columnGapUnit').value;

    const alignItems = document.getElementById('alignItems').value;
    const justifyItems = document.getElementById('justifyItems').value;
    
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Clear previous grid items
    
    // Set grid container styles
    gridContainer.style.gridTemplateColumns = columns.join(' ');
    gridContainer.style.gridTemplateRows = rows.join(' ');
    gridContainer.style.rowGap = rowGap;
    gridContainer.style.columnGap = columnGap;
    gridContainer.style.alignItems = alignItems;
    gridContainer.style.justifyItems = justifyItems;

    const rowCount = rows.length;
    const columnCount = columns.length;
    
    // Create grid items dynamically
    for (let i = 0; i < rowCount * columnCount; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = i + 1; // Example content
        gridContainer.appendChild(gridItem);
    }

    // Generate CSS code
    const cssCode = `
.grid-container {
    display: grid;
    grid-template-columns: ${columns.join(' ')};
    grid-template-rows: ${rows.join(' ')};
    row-gap: ${rowGap};
    column-gap: ${columnGap};
    align-items: ${alignItems};
    justify-items: ${justifyItems};
}
`;
    document.getElementById('cssCode').textContent = cssCode;
}

// Initialize with default rows and columns
document.addEventListener('DOMContentLoaded', () => {
    addRow();
    addRow();
    addRow();
    addColumn();
    addColumn();
    addColumn();
});
