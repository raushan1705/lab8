$(document).ready(function(){
    correct = ["Kushina", "A mystical sword", "Shinobi", "9", "Team 7"];
    questions = ["What's Naruto's mum's name?","What is Samehada?", "Which of these is another word for ninja?", "How many tails does Kurama have?", "What team is Kakashi the leader of?"]
    choice_options = [["Kushina","Kurama","Naruno","Carol"],["A giant possum","A talking cat","A mystical sword","Naruto's dad"], 
    ["Genjutsu", "Shinobi", "Arigato", "Gelato"], ["3", "9", "7", "It changes depending on his mood"], ["Team 7", "Twelve Guardian Ninja", "Taka", "Team Rocket"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>"); 
    $('.question').append ("<p class='d'> Q1. What's Naruto's mum's name?</p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Kushina</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Kurama</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Naruno</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>Carol</label>")
 
    $('.question').append ("<p class='d'> Q2. What is Samehada?</p>");
    $('.question').append ("<label><input type='radio' name='q2' value='a'>A giant possum</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>A talking cat</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>A mystical sword</label>")
    $('.question').append ("<label><input type='radio' name='q2' value='a'>Naruto's dad</label>")

    $('.question').append ("<p class='d'> Q3. Which of these is another word for ninja?</p>");
    $('.question').append ("<label><input type='radio' name='q3' value='a'>Genjutsu</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>Shinobi</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>Arigato</label>")
    $('.question').append ("<label><input type='radio' name='q3' value='a'>Gelato</label>")
    
    $('.question').append ("<p class='d'> Q4. How many tails does Kurama have?</p>");
    $('.question').append ("<label><input type='radio' name='q4' value='a'>3</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>9</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>7</label>")
    $('.question').append ("<label><input type='radio' name='q4' value='a'>It changes depending on his mood</label>")

    $('.question').append ("<p class='d'> Q5. What team is Kakashi the leader of?</p>");
    $('.question').append ("<label><input type='radio' name='q5' value='a'>Team 7</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>Twelve Guardian Ninja</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>Taka</label>")
    $('.question').append ("<label><input type='radio' name='q5' value='a'>Team Rocket</label>")
    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         })
         $("input[name=q2]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [1] == choice){
                 countCorrect += 1;
            }
        })

        $("input[name=q3]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [2] == choice){
                 countCorrect += 1;
            }
        })

        $("input[name=q4]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [3] == choice){
                 countCorrect += 1;
            }
        })

        $("input[name=q5]").each (function (index){
            choice = $(this).parent().text(); 
            if ($( this ).prop("checked") == true && correct [4] == choice){
                 countCorrect += 1;
            }
        })

        $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 
    
});
