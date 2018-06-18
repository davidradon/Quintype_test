global.startApp = function(container) {
    // console.log("Here is the container:", container);
    var box = document.getElementsByClassName('cell');
    let diamondArr = [];
    let score = 64;
    let numberArr = [];
    let foundDiamonds = [];

    for(let i=0;i<64;i++){
        numberArr.push(i);
    }

    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('click', flipSide);
        // box[i].classList.add('unknown');
    }

    getDiamondArray();


    function getDiamondArray() {
        var totalDiamond = 8;

            for (let i = 0,maxTotal=63 ; i < totalDiamond; i++,maxTotal--) {
                var diamond = Math.floor(Math.random() * maxTotal)+1;
                diamondArr.push('sq-'+ numberArr[diamond]);
                numberArr.splice(diamond,1);

            }

        console.log(diamondArr);
    }

    function flipSide(e) {
        var touched = e.target.id;

        if(diamondArr.indexOf(touched) != -1){

            document.getElementById(touched).classList.add('diamond');
            foundDiamonds.push(touched);
        }
        else{
            score = score-1;
            document.getElementById('score').innerHTML = score;
        }
        document.getElementById(touched).classList.remove('unknown');
        document.getElementById(touched).removeEventListener('click',flipSide);
        console.log(foundDiamonds.length);
        if(foundDiamonds.length == 8){
            document.getElementById('message').innerHTML = "You've found all the diamonds!!"

        }

    }


}
