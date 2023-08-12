import { Component } from '@angular/core';
import { userRegister } from './userRegister';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userServices';

@Component({
  selector: 'app-user-register',
  templateUrl:'user-register.component.html',
  styles: []
})
export class UserRegisterComponent {

userFormRegister: FormGroup;
user : userRegister;
errors: any[] = [];

constructor(private fb: FormBuilder,
  private router: Router,
  private userService: UserService) { }

ngOnInit() {
  this.userFormRegister = this.fb.group({
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });
}

register() {
  if (this.userFormRegister.valid && this.userFormRegister.dirty) {

    var _user = this.userFormRegister.value;
    //let _user = Object.assign({}, this.user, this.userFormRegister.value);

    this.userService.register(_user)
      .subscribe(
        result => { this.onSaveComplete(result) },
        fail => { this.onError(fail) }
      );
  }
}

/*register(){
  this.userService.registerT(this.userFormRegister.value).subscribe(result => {  });
  //this.userFormRegister.reset();
}*/


onSaveComplete(response: any) {
  this.userService.persistirUserApp(response);
  this.router.navigateByUrl('/blacklist');
}

onError(fail: any) {
  this.errors = fail.error.errors;
}

}
