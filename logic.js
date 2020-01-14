function mouseOver(object){

    const element = object;
    const middle = element.querySelector('.middle');
    const img = element.querySelector('.logo-png');

    img.style.opacity = '0.2';
    middle.style.opacity = '1';
}

function mouseOut(object){

    const element = object;
    const middle = element.querySelector('.middle');
    const img = element.querySelector('.logo-png');

    img.style.opacity = '1';
    middle.style.opacity = '0';
}