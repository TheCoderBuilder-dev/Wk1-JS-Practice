// Class definition for a Cylinder
class Cylinder {
  // Constructor to initialize the radius and height
  constructor(radius, height) {
      this.radius = radius;
      this.height = height;
  }

  // Method to calculate the volume of the cylinder
  volume() {
      // Formula: V = π * r^2 * h (Highschool math)
      return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4); // Round to 4 decimal places
  }
}

// Create a new Cylinder object with radius 7 and height 10
const cylinder = new Cylinder(7, 10);

// Log the volume of the cylinder
console.log(`Volume: ${cylinder.volume()}`);
