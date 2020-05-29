document.getElementById('turnon').addEventListener('click', (event) => {
    const mainIcon = document.getElementById('main-icon');
    const mainIconClassName = mainIcon.className;
    mainIcon.innerHTML = 'sync';
    mainIcon.style.color = '#29B6F6';
    mainIcon.className = mainIcon.className + ' spin';
    const texts = [
        'Gathering information',
        'Analysing your location',
        'Training computer',
        'Tuning radio waves',
        'Cancelling ions',
        'Flattening earth',
    ];
    // begin AI
    texts.forEach((text, index) => {
        setTimeout(() => {
            event.target.innerText = text;
        }, 1000 * index);
    });
    // The marchine is learning here
    setTimeout(() => {
        mainIcon.className = mainIconClassName + ' animated pulse';
        mainIcon.innerHTML = 'enhanced_encryption';
        mainIcon.style.color = '#66BB6A';
        event.target.innerText = 'You are now protected';
    }, texts.length * 1000 + 1000);
});
