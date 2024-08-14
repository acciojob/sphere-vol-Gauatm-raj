function volume_sphere(event) {
  // Get the radius value from the input field
  const radiusInput = document.getElementById("radius");
  const radius = parseFloat(radiusInput.value);

  // Validate the input
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round the volume to four decimal places
  const roundedVolume = volume.toFixed(4);

  // Display the calculated volume in the output field
  document.getElementById("volume").value = roundedVolume;
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;