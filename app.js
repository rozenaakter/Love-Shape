var index = 0;

function ChangeColor(){
    var colors = ['#333', '#555', 'green', 'pink', '#ffff', 'red', '#8a2be2'];

    document.getElementsByTagName('body')[0].style.background = colors[index++];

    if( index > colors.length - 1)
    index = 0;
}