export default class Particle {
    effect: any;
    x: number;
    y: number;
    colour: string;
    originX: number;
    originY: number;
    size: number;
    dx: number;
    dy: number;
    vx: number;
    vy: number;
    force: number;
    angle: number;
    distance: number;
    friction: number;
    ease: number;
  
    constructor(effect: any, x: number, y: number, colour: string) {
      this.effect = effect;
      this.x = Math.random() * this.effect.canvasWidth;
      this.y = y;
      this.colour = colour;
      this.originX = x;
      this.originY = y;
      this.size = this.effect.gap;
      this.dx = 0;
      this.dy = 0;
      this.vx = 0;
      this.vy = 0;
      this.force = 0;
      this.angle = 0;
      this.distance = 0;
      this.friction = Math.random() * 0.6 + 0.15;
      this.ease = Math.random() * 0.1 + 0.02;
    }
  
    draw() {
      // this.effect.context.fillStyle = this.colour;
      this.effect.context.fillRect(this.x, this.y, this.size, this.size);
    }
  
    update() {
      this.dx = this.effect.mouse.x - this.x;
      this.dy = this.effect.mouse.y - this.y;
      this.distance = this.dx * this.dx + this.dy * this.dy;
      this.force = -this.effect.mouse.radius / this.distance;
  
      if (this.distance < this.effect.mouse.radius) {
        this.angle = Math.atan2(this.dy, this.dx);
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
      }
  
      this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
      this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    }
  }