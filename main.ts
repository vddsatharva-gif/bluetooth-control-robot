function right () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
}
function left () {
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
}
bluetooth.onBluetoothConnected(function () {
    basic.showString("VDDS")
})
function stop () {
    ContinuousServo.turn_off_motor(DigitalPin.P0)
    ContinuousServo.turn_off_motor(DigitalPin.P1)
}
function backward () {
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(data)
})
function forward () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
}
let data = ""
bluetooth.startUartService()
basic.forever(function () {
    if (data == "b") {
        forward()
    } else if (data == "f") {
        backward()
    } else if (data == "r") {
        right()
    } else if (data == "l") {
        left()
    } else {
        stop()
    }
})
