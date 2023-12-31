// matter.js of fullpage 1st section
var w = window.innerWidth;
var h = window.innerHeight;
// asset의 갯수
const numCircles = 5;

let ground;
let wall1;
let wall2;

const content = document.querySelector('.intro-matterjs-shapes');

// Matter.js module aliases
let elements = [];

window.addEventListener('resize', (e) => {
  w = window.innerWidth;
  h = window.innerHeight;
  engine.render.canvas.width = w100;
  engine.render.canvas.height = h;
  
  Matter.Body.setPosition(wall2, Matter.Vector.create(w + 30, h * .5), { passive: true } );
  Matter.Body.setPosition(ground, Matter.Vector.create(w * .5, h + 30), { passive: true });
  
});

// create a Matter.js engine
var engine = Matter.Engine.create(content, {
  render: {
    options: {
      width: w,
      height: h,
      wireframes: false,
      background: "#eee;"
    }
  }
});

window.engine = engine;

var mouseConstraint = Matter.MouseConstraint.create(engine, {
  constraint: {
    render: {
      visible: false
    }
  }
});

// create 5 boxes and a ground
for (var i = 0; i < numCircles; i++) {
  var x = Math.random() * w;
  var y = Math.random() * -h;
  var fixedRadius = 70; // asset의 크기

  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: 'https://raw.githubusercontent.com/miloupark/Mendini-Onepage/5941011ab642b06dc707dae6f4d902a89fbacef3/images/mendinishapes%201.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: 'https://raw.githubusercontent.com/miloupark/Mendini-Onepage/5941011ab642b06dc707dae6f4d902a89fbacef3/images/mendinishapes%202.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: 'https://raw.githubusercontent.com/miloupark/Mendini-Onepage/5941011ab642b06dc707dae6f4d902a89fbacef3/images/mendinishapes%203.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: 'https://raw.githubusercontent.com/miloupark/Mendini-Onepage/5941011ab642b06dc707dae6f4d902a89fbacef3/images/mendinishapes%204.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
  elements.push(Matter.Bodies.circle(x, y, fixedRadius, {
    render: {
      sprite: {
        texture: 'https://raw.githubusercontent.com/miloupark/Mendini-Onepage/5941011ab642b06dc707dae6f4d902a89fbacef3/images/mendinishapes%205.svg',
        xScale: (fixedRadius / (245/2)) + 0.2,
        yScale: (fixedRadius / (227/2)) + 0.2
      }
    }
  }));
}

ground = Matter.Bodies.rectangle(w/2, h+30, w*5., 60, { isStatic: true });
wall1 = Matter.Bodies.rectangle(-30, h/2, 60, h*2, { isStatic: true });
wall2 = Matter.Bodies.rectangle(w+30, h/2, 60, h*2, { isStatic: true });
window.wall2 = wall2;
elements.push(ground);
elements.push(wall1);
elements.push(wall2);

// add all of the bodies to the world
Matter.World.add(engine.world, elements);
Matter.World.add(engine.world, mouseConstraint);

// run the engine
Matter.Engine.run(engine);


// Object-Swiper
var swiper = new Swiper(".mySwiper-object1", {
  slidesPerView: 8,
  spaceBetween: 24,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    428: { 
      slidesPerView: 3,
      spaceBetween: 16,
    },
    744: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  }
});


