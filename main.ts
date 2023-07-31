basic.forever(function () {
        // X, Y és Z tengelyek mentén mért gyorsulás értékei
            let accelerationX = input.acceleration(Dimension.X)
                let accelerationY = input.acceleration(Dimension.Y)
                    let accelerationZ = input.acceleration(Dimension.Z)

                        // Iránymérő értéke (északi iránytól való elfordulás)
                            let compassHeading = input.compassHeading()

                                // Környezeti hőmérséklet
                                    let temperature = input.temperature()

                                        // Adatok küldése Bluetooth-on keresztül
                                            bluetooth.uartWriteLine("Accelerometer: " + accelerationX + ", " + accelerationY + ", " + accelerationZ)
                                                bluetooth.uartWriteLine("Compass Heading: " + compassHeading)
                                                    bluetooth.uartWriteLine("Temperature: " + temperature)

                                                        basic.pause(100) // Pihenési idő a két adatküldés között
                                                        })
                                                        
})
