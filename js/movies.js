const movies = {
                 "The protagonist doesn't have to look good, but the story has to be interesting!": 'Drama',
                 'Wanna watch a movie with an epic story!': 'Drama',
                 'Wanna see an interesting movie with a tight plot.': 'Drama',
                 'I really wanna watch a movie with a terrific plot.': 'Drama',
                 'A movie with great acting, plz!': 'Drama',
                 'I heard this one has an amazing twist. I really wanna watch it.': 'Drama',
                 'This movie is already blowing up on the internet.': 'Drama',
                 'Wanna watch an exciting adventure.': 'Adventure',
                 "I'm really into the mystery and thrill of the unknown.": 'Adventure',
                 'Wanna watch a great masterpiece about a journey.': 'Adventure',
                 'Yearning for a glamorous journey.': 'Adventure',
                 "I want to see a great actor's risky magnum opus.": 'Adventure',
                 "I want to explore the unknown with the protagonist. It's going to be thrilling.": 'Adventure',
                 'Our ultimate destination is the great unknown!': 'Adventure',
                 "What's better than laughing happily?": 'Comedy',
                 'I love watching outlandish comedy!': 'Comedy',
                 "I'm in short supply of laughter right now.": 'Comedy',
                 "I haven't had a good laugh in a long time. I'd love to experience it again.": 'Comedy',
                 'Happiness is the most important thing in life.': 'Comedy',
                 'If I laugh hard enough, does it count as an ab workout? I just wanna laugh hard enough': 'Comedy',
                 "My friend went through a break-up recently. We're in urgent need of something happy.": 'Comedy',
                 'I want to watch a fun movie for all ages.': 'Animation',
                 'My kids like this movie too.': 'Animation',
                 "There's something feel-good about colorful worlds. I'm looking forward to it.": 'Animation',
                 "I'm looking for a movie that's about childhood joy and delights.": 'Animation',
                 'I want to bring my kids with me to the movie!': 'Animation',
                 "This was my favorite film as a child. I'm looking forward to revisiting it.": 'Animation',
                 "I love the style of this movie. It's so cute.": 'Animation',
                 'Wanna watch a true story full of happiness and sadness!': 'Biography',
                 'Wanna witness the legendary life of the protagonist on the screen.': 'Biography',
                 "I've heard about the real-life story this movie is based on.": 'Biography',
                 'What he went through was really moving.': 'Biography',
                 'Her story would make for a great movie.': 'Biography',
                 "I want to follow along with the protagonist's struggles.": 'Biography',
                 "I never knew a person's life could get so bizarre.": 'Biography',
                 'Seeing such extraordinary powers and technology was an eye-opening experience!': 'Sci-Fi',
                 'I get to see how far technology has come with these top-notch visuals and sound effects.': 'Sci-Fi',
                 'I adore sci-fi and fantasy worlds!': 'Sci-Fi',
                 'I was taken in by the surreal visuals in the trailer. I won’t miss it!': 'Sci-Fi',
                 'I want to explore the mysteries of space-time through stories on the big screen.': 'Sci-Fi',
                 "I'm fascinated by the drive to explore the unknown.": 'Sci-Fi',
                 "I'd like to watch a film that fills in what could happen in space.": 'Sci-Fi',
                 "I'd love to experience that kind of earth-shattering love for myself.": 'Romance',
                 'I hope love finds me too after this flick.': 'Romance',
                 "Today's another good day to root for a sweet couple's love life.": 'Romance',
                 "I'm super drawn to stories that are simultaneously sweet and touching.": 'Romance',
                 'Going on my first date with a hot guy. What movie should we watch?': 'Romance',
                 "If only I could take the female lead's place in the film and be in love with the male lead instead.": 'Romance',
                 "Life's been rough. I want to watch something sweet.": 'Romance',
                 'Woohoo! A whole new world of imagination just for me to enjoy!': 'Fantasy',
                 'I want to watch a movie that contains magic or supernatural elements!': 'Fantasy',
                 "What a grotesque and colorful storyline. It's brilliant!": 'Fantasy',
                 'The only way to live out my fantasies of becoming a magician is through movies.': 'Fantasy',
                 'I want to have superpowers like the protagonist in the film!': 'Fantasy',
                 "I'm sure magic exists somewhere in the world.": 'Fantasy',
                 'This is that infamous epic fantasy saga!': 'Fantasy',
                 'The world needs more heroes!': 'Hero',
                 "I've been following the series since the first film. I love watching him save the world.": 'Hero',
                 'I love movies that have the same feel as ultraman.': 'Hero',
                 'Did the protagonist unlock a new superpower?': 'Hero',
                 'The super villain in this movie seems super powerful. Can the protagonist win?': 'Hero',
                 "I feel safe knowing they're the ones protecting the world.": 'Hero',
                 'I want to be moved by their powerful friendship, beliefs, and sense of justice.': 'Hero',
                 'Oh, my heart is aflutter when I look into their eyes.': 'Animals',
                 'These cute fuzzy angels are always at our side!': 'Animals',
                 "I can't resist cute animals.": 'Animals',
                 'I have a soft spot for heartwarming movies like this after having a pet of my own.': 'Animals',
                 'Really wanna explore the forest with the adorable fuzzy protagonist.': 'Animals',
                 'I have pets of my own, so I love this kind of film.': 'Animals',
                 'As a petkeeper, I find I can better relate to movies about them.': 'Animals',
                 'The intense fight scenes in the trailer are visually stunning.': 'Action',
                 'I want to watch a movie that gives me an adrenaline rush!': 'Action',
                 'I don’t have the courage to do such dangerous things in real life, but I can experience them in movies vicariously!': 'Action',
                 "I love, love his movies! He's got smooth moves and lightning quick reflexes!": 'Action',
                 "Everything he does is so realistic. I watch every movie he's in.": 'Action',
                 'I want to watch hot, buff guys fight against each other. Hehe.': 'Action',
                 "I've gotten distracted staring at the protagonist in the poster several times. He's so hot.": 'Action',
                 'I heard this movie will let you laugh till you cry, and then laugh again.': 'Comforting',
                 'Today sucked. Hoping to find a movie to ease my mood.': 'Comforting',
                 'Just wanna experience something warm and full of hope.': 'Comforting',
                 'A friend recommended this film. Says it beautiful and heartwarming.': 'Comforting',
                 "I've been feeling a little sad, so I'm looking for a little pick-me-up.": 'Comforting',
                 "I'm looking for a masterpiece that shows how good life can be.": 'Comforting',
                 "The movie places emphasis on what one can achieve by being gentle. I'm looking forward to it.": 'Comforting',
                 "It's a 100% tear-jerker no matter how many times you watch it.": 'Touching',
                 'Warm yet heartbreaking. My favorite.': 'Touching',
                 'Wanna cry my heart out.': 'Touching',
                 "I don't cry easily. Give me the best tear-jerker you've got.": 'Touching',
                 'This is my third viewing. I find something new to cry over every time.': 'Touching',
                 "I've brought tissues for my tears. I'm ready!": 'Touching',
                 'Crying is a great stress reliever, you know. I need this film now.': 'Touching',
                 'I can relate to the characters in movies that take place in office buildings.': 'Urban',
                 'I like seeing how the protagonists deal with the ups and downs in their life.': 'Urban',
                 "I'm curious if they'll introduce something new to these movies about city life.": 'Urban',
                 'I like watching movies that take place in this bustling world.': 'Urban',
                 'Everyone appreciates a busy life in their own way.': 'Urban',
                 'Wanna watch a story about the common people in a bustling city.': 'Urban',
                 'I like stories that take place in modern cities. It feels realistic.': 'Urban',
                 "I heard there's a movie with a masterful soundtrack?": 'Music',
                 "I'm here for the original soundtrack!": 'Music',
                 "I've listened to the soundtrack before coming to watch it.": 'Music',
                 "I love a movie that applies music to accentuate the protagonist's emotions.": 'Music',
                 "I'm really into soundtracks. I'm hoping some movies can deliver good ones.": 'Music',
                 'Do you know any movies I can sing along to?': 'Music',
                 'I want to immerse myself in music while watching a movie.': 'Music',
                 'This director has a tendency of only revealing the story at the last minute.': 'Suspense',
                 "That was amazing! I'd watch it even if it gives me nightmares!": 'Suspense',
                 'Any movie that requires high intelligence and deductive skills?': 'Suspense',
                 'Wanna watch a movie that challenges my intellect!': 'Suspense',
                 'Wanna watch a movie with an unpredictable ending!': 'Suspense',
                 "Who's the real culprit behind everything?": 'Suspense',
                 'I love amazing plot twists. It keeps me guessing the whole time.': 'Suspense',
                 'I want to watch a movie where humans defeat nature.': 'Disaster',
                 'Wanna discover the meaning of life in a disaster movie.': 'Disaster',
                 'Will the protagonist be able to survive?': 'Disaster',
                 'Sudden disasters are thrilling to watch.': 'Disaster',
                 "Maybe I'll learn something about what to do in a disaster from the movie.": 'Disaster',
                 'I wanna watch a suspenseful doomsday movie.': 'Disaster',
                 'I love to see the beauty of humanity in the face of tragedy.': 'Disaster',
                 'The poster makes me wanna dance with the protagonist.': 'Musical',
                 'I love the classic and elegant choreograph, so attractive.': 'Musical',
                 "The actor's voice and dance moves stole my heart away.": 'Musical',
                 'I want to dance alongside the protagonist on the big screen.': 'Musical',
                 'Ohh, I want to be moved to tears by gorgeous dance moves today!': 'Musical',
                 'I want to sing and dance with the actors!': 'Musical',
                 'They say the music and choreography in this movie is the best ever done.': 'Musical',
                 'The mysteries of the universe are fascinating.': 'Space',
                 'The depths of space spark my imagination.': 'Space',
                 'I fantasize about the mysteries of the universe.': 'Space',
                 'Outer space is the great unknown!': 'Space',
                 'Every star holds limitless secrets to explore.': 'Space',
                 'Any movies about escaping earth to explore the unknown?': 'Space',
                 'Anyone want to watch a space movie with me?': 'Space',
                 'I never get tired of the classics.': 'Period',
                 'I love the thrill of period dramas.': 'Period',
                 'Drama in ancient times just hits differently.': 'Period',
                 'Traditional culture is intriguing!': 'Period',
                 'Life in ancient times is really fascinating!': 'Period',
                 'I love the props and costumes in movies set in ancient times.': 'Period',
                 'I want to experience life in ancient times through the movie!': 'Period',
                 "No matter how bad it gets, there's always light at the end of the tunnel.": 'Inspirational',
                 'Never give up on your dreams. They could come true one day.': 'Inspirational',
                 'I need positive vibes!': 'Inspirational',
                 'Hold on to hope! Never give up!': 'Inspirational',
                 'Life is all about never giving up.': 'Inspirational',
                 "I've been feeling down lately. I need a passionate movie to reignite that spark!": 'Inspirational',
                 "I heard the protagonist's struggles are based on real life events.": 'Inspirational',
                 'A time machine would be fantastic': 'Time-Travel',
                 'I wish I could go back in time too.': 'Time-Travel',
                 'I wonder how modern people would handle living in ancient times?': 'Time-Travel',
                 'The feelings they still have for each other after so many years is amazing.': 'Time-Travel',
                 'I wish I could experience the past for myself.': 'Time-Travel',
                 "I'd love to see what a modern person does when they go back in time.": 'Time-Travel',
                 'I love time travel movies!': 'Time-Travel',
                 "I can't resist giant mechas!": 'Robots',
                 'What does the rapid development of artificial intelligence truly mean for mankind?': 'Robots',
                 'The sound of electricity gets me all fired up.': 'Robots',
                 'Humans gave life to cold lifeless machines!': 'Robots',
                 'The technology involved in making this colossus is so cool!': 'Robots',
                 'I want to see these giant machines fight against each other!': 'Robots',
                 'What happens to humanity after transforming ourselves with machinery?': 'Robots',
                 'Can humans really subdue such giant awesome aggressive creatures?': 'Monster',
                 'These grotesque monsters make me scream every time.': 'Monster',
                 "It's so thrilling to watch giant prehistoric creatures fight against each other!": 'Monster',
                 "The visual effects are excellent! The monsters look like they're about to jump out from the screen.": 'Monster',
                 'Looks can be deceiving. A person can be kind under their terrifying exterior.': 'Monster',
                 'Giant powerful creatures are the best!': 'Monster',
                 'I think my heart would stop if that thing pounced on me.': 'Monster',
                 'Any movies that will make me hungry?': 'Culinary',
                 'I love how the director focuses on the people and food in the kitchen.': 'Culinary',
                 'The best measuring stick for a movie like this is whether or not it makes me hungry.': 'Culinary',
                 "I don't want to overeat so I'll just admire the food on the screen.": 'Culinary',
                 'This movie is going to tickle my taste buds.': 'Culinary',
                 "I'm not drooling. That's just my tears...": 'Culinary',
                 'A comfort movie that also makes me hungry. My favorite.': 'Culinary'
               }
export { movies };