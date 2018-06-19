// Append chosen character to YourCharacter classed heading  
var heroes = {
    rey: { HP: 150, attack: 4, counterAttack: 2 },
    Finn: { HP: 200, attack: 3, counterAttack: 3 },
    Kylo: { HP: 120, attack: 5, counterAttack: 4 },
    Tie: { HP: 300, attack: 4, counterAttack: 2 }
}

$(document).ready(function () {
var audio = new Audio("https://ia801304.us.archive.org/10/items/StarWarsJohnWilliamsTheThroneRoomEndTitle/Star%20Wars%20-%20John%20Williams%20-%20The%20Throne%20Room%20End%20Title.mp3")

    var hero = 0
    var counterer = 0
    var opponent = 0
    var timesCalled = 0
    function dead() {
        $(opponent).appendTo(".dead")
        timesCalled++
    }
    var multiplier = 1

    function hpDisplay() {
        $("#HPR").text(heroes.rey.HP)
        $("#HPF").text(heroes.Finn.HP)
        $("#HPK").text(heroes.Kylo.HP)
        $("#HPT").text(heroes.Tie.HP)
    }
    hpDisplay()
    //jQuery.data(document.getElementsByClassName("heroes1"), "stats",{heroes:[rey]})
    // Choose character
    // Chosen character goes into YourCharacter box
    // Other characters go into characters available to attack 
    $(".heroes").bind("click", function () {
        $(".heroes").unbind("click")
        user = $(this)
        console.log(user)
        if ($(user).attr("id") === "heroes1") {
            hero = heroes.rey
        }
        else if ($(user).attr("id") === "heroes2") {
            hero = heroes.Finn
        }
        else if ($(user).attr("id") === "heroes3") {
            hero = heroes.Kylo
        }
        else if ($(user).attr("id") === "heroes4") {
            hero = heroes.Tie
        }

        console.log(hero)

        console.log(this)
        console.log()
        $(".heroes:not(this)").appendTo(".enemies")
        $(user).appendTo(".YourCharacter");
        enemyChoice()
    })

    function enemyChoice() {

        $(".heroes:not(user)").bind("click", function () {
            console.log(this)
            opponent = $(this)
            counterer = 0
            $(".heroes").unbind("click")
            $(this).appendTo(".Defender")
            console.log(counterer)
            // user = $(this)
            console.log(user)
            if ($(opponent).attr("id") == "heroes1") {
                counterer = heroes.rey
            }
            else if ($(opponent).attr("id") == "heroes2") {
                counterer = heroes.Finn
            }
            else if ($(opponent).attr("id") == "heroes3") {
                counterer = heroes.Kylo
            }
            else if ($(opponent).attr("id") == "heroes4") {
                counterer = heroes.Tie
            }
            console.log(counterer)
        })
    }

    $("button").on("click", function () {
        counterer.HP = counterer.HP - (hero.attack * multiplier)
        
        if (counterer.HP <= 0) {
            dead()
            enemyChoice()
            $(".Attack").text("The defender died. Choose someone to attack.")
            multiplier++
            hpDisplay()
        }
        else {
            console.log(counterer.counterAttack)
            hero.HP = hero.HP - counterer.counterAttack
            $(".Counter").text("You were attacked doing " + counterer.counterAttack + " damage")
            $(".Attack").text("You attacked doing " + (hero.attack * multiplier) + " damage")
            multiplier++
            hpDisplay()
        }
        if (timesCalled == 3) {
            $(".Attack").text("You've saved the Galaxy! Refresh to play again");
            audio.play();
        }




    })


})


