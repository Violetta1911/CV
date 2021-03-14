const particles = [];

function setup() {
  const canvas = createCanvas(1900, 1250);

  canvas.parent("main-background");

  const particlesLength = Math.floor(window.innerWidth / 10);

  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(255, 255, 255);
  particles.forEach((p, index) => {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor() {
    //    Position
    this.pos = createVector(random(width), random(height));
    //    Velocity
    this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    //    Size
    this.size = 5;
  }
  //  Updated movement by adding velocity
  update() {
    this.pos.add(this.vel);
    this.edges();
  }
  //  Draw single particle
  draw() {
    noStroke();
    fill("rgba(164, 94, 173, 68)");
    circle(this.pos.x, this.pos.y, this.size);
  }
  // Detect edges
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  // Connect particles
  checkParticles(particles) {
    particles.forEach((particle) => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

      if (d < 120) {
        stroke("rgba(120,62,23,0.1)");
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}