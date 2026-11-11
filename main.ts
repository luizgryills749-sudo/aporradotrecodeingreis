MFRC522.Init()
basic.forever(function () {
    if (MFRC522.read() > "open please") {
        basic.showIcon(IconNames.Yes)
    }
    if (MFRC522.read() < "open please") {
        basic.showIcon(IconNames.No)
    }
})
