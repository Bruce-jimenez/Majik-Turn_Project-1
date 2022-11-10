const arena = () => {
    let casterScore = 0;
    let golemScore = 0;
    let rounds = 0;

const fightStart = () => {
    const electricSpell = document.getElementsByClassName(".Electricity");
    const voidSpaceSpell = document.getElementsByClassName(".Void/Space");
    const waterSpell = document.getElementsByClassName(".Water");
    const fireSpell = document.getElementsByClassName(".Fire");
    const earthSpell = document.getElementsByClassName(".Earth");
    const casterChoice = [electricSpell, voidSpaceSpell, waterSpell, fireSpell, earthSpell];
    const golemChoice = ["Electricity", "Void/Space", "Water", "Fire", "Earth"]


    casterChoice.forEach(options => {
        options.addEventListener('click',function(){
            
            const roundsLeft = document.getElementsByClassName('.roundsLeft');
            rounds++;;
            roundsLeft.innerText = `Round left till end: ${7-rounds}`;

            const spellCreation = Math.floor(Math.random()*5);       
            const golemSpells = golemChoice[spellCreation];

            victor(this.innerText, golemSpells);

            if(rounds ==7){
                arenaResults(casterChoice, roundsLeft);
            }
        })
    })
}


const victor = (caster, golem) => {

    const result = document.getElementsByClassName('.match-Result');
    const casterScoreBoard = document.getElementsByClassName('.token-Count');
    const golemScoreBoard = document.getElementsByClassName('.Magic-Golem_tokens');
    
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

    const choosenSpell = document.getElementsByClassName('.spellUsed');
    const overallWinner = document.getElementsByClassName('.match-Result');
    const tryAgain = document.getElementsByClassName('.restart');

    casterChoice.forEach(choice =>{
        choice.style.display = "none";
    })

    choosenSpell.innerHTML = 'Game is Finished, Now lets see the results.... ';

    //Here is where a delay functon is going to be placed looking into it more

    roundsLeft.style.display = 'none';

        if(casterScore > golemScore){
            overallWinner.style.fontSize = '3rem';
            overallWinner.innerText = 'Caster has bested the Golem';
            overallWinner.sylt.color = '#0560b5';

            if(casterScore == 7){
                overallWinner.style.fontSize = '3.25rem';
                overallWinner.innerText = 'Caster has flawlessly sweeped the Golem!!!!!';
                overallWinner.sylt.color = '#f24141';
            }
        } 

        else if(casterScore < golemScore){
            overallWinner.style.fontSize = '1.75rem';
            overallWinner.innerText = 'The Golem has defeated the Caster.';
            overallWinner.style.color = '#03022e';
            
            if(golemScore == 7){
                overallWinner.style.fontSize = '2rem';
                overallWinner.innerText = 'The Caster has been Wiped Out.';
                overallWinner.style.color = '#2e0202';
            }
        }

        else{
            overallWinner.style.fontSize = '2.5rem';
            overallWinner.innerText = 'Both the Caster and Golem are Exhausted';
            overallWinner.style.color = '#211d1c';

        }

        tryAgain.innerText = 'Lets try again';
        tryAgain.style.display = 'flex';
        tryAgain.addEventListener('click',() => {
                window.location.reload();
        })

}

        fightStart();


}

                        arena();