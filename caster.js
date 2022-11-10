const arena = () => {
    let casterScore = 0;
    let golemScore = 0;
    let rounds = 0;

const fightStart = () => {
    const electricSpell = document.querySelector(".Electricity");
    const voidSpaceSpell = document.querySelector(".Void/Space");
    const waterSpell = document.querySelector(".Water");
    const fireSpell = document.querySelector(".Fire");
    const earthSpell = document.querySelector(".Earth");
    const casterChoice = [electricSpell, voidSpaceSpell, waterSpell, fireSpell, earthSpell];
    const golemChoice = ["Electricity", "Void/Space", "Water", "Fire", "Earth"]


    casterChoice.forEach(choice => {
        choice.addEventListener('click',function(){
            
            const roundsLeft = document.querySelector('.roundsLeft');
            rounds++;;
            roundsLeft.innerHTML = `Round left till end: ${7-rounds}`;

            const spellCreation = Math.floor(Math.random()*5);       
            const golemSpells = golemChoice[spellCreation];

            victor(this.innerHTML, golemSpells);

            if(rounds ==7){
                 matchEnd(casterChoice, roundsLeft);
            }
        })
    })
}


const victor = (caster, golem) => {

    const result = document.querySelector('.match-Result');
    const casterScoreBoard = document.querySelector('.token-Count');
    const golemScoreBoard = document.querySelector('.Magic-Golem_tokens');
    
    caster = caster.toLowerCase();
    golem = golem.toLowerCase();

    if(caster === golem){
        result.textContent = "Match Tied"
        golemScore++;
        golemScoreBoard.textContent = golemScore;
        casterScore++;
        casterScoreBoard.textContent = casterScore;
    }


    else if(caster == 'Electricity'){
        if(golem == 'Fire' || golem == 'Earth'){
            result.textContent = "Golem Wins";
            golemScore++;
            golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                casterScoreBoard.textContent = casterScore;
            }
        }


    else if(caster == 'Void/Space'){
        if(golem == 'Earth' || golem == 'Electricity'){
                result.textContent = "Golem Wins";
                golemScore++;
                golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                casterScoreBoard.textContent = casterScore;
            }
        }


    else if(caster == 'Water'){
        if(golem == 'Electricity' || golem == 'Void/Space'){
                    result.textContent = "Golem Wins";
                    golemScore++;
                    golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                casterScoreBoard.textContent = casterScore;
                }
        }


    else if(caster == 'Fire'){
        if(golem == 'Water' || golem == 'Void/Space'){
                result.textContent = "Golem Wins";
                golemScore++;
                golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                casterScoreBoard.textContent = casterScore;
                }
        }


    else if(caster == 'Earth'){
        if(golem == 'Water' || golem == 'Fire'){
                result.textContent = "Golem Wins";
                golemScore++;
                golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                casterScoreBoard.textContent = casterScore;
                }
        }
}

const arenaResults = (casterChoice, roundsLeft) => {

    const choosenSpell = document.querySelector('.spellUsed');
    const overallWinner = document.querySelector('.match-Result');
    const tryAgain = document.querySelector('.restart');

    casterChoice.forEach(choice =>{
        choice.style.display = "none";
    })

    chooseMove.innerHTML = 'Game is Finished, Now lets see the results.... ';

    //Here is where a delay functon is going to be placed looking into it more

    roundsLeft.style.display = 'none';

        if(casterScore > golemScore){
            result.style.fontSize = '3rem';
            result.innerHTML = 'Caster has bested the Golem';
            result.sylt.color = '#0560b5';

            if(casterScore == 7){
                result.style.fontSize = '3.25rem';
                result.innerHTML = 'Caster has flawlessly sweeped the Golem!!!!!';
                result.sylt.color = '#f24141';
            }
        } 

        else if(casterScore < golemScore){
            result.style.fontSize = '1.75rem';
            result.innerHTML = 'The Golem has defeated the Caster.';
            result.style.color = '#03022e';
            
            if(golemScore == 7){
                result.style.fontSize = '2rem';
                result.innerHTML = 'The Caster has been Wiped Out.';
                result.style.color = '#2e0202';
            }
        }

        else{
            result.style.fontSize = '2.5rem';
            result.innerHTML = 'Both the Caster and Golem are Exhausted';
            result.style.color = '#211d1c';

        }

        restartBtn.innerHTML = 'Lets try again';
        restartBtn.style.display = 'flex';
        restartBtn.addEventListener('click',() => {
                window.location.reload();
        })

}

        fightStart();


}

                        arena();