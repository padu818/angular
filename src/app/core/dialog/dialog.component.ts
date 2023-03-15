import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {


    constructor(private primengConfig: PrimeNGConfig) {}

/*     ngOnInit() {
      this.primengConfig.ripple = true;
    }

    displayModal!: boolean;
    message!: string;
    duration!: number;
    title!:string;

    open(message: string,title:string, duration: number) {
        this.displayModal = true;
        this.message = message;
        this.duration = duration;
    }
*/
} 