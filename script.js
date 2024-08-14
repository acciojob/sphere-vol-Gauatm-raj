function volume_sphere(event) {
    //Write your code here
	event.preventDefault(); // Prevent form submission
    var radius = parseFloat(document.getElementById('radius').value);

    if (!isNaN(radius)) {
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById('volume').value;// = volume.toFixed(2); // Display volume with two decimal places
    } 
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;