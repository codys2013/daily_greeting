const pools = require('./pools.js');

// primary functions stored as an object
const script = {
    tellAJoke () {
        let num = Math.floor(Math.random() * pools.jokes.length);
        return pools.jokes[num];
    },
    sayACompliment () {
        let num = Math.floor(Math.random() * pools.compliments.length);
        return pools.compliments[num];
    },
    getTheDay () {
        let now = new Date();
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
            'Thursday', 'Friday', 'Saturday'];
        const today = weekDays[now.getDay()];
        return today;
    },
    getTheRelativeTime () {
        let now = new Date();
        let thisHour = now.getHours();
        if (thisHour >= 2 && thisHour < 12) {
            return 'Morning';
        } else if (thisHour >= 12 && thisHour < 18) {
            return 'Afternoon';
        } else {
            return 'Evening';
        }
    },
    sayFarewell () {
        let num = Math.floor(Math.random() * pools.farewells.length);
        return pools.farewells[num];
    },
    insertJokeTrans () {
        let num = Math.floor(Math.random() * pools.jokeReactions.length);
        return pools.jokeReactions[num];
    }
};

module.exports = script;
