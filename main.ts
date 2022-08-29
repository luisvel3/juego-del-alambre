let vidas = 0
input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F - - - ", 200)
    vidas = 5
    basic.showNumber(vidas)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 G B A F A C5 B ", 200)
    game.setScore(vidas)
    game.gameOver()
})
basic.forever(function () {
    while (vidas >= 1) {
        if (input.pinIsPressed(TouchPin.P2)) {
            basic.showIcon(IconNames.Sad)
            music.playTone(392, music.beat(BeatFraction.Whole))
            vidas += -1
            basic.showNumber(vidas)
        }
        basic.showNumber(vidas)
        if (vidas == 0) {
            game.setScore(vidas)
            game.gameOver()
        }
    }
})
