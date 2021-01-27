while True:
    print("Rotation Pitch is: " + input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) < 45:
        light.set_all(light.rgb(255, 165, 0))
    else:
        light.clear()