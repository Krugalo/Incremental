Vue.component('add-generator-button', {
    props: {
        target: String
    },
    methods: {
        format(amount) {
            return format(amount)
        },
        addGenerator() { // buying
            if (player[this.target].length > 8) return // only 8 generators
            if (!this.canBuy) return // not enough
            player[getColumnName(this.target)] -= this.tierCost(); // reduce currency by price
            player[this.target].push(createGenerator(player[this.target].length, this.target)) // add to list
            
            if (player[this.target].length == 8) { // max 8 generators each type
                switch (getColumn(this.target)) {
                    case 1:
                        app.genCounterOne = false;
                    case 2:
                        app.genCounterTwo = false;
                    case 3:
                        app.genCounterThree = false
                }
            }
        },
        tierCost() {
            return Math.pow(10, player[this.target].length + (player[this.target].length))
        },
        columnName() {
            return getColumnName(this.target)
        }
    },
    computed: {
        canBuy() {
            return player[getColumnName(this.target)] >= this.tierCost();
        }
    },
    template: 
    `<div 
    class ="add-generator-button"
    :class="{ 'add-generator-button--unavailable': !canBuy}"
    @click="addGenerator()">
        <h1>+</h1>
        <div>One more tier, costs {{ format(tierCost()) }} {{ columnName() }}s</div>
    </div>
    `
})