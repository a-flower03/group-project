let flip = 0
let pitch = 0
let roll = 0
input.onButtonPressed(Button.A, function () {
    flip = 0
    basic.showNumber(flip)
})
input.onGesture(Gesture.Shake, function () {
    pitch = pitch
    roll = roll
    if (Math.abs(pitch) < 10 && Math.abs(roll) < 10) {
        flip += 1
        basic.showNumber(flip)
        basic.pause(200)
    } else {
        basic.showNumber(flip)
        basic.pause(200)
    }
})
basic.forever(function () {
    basic.showNumber(flip)
})
