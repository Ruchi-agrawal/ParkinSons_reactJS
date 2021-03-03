

function resizeGridItem(item) {
    let grid = document.getElementsByClassName("cstmGrid")[0];
    let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((item.querySelector('.msgSec').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}
export function resizeAllGridItems(className) {

    setTimeout(function () {
        let allItems = document.getElementsByClassName(className);
        for (let x = 0; x < allItems.length; x++) {
            resizeGridItem(allItems[x]);
        }
    }, 1000);
}
function resizeInstance(instance) {
    let item = instance.elements[0];
    resizeGridItem(item);
}

