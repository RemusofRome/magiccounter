
let hscore = document.getElementById("hscore")
let gscore = document.getElementById("gscore")

let homescore = 0
let guestscore = 0

start()

function start() {
    guestscore = 20
    gscore.textContent = guestscore
    homescore = 20
    hscore.textContent = homescore
}

            function add1() {
                homescore -= 1
                hscore.textContent = homescore
            }

            function add2() {
                homescore -= 2
                hscore.textContent = homescore
                
            }

            function add3() {
                homescore -= 3
                hscore.textContent = homescore
                
            }

            function add5() {
                homescore -= 5
                hscore.textContent = homescore
                
            }

            function add10() {
                homescore -= 10
                hscore.textContent = homescore
                
            }

            function add15() {
                homescore -= 15
                hscore.textContent = homescore
                
            }

        function gadd1() {
            guestscore -= 1
            gscore.textContent = guestscore
            
        }

        function gadd2() {
            guestscore -= 2
            gscore.textContent = guestscore
            
        }

        function gadd3() {
            guestscore -= 3
            gscore.textContent = guestscore
            
        }

        function gadd5() {
            guestscore -= 5
            gscore.textContent = guestscore
            
        }

        function gadd10() {
            guestscore -= 10
            gscore.textContent = guestscore
            
        }

        function gadd15() {
            guestscore -= 15
            gscore.textContent = guestscore
            
        }

function reset() {
    guestscore = 20
    gscore.textContent = guestscore
    homescore = 20
    hscore.textContent = homescore
}

function startbtn2() {
    guestscore = 20
    gscore.textContent = guestscore
    homescore = 20
    hscore.textContent = homescore
}

function startbtn1() {
    guestscore = 60
    gscore.textContent = guestscore
    homescore = 60
    hscore.textContent = homescore
}
