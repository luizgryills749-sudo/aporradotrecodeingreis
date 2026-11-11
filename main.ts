MFRC522.Init()
basic.forever(function () {
    if (MFRC522.read() > "open please") {
        basic.showIcon(IconNames.Yes)
        servos.P0.setAngle(90)
        basic.pause(1000)
        servos.P0.setAngle(0)
    }
    if (MFRC522.read() < "open please") {
        basic.showIcon(IconNames.No)
        servos.P0.setAngle(0)
    }
})
