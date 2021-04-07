// Object of jokes and compliments to be selected from
// array kept separate from script.js and greet_me.js to keep code clean,
// as jokesAndCompliments takes up a lot of space
const pools = {
    jokes: [
    'My grandpa has the heart of the lion and a lifetime ban from the zoo.', 
    'You can only get spoiled milk from a pampered cow.', 
    'I went to buy some camo pants but couldn’t find any.', 
    'I failed math so many times at school, I can’t even count.', 
    'I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.', 
    'When life gives you melons, you might be dyslexic.', 
    'It takes a lot of balls to golf the way I do.', 
    'Russian dolls are so full of themselves.', 
    'Light travels faster than sound, which is the reason that some people appear bright before you hear them speak. ', 
    'Two fish are in a tank. One says, "How do you drive this thing?"', 
    'I’m reading a book about anti-gravity. It’s impossible to put down.',
    'Atheism is a non-prophet organization.', 
    'If a parsley farmer gets sued, can they garnish his wages?', 
    'I didn’t think orthopedic shoes would help, but I stand corrected.', 
    'Blunt pencils are really pointless.',
    'One of the cows didn’t produce milk today. It was an udder failure.',
    'The dyslexic devil worshipper sold his soul to Santa.',
    'You kill vegetarian vampires with a steak to the heart.',
    'I told my doctor that I broke my arm in two places. He told me to stop going to those places.',
    'What do you call it when Batman skips church? Christian Bale.',
    'I don’t trust stairs because they’re always up to something.', 
    'Smaller babies may be delivered by stork but the heavier ones need a crane.',
    'I want to be cremated as it is my last hope for a smoking hot body.', 
    'Time flies like an arrow. Fruit flies like a banana.', 
    'To the guy who invented zero, thanks for nothing.',
    'Geology rocks but Geography is where it’s at!',
    'I don’t trust stairs because they’re always up to something.',
    'Smaller babies may be delivered by stork but the heavier ones need a crane.',
    'A man sued an airline company after it lost his luggage. Sadly, he lost his case.',
    'Becoming a vegetarian is one big missed steak.',
    'Never trust an atom, they make up everything!',
    'I made a pun about the wind but it blows.',
    'I knew a guy who collected candy canes, they were all in mint condition.',
    'Getting the ability to fly would be so uplifting.',
    'My friend’s bakery burned down last night. Now his business is toast.',
    'It’s hard to explain puns to kleptomaniacs because they always take things literally.',
    'England doesn’t have a kidney bank, but it does have a Liverpool.',
    'A cross-eyed teacher couldn’t control his pupils.',
    'She had a photographic memory, but never developed it.',
    'The guy who invented the door knocker got a no-bell prize.',
    'Why did Adele cross the road? To say hello from the other side.', 
    'What kind of concert only costs 45 cents? A 50 Cent concert featuring Nickelback.',
    'What was Forrest Gump’s email password? 1forrest1',
    'Did you hear about the restaurant on the moon? I heard the food was good but it had no atmosphere.',
    'Can February March? No, but April May.',
    'Need an ark to save two of every animal? I noah guy.',
    'Why was Dumbo sad? He felt irrelephant.',
    'Always borrow money from a pessimist. They’ll never expect it back.',
    'How do you keep an idiot in suspense?',
    'Did you hear about the Mexican train killer? He had locomotives.',
    'How does NASA organize their company parties? They planet.',
    'What’s E.T. short for? Because he’s only got little legs.',
    'Why does Snoop Dogg carry an umbrella? Fo’ drizzle.',
    'Exaggerations went up by a million percent last year.',
    'Why can’t a bike stand on its own? It’s two tired.',
    'I used to be addicted to soap, but I’m clean now.',
    'Two penguins walk into a bar… which is stupid because the second one should have seen it.',
    'Dry erase boards are remarkable.',
    'PMS should just be called ovary-acting.',
    'Learn sign language, it’s very handy.'
    ],
    compliments: [
    'You\'re a gift to those around you.',
    'You are awesome!',
    'I like your style.',
    'I appreciate you.',
    'You are the most perfect you there is.',
    'You are enough.',
    'You\'re strong.',
    'You\'re all that and a super-size bag of chips.',
    'Your kindness is a balm to all who encounter it.',
    'You have a great sense of humor.',
    'You\'re more helpful than you realize.',
    'You deserve a hug right now.',
    'On a scale from 1 to 10, you\'re an 11.',
    'You are strong.',
    'You\'re even more beautiful on the inside than you are on the outside.',
    'You\'re like a ray of sunshine on a really dreary day.',
    'You are making a difference.',
    'Everything would be better if more people were like you!',
    'When you say, "I meant to do that," I totally believe you.',
    'Colors seem brighter when you\'re around.',
    'That thing you don\'t like about yourself is what makes you so interesting.',
    'You\'re wonderful.',
    'You\'re better than a triple-scoop ice cream cone. With sprinkles.',
    'You\'re one of a kind!',
    'If you were a box of crayons, you\'d be the giant name-brand one with the built-in sharpener.',
    'You should be thanked more often. So thank you!!',
    'Our community is better because you\'re in it.',
    'Someone is getting through something hard right now because you\'ve got their back. ',
    'You have the best ideas.',
    'You\'re a candle in the darkness.',
    'Being around you is like being on a happy little vacation.',
    'You\'re always learning new things and trying to better yourself, which is awesome.',
    'You could survive a Zombie apocalypse.',
    'When you make a mistake, you try to fix it.',
    'Your voice is magnificent.',
    'The people you love are lucky to have you in their lives.',
    'You make my insides jump around in the best way.',
    'Somehow you make time stop and fly at the same time.',
    'You seem to really know who you are.',
    'Any team would be lucky to have you on it.',
    'I bet you do the crossword puzzle in ink.',
    'Babies and small animals probably love you.',
    'You have a good head on your shoulders.',
    'The way you treasure your loved ones is incredible.',
    'Thank you for being you.',
    'Even if you were cloned, you\'d still be one of a kind, and the better looking one.',
    'Your smile is proof that the best things in life are free.',
    'Your face makes other people ugly.',
    'Are you a beaver, because damn.',
    'I bet you make babies smile.',
    'You are more unique and wonderful than the smell of a new book.',
    'The person who raised you deserves a medal for a job well done.',
    'Thank you for existing.',
    'Your energy is infectious.',
    'The world would be so boring without you.',
    'Your capacity for kindness is boundless.',
    'There’s no one like you.',
    'You’re not as dumb as you let people think you are.',
    'Your soul is gorgeous.',
    'You have such a good heart.'
    ],
    farewells: [
    'Enjoy the rest of your day!',
    'See you next time',
    'I\'ll be here when you come back',
    'Later, Gator',
    'See you later',
    'See you soon, Racoon',
    'So long for now, Dairy Cow',
    'Toodles Poodles',
    'Hang loose, Mother Goose',
    'Bye-bye Honey Pie',
    ],
    jokeReactions: [
    'HA!',
    'Thats hilarious isn\'t it?',
    'LOL!',
    'LMFAO!',
    'Wow! they don\'t get much better than that.',
    'Yes, I know the jokes are bad. They\'re all bad.',
    'Don\'t come for me, thats funny!',
    'Now thats a punchline that "hits"... get it? Nevermind.',
    'Oh my! thats a good one!',
    'Yeah... thats why I\'m not a comic.'
    ]
};

module.exports = pools;