import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,
    private auths: AuthService,
    private router: Router,
    private dialogref: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  login !: FormGroup;

  initUserForm(): void {
    this.login = this.fb.group({
      email: [null, [Validators.required, Validators.email], null],
      password: [null, [Validators.required, Validators.minLength(5)], null]

    })
  }

  get f() {
    return this.login.controls;
  }

  getC(control: any) {             //getting control
    return this.login.get(control)
  }

  getE(control: any) {          //getting control errors
    return this.login.get(control)?.['errors'];
  }

  onsubmit(r: any) {
    if (this.login.valid) {
      this.auths.Login(this.login.value).subscribe(
        (result) => {
          this.router.navigate(['properties']);
        },
        (err: Error) => {
          alert(err.message)
        }
      )
      console.log(r.value);
      this.dialogref.close();
      r.reset();
    }
  }

}
