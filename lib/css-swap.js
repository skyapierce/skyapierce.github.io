
window.onload = () => {

    const appearanceButton = document.getElementById('apperanceAction');

    appearanceButton.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        disableStylesheet(defaults);
        enableStylesheet(basic);
    }
    
    const appearanceButton2 = document.getElementById('apperanceFix');
    
    appearanceButton2.onclick = () => {
        const defaults = document.getElementById('default');
        const basic = document.getElementById('basic');

        disableStylesheet(basic);
        enableStylesheet(defaults);
    }
}

function enableStylesheet (node) {
    node.rel = 'stylesheet';
    }
    
function disableStylesheet (node) {
    node.rel = 'alternate stylesheet';
}                