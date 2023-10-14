function producePrevious(generatorArray, diff) {
    for( let i = 1; i < generatorArray.length; i++) {
        let g = generatorArray[i]
        generatorArray[i-1].amount += g.productionPerSecond() * diff
    }
}

function gameLoop(that) {
    let diff = (Date.now() - that.player.lastUpdate) / 1000

    that.player.currOne += that.player.genOne[0].productionPerSecond() * diff
    if (app.prestigeOne){ that.player.currTwo += that.player.genTwo[0].productionPerSecond() * diff}
    if (app.prestigeTwo){ that.player.currThree += that.player.genThree[0].productionPerSecond() * diff}
    
    producePrevious(that.player.genOne, diff)
    producePrevious(that.player.genTwo, diff)
    producePrevious(that.player.genThree, diff)

    that.player.lastUpdate = Date.now() // timer update
}