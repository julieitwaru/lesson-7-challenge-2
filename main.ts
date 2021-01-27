while (true) {
    console.log("Rotation Pitch is: " + input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) < 45) {
        light.setAll(light.rgb(255, 165, 0))
    } else {
        light.clear()
    }
    
}
