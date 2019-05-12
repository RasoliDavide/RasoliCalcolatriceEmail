import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {
  @Input() numeri : number;
  vis : Boolean = true;
  mf : FormGroup;
  constructor(fb : FormBuilder) {
      this.mf = fb.group({
        email : ['', [Validators.email, Validators.required]],
        }
      )
   }
  daA() :  String
  {
    let a = new String();
    for(let i = this.numeri[0]; i <= this.numeri[1]; i++)
    {
      a += i;
      if(i != this.numeri[1])
      {
        a += ', ';
      }
        
    }
    return a;
  }
  ngOnInit() {
  }
  sendEmail(a : HTMLInputElement)
  {
      console.log("Il risultato è stato inviato all'email: " + a.value);
  }
  visONo()
  {
    this.vis = !this.vis;
  }
}
/*

*/
