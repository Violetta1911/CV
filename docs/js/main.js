const particles = [];

function setup () {
    createCanvas(window.innerWidth, window.innerHeight);

    const particlesLength = Math.floor(window.innerWidth / 10); 

    for(let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
    
   }
   
function draw () {
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
        this.pos = createVector(random(width), random(height) );
        //    Velocity
        this.vel = createVector(random(-2, 2), random(-2, 2));
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
           fill('rgba(248, 128, 48, 0.97)');
           circle(this.pos.x, this.pos.y, this.size);
       }
       // Detect edges
       edges() {
           if(this.pos.x < 0 || this.pos.x > width) {
               this.vel.x *= -1;
           }

           if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
           
       }  
        // Connect particles
         checkParticles(particles) {
             particles.forEach(particle => {
                 const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

                 if(d < 120) {
                     stroke('rgba(120,62,23,0.1)');
                     line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y); 
                 }
             }

             )
         } 
   
   }

function handleSticky() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction();
    };
  
    // Get the navbar
    var navbar = document.getElementById("navbar");
  
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
  
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }

$(function () {
  $(".btn").on("click", function () {
    $(".menu-list").slideToggle("");
  });

  handleSticky();
});




