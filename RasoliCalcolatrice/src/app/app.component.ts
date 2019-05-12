import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RasoliCalcolatrice';
  form : FormGroup;
  numeri : number[];
  constructor(fb : FormBuilder)
  {
    this.form = fb.group(
      {
        p : ['', Validators.required],
        s : ['', Validators.required]
      }
    );
    
  }
  somma()
  {
    if(this.form.valid)
    {
      this.numeri = new Array<number>();
      this.numeri.push(this.form.controls['p'].value);
      this.numeri.push(this.form.controls['s'].value);
      let c = this.numeri[0] + this.numeri[1];
      this.numeri.push(c);
    }
  }
  sottrazione()
  {
    if(this.form.valid)
    {
      this.numeri = new Array<number>();
      this.numeri.push(this.form.controls['p'].value);
      this.numeri.push(this.form.controls['s'].value);
      let c = this.numeri[0] - this.numeri[1];
      this.numeri.push(c);
    }
  }
  moltiplicazione()
  {
    if(this.form.valid)
    {
      this.numeri = new Array<number>();
      this.numeri.push(this.form.controls['p'].value);
      this.numeri.push(this.form.controls['s'].value);
      let c = this.numeri[0] * this.numeri[1];
      this.numeri.push(c);
    }
  }
  divisione()
  {
    if(this.form.valid)
    {
      this.numeri = new Array<number>();
      this.numeri.push(this.form.controls['p'].value);
      this.numeri.push(this.form.controls['s'].value);
      let c = this.numeri[0] / this.numeri[1];
      this.numeri.push(c);
    }
  }
}
