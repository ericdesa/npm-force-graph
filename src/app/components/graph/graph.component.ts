
import { Component, ViewChild, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Particle } from '../../models/particle';
import { Coordinates } from '../../models/coordinates';

import { DependencyService } from './../../services/dependency.service';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {

    // template
    @ViewChild('canvas') canvas: ElementRef;
    protected ctx: CanvasRenderingContext2D;
    protected width = window.innerWidth;
    protected height = window.innerHeight;

    // data
    protected particles: Particle[] = [];
    protected mouse: Coordinates = new Coordinates();

    // setup
    // -----------------------------------------------------

    constructor(
        protected el: ElementRef,
        protected dependencyService: DependencyService) { }

    ngOnInit() {
        this.setupCanvasContext();
        this.setupMouseHandler();

        this.setupParticles();

        this.renderLoop();
    }

    protected setupCanvasContext() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
    }

    protected setupMouseHandler() {
        this.canvas.nativeElement.addEventListener('mousemove', (evt) => {
            let relativeBounds = this.canvas.nativeElement.getBoundingClientRect();
            this.mouse.x = evt.clientX - (relativeBounds.x || relativeBounds.left);
            this.mouse.y = evt.clientY - (relativeBounds.y || relativeBounds.top);
        });
    }

    protected setupParticles() {

    }

    // Render
    // -----------------------------------------------------

    protected renderLoop() {
        this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

        this.draw();
        this.live();

        window.requestAnimationFrame(() => this.renderLoop());
    }

    protected draw() {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';

        for (let particle of this.particles) {
            particle.draw(this.ctx);
        }
    }

    protected live() {
        for (let particle of this.particles) {
            particle.live();
        }
    }
}
