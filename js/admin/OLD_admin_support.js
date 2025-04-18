function selectAll(selectAll)  {
    const checkboxes 
        = document.getElementsByName("board");
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
    }