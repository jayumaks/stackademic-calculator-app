const calculationValues = document.getElementById("calculationValues");
const calculationsResult = document.getElementById("calculationsResult");
const values = ['1','2','3','4','5','6','7','8','9','0','%','-','+','/','*','=','Backspace','.', 'Delete','AC','DEL'];
let percentageDivisor = 100;

document.addEventListener('keydown', keyBoardEvent);
document.addEventListener('click',clickEvent);

function displayPressedItem() {
    const pressedItem = event.key;     
    calculationValues.textContent += pressedItem;    
}

function displayClickedItem() {
    let clickedItem = event.target.textContent;     
    calculationValues.textContent += clickedItem;    
    console.log(event.target.textContent);
}


    function keyBoardEvent() {
        if ((event.key) ==values[0]) {
            displayPressedItem();
            }
        if ((event.key) ==values[1]) {
            displayPressedItem();
            }
        if ((event.key) ==values[2]) {
            displayPressedItem();
            }
        if ((event.key) ==values[3]) {
            displayPressedItem();
            }
        if ((event.key) ==values[4]) {
            displayPressedItem();
            }
        if ((event.key) ==values[5]) {
            displayPressedItem();
             }
        if ((event.key) ==values[6]) {
            displayPressedItem();
            }
        if ((event.key) ==values[7]) {
            displayPressedItem();
            }
        if ((event.key) ==values[8]) {
            displayPressedItem();
            }
        if ((event.key) ==values[9]) {
            displayPressedItem();
            }
        if ((event.key) ==values[10]) {
            let result = eval(calculationValues.textContent/percentageDivisor);
            calculationValues.textContent += event.key;
            calculationsResult.textContent = result;
            }
        if ((event.key) ==values[11]) {
            displayPressedItem();
            }
        if ((event.key) ==values[12]) {
            displayPressedItem();
            }
        if ((event.key) ==values[13]) {
            displayPressedItem();
            }
        if ((event.key) ==values[14]) {
            displayPressedItem();
            }
        if ((event.key) ==values[15]) {
            let result = eval(calculationValues.textContent);
            calculationValues.textContent += event.key;
            calculationsResult.textContent = result;
            }
        if ((event.key) ==values[16]) {
            let calculationValuesTextContentArray = calculationValues.textContent.split('');
            calculationValuesTextContentArray.pop();
            let calculationValuesTextContentNewArray = calculationValuesTextContentArray.join('');
            calculationValues.textContent = calculationValuesTextContentNewArray;
            }
        if ((event.key) ==values[17]) {
            displayPressedItem();
            }
        if ((event.key) ==values[18]) {
            calculationValues.textContent = null;
            calculationsResult.textContent = null;
            }
    }      

        
    function clickEvent(){        
        if ((event.target.textContent) ==values[0]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[1]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[2]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[3]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[4]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[5]) {
            displayClickedItem();
             }
        if ((event.target.textContent) ==values[6]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[7]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[8]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[9]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[10]) {
            let result = eval(calculationValues.textContent/percentageDivisor);
            calculationValues.textContent += event.target.textContent;
            calculationsResult.textContent = result;
            }
        if ((event.target.textContent) ==values[11]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[12]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[13]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[14]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[15]) {
            let result = eval(calculationValues.textContent);
            calculationValues.textContent += event.target.textContent;
            calculationsResult.textContent = result;
            }
        if ((event.target.textContent) ==values[17]) {
            displayClickedItem();
            }
        if ((event.target.textContent) ==values[19]) {
            calculationValues.textContent = null;
            calculationsResult.textContent = null;
            }
        if ((event.target.textContent) ==values[20]) {
            let calculationValuesTextContentArray = calculationValues.textContent.split('');
            calculationValuesTextContentArray.pop();
            let calculationValuesTextContentNewArray = calculationValuesTextContentArray.join('');
            calculationValues.textContent = calculationValuesTextContentNewArray;
            }
    }      
