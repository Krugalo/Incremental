Vue.component('generator', {
    props: {
        generator: Generator
    },
    data: function() {
        return {

        }
    },
    methods: {
        format(amount) {
            return format(amount)
        }
    },
    template:
    `<div>
            <h4>{{ generator.name }}</h4>
            <span class="generator-amount">{{ format(generator.amount) }} </span>
            <span class="generator-multiplier"> x{{ format(generator.mult) }}</span><br>
            <span class="generator-production"> {{ format(generator.production) }}/s</span><br>
            <span class="generator-bought">Bought: {{ format(generator.bought) }}</span><br>
            <span class="generator-cost">Cost of 1: {{ format(generator.cost) }} {{ generator.currency }}s</span>
            <span class="generator-cost">Cost of 10: {{ format(generator.cost10) }} {{ generator.currency }}s</span>
            <h2 @click="generator.buy()"
            v-bind:class="{ 'buy--unavailable': !generator.canBuy }">Buy 1</h2>
            <h2 @click="generator.buy10()" 
            v-bind:class="{ 'buy--unavailable': !generator.canBuy10 }"> Buy 10 </h2>
    </div>
    `
})