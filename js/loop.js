function producePrevious(generatorArray, diff) {
    for( let i = 1; i < generatorArray.length; i++) {
        let g = generatorArray[i]
        generatorArray[i-1].amount += g.productionPerSecond() * diff
    }
}

function gameLoop(that) {
    let diff = (Date.now() - that.player.lastUpdate) / 1000

    that.player.imp += that.player.circles[0].productionPerSecond() * diff
    that.player.soulshard += that.player.implosions[0].productionPerSecond() * diff
    that.player.dreadstalker += that.player.warlocks[0].productionPerSecond() * diff
    
    producePrevious(that.player.circles, diff)
    producePrevious(that.player.implosions, diff)
    producePrevious(that.player.warlocks, diff)

    that.player.lastUpdate = Date.now() // timer update
}