let valor = 0
basic.forever(function () {
    valor = Math.round(Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1007, 0, 100))
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    if (valor <= 60) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else {
        if (valor >= 90) {
            pins.digitalWritePin(DigitalPin.P14, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P13, 1)
        }
    }
})
