const spacing = document.getElementsByName('spacing')[0];
const blurr = document.getElementsByName('blur')[0];
const color = document.getElementsByName('base')[0];

spacing.addEventListener('mousemove', () => {
    const spacingVal=spacing.value;
    
    document.documentElement.style.setProperty('--spacing', `${spacingVal}`+"px");
});

blurr.addEventListener('mousemove', () => {
    const blurVal=blurr.value;
    
    document.documentElement.style.setProperty('--blur-value', `${blurVal}`+"px");
});

color.addEventListener('change', () => {
    const colorVal=color.value;
    

    document.documentElement.style.setProperty('--bg-color', `${colorVal}`);
    console.log("#"+`${colorVal}`)
});