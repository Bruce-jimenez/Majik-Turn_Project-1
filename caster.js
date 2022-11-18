const arena = () => {
    let casterScore = 0;
    let golemScore = 0;
    let rounds = 0;

const fightStart = () => {
    const electricSpell = document.querySelector(".Electricity")
    const voidSpaceSpell = document.querySelector(".VoidSpace")
    const waterSpell = document.querySelector(".Water")
    const fireSpell = document.querySelector(".Fire")
    const earthSpell = document.querySelector(".Earth")
    const casterChoice = [electricSpell, voidSpaceSpell, waterSpell, fireSpell, earthSpell];
    const golemChoice = ["Electricity", "Void/Space", "Water", "Fire", "Earth"]



        for  ( let i = 0; i < casterChoice.length; i++){
            // console.log(casterChoice)
        casterChoice[i].addEventListener('click', function() {
            console.log(casterChoice[i])
            const roundsLeft = document.querySelector('.roundsleft');
            rounds++;
            roundsLeft.innerText = `Rounds left till end: ${7-rounds}`;

            const spellCreation = Math.floor(Math.random()*4);       
            const golemSpells = golemChoice[spellCreation];

            console.log(golemSpells)

            victor(this.innerText, golemSpells);

            if(rounds == 7){
                arenaResults(casterChoice, roundsLeft);
            }
        })
}
}

fightStart();
const victor = (caster, golem) => {

    const result = document.querySelector('.match-Result');
    const casterScoreBoard = document.querySelector('.token-Count');
    const golemScoreBoard = document.querySelector('.Magic-Golem_tokens');
    

    if(caster == golem){
        result.textContent = "Match Tied"
        golemScore++;
        console.log('Golem + ' + golemScore)
        golemScoreBoard.textContent = golemScore;
        casterScore++;
        console.log('Caster + ' + casterScore)
        casterScoreBoard.textContent = casterScore;
        }
        
    else if(caster == 'Electricity'){
        if(golem == 'Fire' || golem == 'Earth'){
                result.textContent = "Golem Wins";
                golemScore++;
                console.log('Golem + ' + golemScore)
                golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                console.log('Caster + ' + casterScore)
                casterScoreBoard.textContent = casterScore;
            };
        }

/////////////////////////////
    else if(caster == 'Void-Space'){
        if(golem == 'Earth' || golem == 'Electricity'){
                result.textContent = "Golem Wins";
                golemScore++;
                console.log('Golem + ' + golemScore)
                golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                console.log('Caster + ' + casterScore)
                casterScoreBoard.textContent = casterScore;
            };
        }

///////////////////////////////
    else if(caster == 'Water'){
        if(golem == 'Electricity' || golem == 'VoidSpace'){
                result.textContent = "Golem Wins";
                golemScore++;
                console.log('Golem + ' + golemScore)
                golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                console.log('Caster + ' + casterScore)
                casterScoreBoard.textContent = casterScore;
                };
        }


    else if(caster == 'Fire'){
        if(golem == 'Water' || golem == 'VoidSpace'){
                result.textContent = "Golem Wins";
                golemScore++;
                console.log('Golem + ' + golemScore)
                golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                console.log('Caster + ' + casterScore)
                casterScoreBoard.textContent = casterScore;
                };
        }


    else if(caster == 'Earth'){
        if(golem == 'Water' || golem == 'Fire'){
                result.textContent = "Golem Wins";
                golemScore++;
                console.log('Golem + ' + golemScore)
                golemScoreBoard.textContent = golemScore;
            }
            else{
                result.textContent = "Caster Wins";
                casterScore++;
                console.log('Caster + ' + casterScore)
                casterScoreBoard.textContent = casterScore;
                };
        }
}
    

const arenaResults = (casterChoice, roundsLeft) => {

    const choosenSpell = document.querySelector('.spellUsed');
    const overallWinner = document.querySelector('.match-Result');
    const tryAgain = document.querySelector('.restart');

    casterChoice.forEach(choice =>{
        choice.style.display = "none";
    })

    choosenSpell.innerHTML = 'Game is Finished, Now lets see the results.... ';

    //Here is where a delay functon is going to be placed looking into it more

    roundsLeft.style.display = 'none';

        if(casterScore > golemScore){
            overallWinner.style.fontSize = '3rem';
            overallWinner.innerText = 'Caster has bested the Golem';
            overallWinner.style.color = '#0560b5';

            if(casterScore == 7 && golemScore == 0){
                overallWinner.style.fontSize = '3.25rem';
                overallWinner.innerText = 'Caster has flawlessly sweeped the Golem!!!!!';
                overallWinner.style.color = '#f24141';
            }
        } 

        else if(casterScore < golemScore){
            overallWinner.style.fontSize = '1.75rem';
            overallWinner.innerText = 'The Golem has defeated the Caster.';
            overallWinner.style.color = '#03022e';
            
            if(golemScore == 7 && casterScore == 0){
                overallWinner.style.fontSize = '2.5rem';
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

    


}

arena();
// fightStart();