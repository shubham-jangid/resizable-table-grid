var tables = document.getElementsByTagName("table");

for (var i = 0; i < tables.length; i++) {
  resizableGrid(tables[i]);
}

function resizableGrid(table) {
  var row = table.getElementsByTagName("tr")[0];
  var colm = row ? row.children : undefined;
  if (!colm) {
    return;
  }

  for (var i = 0; i < colm.length; i++) {
    var div = createDiv(table.offsetHeight);
    // console.log(colm[i]);
    colm[i].appendChild(div);
    colm[i].style.position = "relative";
    setListeners(div);
  }

  function createDiv(height) {
    var div = document.createElement("div");
    // div.style.background = "red";
    div.style.top = 0;
    div.style.right = 0;
    div.style.width = '5px';
    div.style.position = 'absolute';
    div.style.cursor = 'col-resize';
    div.style.userSelect = 'none';
    div.style.height = height + 'px';
    // div.className = 'columnSelector';
    div.className = 'column-selector'
    return div;
  }
  function setListeners(div) {
    var pageX, curCol, nxtCol, curColWidth, nxtColWidth;
    div.addEventListener('mousedown', function (e) {
      curCol = e.target.parentElement;
      nxtCol = curCol.nextElementSibling;
      pageX = e.pageX;
      curColWidth = curCol.offsetWidth
      if (nxtCol)
        nxtColWidth = nxtCol.offsetWidth
    });

    document.addEventListener('mousemove', function (e) {
      if (curCol) {
        var diffX = e.pageX - pageX;

        if (nxtCol)
          nxtCol.style.width = (nxtColWidth - (diffX)) + 'px';

        curCol.style.width = (curColWidth + diffX) + 'px';
      }
    });


    document.addEventListener('mousemove', function (e) {

    })
    document.addEventListener("mouseup", function (e) {
      curCol = undefined;
      nxtCol = undefined;
      pageX = undefined;
      nxtColWidth = undefined;
      curColWidth = undefined;
    });
  }
}
