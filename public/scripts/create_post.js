isVisibleText = false;
isVisibleLocation = false;

function show_text_description(){
    const btnCreate = document.getElementById('btnCreate')
    const text_description = document.getElementById('text_of_post');
    const currentMarginTopOfbtnCreate = parseInt(window.getComputedStyle(btnCreate).marginTop)

    toOperate = 0;
    const marginTopNewAdd = currentMarginTopOfbtnCreate + toOperate;
    const marginTopNewMin = currentMarginTopOfbtnCreate - toOperate;

    if (isVisibleText == false) {
        text_description.classList.add('show');
        btnCreate.style.marginTop = `${marginTopNewAdd}px`;
        isVisibleText = true;
    }
    else{
        text_description.classList.remove('show');
        btnCreate.style.marginTop = `${marginTopNewMin}px`;
        isVisibleText = false;
    }
}

function show_location(){
    const btnCreate = document.getElementById('btnCreate')
    const locationNameTitle = document.getElementById('nameTitleLocation');
    const locationInputField = document.getElementById('inputFieldLocation');
    const currentMarginTopOfbtnCreate = parseInt(window.getComputedStyle(btnCreate).marginTop)

    toOperate = 30;
    const marginTopNewAdd = currentMarginTopOfbtnCreate + toOperate;
    const marginTopNewMin = currentMarginTopOfbtnCreate - toOperate;
    
    if (isVisibleLocation == false) {
        locationNameTitle.classList.add('show');
        locationInputField.classList.add('show');
        btnCreate.style.marginTop = `${marginTopNewAdd}px`;
        isVisibleLocation = true;
    }
    else{
        locationNameTitle.classList.remove('show');
        locationInputField.classList.remove('show');
        btnCreate.style.marginTop = `${marginTopNewMin}px`;
        isVisibleLocation = false;
    }
}