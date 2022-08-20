
    function addAttemp(text) {
        let newAtemped = document.createElement('p');
        newAtemped.innerHTML = `You Guessed <span> ${text} </span>`;
        let submitedAtempts = document.querySelector('.submitedAtempts');
        submitedAtempts.appendChild(newAtemped);
    }

    function congragulation(text) {
        let attemptsResult = document.querySelector('.attemptsResult');
        attemptsResult.innerHTML = `You Guseed this number in <b>${text}</b> Attempts`;
    }

    let firstPage = document.querySelector('.firstPage');
    let secondPage = document.querySelector('.secondPage');
    let thirdPage = document.querySelector('.thirdPage');
    let spanTag = document.createElement("span");

    let Startbutton = document.querySelector('.start');
    Startbutton.addEventListener('click', GuessNumber);




    function GuessNumber() {
        firstPage.classList.remove('active');
        const random_number = Math.floor(Math.random() * 100);
        let numberOfAttempts = 0;

        document.querySelector('.secondPage').classList.add('active')
        let liteButton = document.querySelector('.liteButton');


        liteButton.addEventListener('click', () => {
            let submitedText = document.querySelector('input').value;
            //modifying Sbmited Text
            if (submitedText < 10) {
                submitedText = `0${submitedText}`;
            }

            document.querySelector('input').value = null;

            let secondPage = document.querySelector('.secondPage');
            let thirdPage = document.querySelector('.thirdPage');

            let spanTag = document.createElement("span");

            // input checking
            if (!submitedText.match(/^[0-9]{2}$/)) {

                let warning = document.querySelector('.warning');
                warning.innerHTML = 'Plese Enter Numbers Only!';
                return false;
            }
            numberOfAttempts++;
            // 

            if (submitedText == random_number) {
                secondPage.classList.remove('active');
                thirdPage.classList.add('active');

                congragulation(numberOfAttempts);

                thirdPage.querySelector('.startAgain').addEventListener('click', () => {
                    window.location.reload(true);
                });
            }
            else if (submitedText > random_number) {
                let warning = document.querySelector('.warning');
                warning.innerHTML = `Please! Enter <b>Smaller</b> Number than <span>${submitedText}</span>`;

                addAttemp(submitedText);

            } else {
                let warning = document.querySelector('.warning');
                warning.innerHTML = `Please! Enter <b>Bigger</b> Number than <span>${submitedText}</span>`;

                addAttemp(submitedText);
            }
        })
    }