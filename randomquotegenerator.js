jQuery(document).ready(function(){
            
            var quotes = ["You miss 100% of the shots you don't take.",
                          "Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it’s the only thing that ever has.",
                          "Either you run the day, or the day runs you.",
                          "The next time you’re faced with something that’s unexpected, unwanted and uncertain, consider that it just may be a gift.",
                          "If opportunity doesn't knock, build a door.",
                          "Courage is contagious. When a brave man takes a stand, the spines of others are stiffened.",
                          "The best way to find yourself is to lose yourself in the service of others.",
                          "Be yourself. Everyone else is already taken."];
            var authors = ["Wayne Gretsky", "Margaret Mead", "Jim Rohn", "Stacey Kramer", "Milton Berle", "Billy Graham", "Mahatma Gandhi", "Oscar Wilde"];
            
            $('#show_quote').hide();

            
            $('.button').click(function() {
            
                
                var number = Math.random();
                console.log(number);
                if (number >= 0 && number <=0.15) {
                    document.getElementById('show_quote').innerHTML = quotes[0] + '<br><br>' + '-' + authors[0];  
                    $('#show_quote').fadeIn('slow');

                }
                else if (number > 0.15 && number <= 0.25) {
                    document.getElementById('show_quote').innerHTML = quotes[1] + '<br><br>' + '-' + authors[1];
                    $('#show_quote').fadeIn('slow');


                }
                else if (number > 0.25 && number <= 0.35) {
                    document.getElementById('show_quote').innerHTML = quotes[2] + '<br><br>' + '-' + authors[2];;
                    $('#show_quote').fadeIn('slow');

                }
                else if (number > 0.45 && number <= 0.60) {
                    document.getElementById('show_quote').innerHTML = quotes[3] + '<br><br>' + '-' + authors[3];;
                    $('#show_quote').fadeIn('slow');

                }
                else if (number > 0.60 && number <= 0.70) {
                    document.getElementById('show_quote').innerHTML = quotes[4] + '<br><br>' + '-' + authors[4];;
                    $('#show_quote').fadeIn('slow');

                }
                else if (number > 0.70 && number <= 0.80) {
                    document.getElementById('show_quote').innerHTML = quotes[5] + '<br><br>' + '-' + authors[5];;
                    $('#show_quote').fadeIn('slow');

                }
                else if (number > 0.80 && number <= 0.90) {
                    document.getElementById('show_quote').innerHTML = quotes[6] + '<br><br>' + '-' + authors[6];;
                    $('#show_quote').fadeIn('slow');

                }
                
                else if (number > 0.90 && number <= 1.0) {
                    document.getElementById('show_quote').innerHTML = quotes[7] + '<br><br>' + '-' + authors[7];;
                    $('#show_quote').fadeIn('slow');
                }
                
                
                var show_quote = "https://twitter.com/intent/tweet?text=" + document.getElementById('show_quote').innerHTML;
                var new_quote = show_quote.replace('<br><br>','  ');
                $('.twitter-share-button').attr("href",new_quote);
                               
            });
});