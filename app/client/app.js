global.startApp = function(container) {
    // console.log("Here is the container:", container);
    var box = document.getElementsByClassName('cell');
    let diamondArr = [];
    let score = 64;


    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('click', flipSide);
        // box[i].classList.add('unknown');
    }

    getDiamondArray();


    function getDiamondArray() {
        var totalDiamond = 8;


        for (var i = 0; i < totalDiamond; i++) {
            var diamond = Math.floor(Math.random() * 64);
            if (diamondArr.indexOf(diamond) == -1) {
                diamondArr.push('sq-'+diamond);
                continue;
            }

        }
    }

    function flipSide(e) {
        var touched = e.target.id;
        if(diamondArr.indexOf(touched) != -1){

            document.getElementById(touched).classList.add('diamond');
        }
        else{
            score = score-1;
            document.getElementById('score').innerHTML = score;
        }
        document.getElementById(touched).classList.remove('unknown');
        document.getElementById(touched).removeEventListener('click',flipSide);

    }


}
