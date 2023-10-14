// made with Vue 2
const app = new Vue({
    el: '#app',
    data: {
            player: player,
            prestigeOne: 1, // if prestige ve been activated
            prestigeTwo: 0,
            //app.prestigeOne = true
            genCounterOne: true, // if less than 8 generators
            genCounterTwo: true,
            genCounterThree: true
    },
    methods: {
        format(amount) {
            return format(amount) // format of numbers
        },
        gameLoop(){
            gameLoop(this) // main game loop with timers
        }
    },
    mounted() {
        setInterval(this.gameLoop, 50) // 1 loop of game timer in ms
    }
})
