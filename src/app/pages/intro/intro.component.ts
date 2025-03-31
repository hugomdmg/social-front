import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Point } from 'src/app/models/models';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements AfterViewInit {

  @ViewChild("myCanvas", { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  positionX = 1;
  positionY = 1;
  directionX = Math.random() * 10;
  directionY = Math.random() * 10;

  points: Point[] = [];

  createPoints() {
    for (let i = 0; i < 50; i++) {
      this.points.push({
        x: Math.random() * 1000,
        y: Math.random() * 550,
        vx: Math.random() * 5,
        vy: Math.random() * 5,
        color: `rgb(${Math.random()*250}, ${Math.random()*250}, ${Math.random()*250})`,
        size: Math.random()*20
      });
    }
  }

  ngAfterViewInit() {
    this.createPoints();
    this.animate();
  }

  draw() {
    const ctx = this.canvas.nativeElement.getContext("2d");

    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

      this.points.forEach(point => {
        ctx.strokeStyle = point.color;
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
        ctx.stroke();

        point.x += point.vx;
        point.y += point.vy;

        if (point.x >= 1000 || point.x <= 0) {
          point.vx = -point.vx;
        }
        if (point.y >= 550 || point.y <= 0) {
          point.vy = -point.vy;
        }
      });
    }
  }

  animate() {
    this.draw();

    requestAnimationFrame(() => this.animate());
  }
}
