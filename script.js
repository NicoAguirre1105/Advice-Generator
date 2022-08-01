function main() {
    
    function adviceRequest() {
        fetch(API_URL)
            .then(response => response.json())
            .then(element => {
                const adviceElement = element.slip
                adviceId.innerHTML = adviceElement.id
                adviceText.innerHTML = adviceElement.advice
            })
    }

    const API_URL = 'https://api.adviceslip.com/advice',
        adviceId = document.getElementById('adviceId'),
        adviceText = document.getElementById('advice'),
        dice = document.getElementById('diceButton')

    adviceRequest()
    dice.addEventListener('click', adviceRequest)

}

main()