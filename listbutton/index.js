window.onload = () => {
    const userInput = document.getElementById('list-data');
    const setTextButton = document.getElementById('set-text');
    const listButton = document.getElementById('add-to-list');
    
 setTextButton.onclick = () => {
        userInput.value ='List Item';
    }

listButton.onclick = () => {
    const myList = document.getElementById('my-list');
    elfCode.appendToList(myList, userInput.value);
}
} 