// Append chosen character to YourCharacter classed heading
$(document).ready(function () {
    var heroes = {
        rey: { HP: 150, attack: 4, counterAttack: 2 },
        Finn: { HP: 200, attack: 3, counterAttack: 3 },
        Kylo: { HP: 120, attack: 5, counterAttack: 4 },
        Tie: { HP: 300, attack: 4, counterAttack: 2 }
    }
                function dead(){
                $(opponent).appendTo(".dead")

            }
    var multiplier = 1

    function hpDisplay(){
    $("#HPR").text(heroes.rey.HP)
    $("#HPF").text(heroes.Finn.HP)
    $("#HPK").text(heroes.Kylo.HP)
    $("#HPT").text(heroes.Tie.HP)}
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
            var hero = heroes.rey
        }
        else if ($(user).attr("id") === "heroes2") {
            var hero = heroes.Finn
        }
        else if ($(user).attr("id") === "heroes3") {
            var hero = heroes.Kylo
        }
        else if ($(user).attr("id") === "heroes4") {
            var hero = heroes.Tie
        }

        console.log(hero)

        console.log(this)
        console.log()
        $(".heroes:not(this)").appendTo(".enemies")
        $(user).appendTo(".YourCharacter");


        function enemyChoice(){
            
        $(".heroes:not(user)").bind("click", function () {
            console.log(this)
            opponent = 0
            opponent = $(this)

            $(".heroes").unbind("click")
            $(this).appendTo(".Defender")
           
            // user = $(this)
            console.log(user)
            if ($(opponent).attr("id") == "heroes1") {
                var counterer = heroes.rey
            }
            else if ($(opponent).attr("id") == "heroes2") {
                var counterer = heroes.Finn
            }
            else if ($(opponent).attr("id") == "heroes3") {
                var counterer = heroes.Kylo
            }
            else if ($(opponent).attr("id") == "heroes4") {
                var counterer = heroes.Tie
            }
            console.log(counterer)


            $("button").on("click", function () {
                
                hero.HP = hero.HP - counterer.counterAttack 
                counterer.HP = counterer.HP - (hero.attack*multiplier)
                multiplier++
                hpDisplay()
                if (counterer.HP <= 0){
                dead()
                enemyChoice()
                }


            })
            
        })


    }  enemyChoice()
    })



})