window.onload = () => {
    const objectLiteralAction = document.getElementById("object-literal-action")

    objectLiteralAction.onclick = () => {
        const objectLiteralDisplay = document.getElementById("object-literal-display")
        console.log(objectLiteral.getName());

        objectLiteralDisplay.textContent = objectLiteral.getName();  
    }

}

const objectLiteral = {
    objectName: "object literal is my name",
    
    getName: function () {
        return this.objectName;
    }
}