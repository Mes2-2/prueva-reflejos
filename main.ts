function item () {
    basic.pause(100)
    _var = randint(0, 1)
    if (_var == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        t1 = input.runningTime()
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        t1 = input.runningTime()
    }
}
function ok () {
    t2 = input.runningTime()
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.pause(500)
    basic.showString("T=" + (t2 - t2) + "ms")
    item()
}
let t2 = 0
let t1 = 0
let _var = 0
basic.showNumber(3)
basic.pause(500)
basic.showNumber(2)
basic.pause(500)
basic.showNumber(3)
basic.pause(500)
basic.clearScreen()
basic.showString("GO")
item()
basic.forever(function () {
    if (_var == 0 && input.buttonIsPressed(Button.A)) {
        ok()
    }
})
