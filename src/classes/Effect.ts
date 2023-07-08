import Particle from "./Particle";

export class Effect {
    context: CanvasRenderingContext2D;
    canvasWidth: number;
    canvasHeight: number;
    maxLineHeight: number;
    lineHeight: number;
    textX: number;
    textY: number;
    particles: any;
    gap: number;
    mouse: {
      radius: number;
      x: number;
      y: number;
    };
    canvasID : string;
  
    constructor(context: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number, canvasID : string) {
      // Canvas values
      this.context = context;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.maxLineHeight = this.canvasWidth * 0.15;
      this.lineHeight = this.maxLineHeight < 96 ? 96 : this.maxLineHeight;
      this.textX = this.canvasWidth / 2;
      this.textY = this.canvasHeight / 2 - this.lineHeight / 2;
      // Particle Values
      this.particles = [];
      this.gap = 2;
      this.mouse = {
        radius: 1000,
        x: 0,
        y: 0,
      };

      this.canvasID = canvasID;

      document.getElementById(this.canvasID)?.addEventListener('mousemove', (e: any) => {
        const pageOffset = e.currentTarget.getBoundingClientRect();
        this.mouse.x = e.x - pageOffset.left;
        this.mouse.y = e.y - pageOffset.top;
      });
    }
  
    createText(textArr: string[]) {
      this.context.fillStyle = 'black || #fde9ff';
      this.context.strokeStyle = 'black';
      this.context.lineWidth = 2;
      this.context.textAlign = 'center';
  
      textArr.forEach((word, index) => {
        if (index === 1) {

          if (this.canvasWidth <= 1000) {
            this.context.font = 'clamp(2rem, 5vw, 4.5rem) Lusitana';
            this.context.fillText(word, this.textX, this.textY + index * this.lineHeight * 1);
            return;
          }

          this.context.font = 'clamp(2rem, 5vw, 5rem) Lusitana';
          this.context.fillText(word, this.textX, this.textY + index * this.lineHeight * 1);
          return;
        } else {

          if (this.canvasWidth <= 1000) {
            this.context.font = 'clamp(4rem, 15vw, 10rem) Lusitana';
            this.context.fillText(word, this.textX, this.textY + index * this.lineHeight * 1);
            return;
          }
        }

        this.context.font = 'bold clamp(6rem, 0rem + 15vw, 15rem) Raleway';
        this.context.fillText(word, this.textX, this.textY + index * this.lineHeight);
      });
    }
  
    convertToParticles() {
      this.particles.length = 0;
      const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      for (let y = 0; y < this.canvasHeight; y += this.gap) {
        for (let x = 0; x < this.canvasWidth; x += this.gap) {
          const index = (y * this.canvasWidth + x) * 4;
          const alpha = pixels[index + 3];
          if (alpha > 0) {
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            const colour = 'rgb(' + red + ',' + green + ',' + blue + ')';
            this.particles.push(new Particle(this, x, y, colour));
          }
        }
      }
    }
  
    render() {
      this.particles.forEach((particle: any) => {
        particle.update();
        particle.draw();
      });
    }
  
    resize(width: number, height: number) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.maxLineHeight = this.canvasWidth * 0.15;
      this.lineHeight = this.maxLineHeight < 96 ? 96 : this.maxLineHeight;
      this.textX = this.canvasWidth / 2;
      this.textY = this.canvasHeight / 2 - this.lineHeight / 2;
    }
  }