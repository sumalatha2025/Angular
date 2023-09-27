import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
contactForm:any;
submitted = false;
ngOnInit(){
this.contactForm = new FormGroup({
  firstname: new FormControl("", [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]),
  lastname : new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
  phonenumber: new FormControl("", [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]{10}")]),
  email: new FormControl("",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
});
}
formData(){
  console.log(this.contactForm);
  this.submitted=true;
}
}
