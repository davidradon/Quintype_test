global.startApp = function(container) {
    // console.log("Here is the container:", container);
    let diamondArr = [];
    let score = 56;
    let numberArr = [];
    let foundDiamonds = [];

    for(let i=0;i<64;i++){
        numberArr.push(i);
    }

    var box = document.getElementsByClassName('cell');
    
    //adding click event on boxes
    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('click', flipSide);
        // box[i].classList.add('unknown');
    }

    getDiamondArray();

    // setting diamond position on 8 random squares.
    function getDiamondArray() {
        var totalDiamond = 8;

            for (let i = 0,maxTotal=63 ; i < totalDiamond; i++,maxTotal--) {
                var diamond = Math.floor(Math.random() * maxTotal)+1;
                diamondArr.push('sq-'+ numberArr[diamond]);
                numberArr.splice(diamond,1);
            }

       // console.log(diamondArr);
    }

    function flipSide(e) {
        var touched = e.target.id;

        if(diamondArr.indexOf(touched) != -1){
            document.getElementById(touched).classList.add('diamond');
            foundDiamonds.push(touched);
        }
        else{
            score = score-1;

        }
        document.getElementById(touched).classList.remove('unknown');
        document.getElementById(touched).removeEventListener('click',flipSide);
        //console.log(foundDiamonds.length);
        if(foundDiamonds.length == 8){

            //show score
            document.getElementById('score').innerHTML = "Score: "+score;
            document.getElementById('message').innerHTML = "You've found all the diamonds!!";

            //Restrict clicks after game ends
            var untouched = document.getElementsByClassName('unknown');
            for(let i = 0; i < untouched.length; i++) {
                untouched[i].removeEventListener('click', flipSide);
            }


        }
    }


}
