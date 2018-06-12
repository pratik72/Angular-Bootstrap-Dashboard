import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl,  Validators   } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  userForm : FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.userForm = new FormGroup({
      name : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
      department : new FormControl(),
      comment : new FormControl()
    });

    // this.userForm = this.formBuilder.group({
    //   name : ['', Validators.required ],
    //   email : ['', Validators.required ],
    //   password : ['', Validators.required ],
    //   department : ['', Validators.required ],
    //   comment : ['', Validators.required ]
    // });

  }

}
