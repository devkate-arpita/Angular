import { Component } from '@angular/core';
import { AuthService } from '../signup/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin-user',
  templateUrl: './login-admin-user.component.html',
  styleUrls: ['./login-admin-user.component.css']
})
export class LoginAdminUserComponent {

  email='';
password='';

constructor(private authservices:AuthService,private router:Router){

}

login(){
  this.authservices.login(this.email,this.password).subscribe(users=>{
     let user:any;
     let i

     for(i=0; i< users.length;i++){
      if(users[i].email==this.email && users[i].password == this.password){
        user = users[i];
        break;
      }

     }

     if (user) {
      localStorage.setItem('user', JSON.stringify(user));

     
      if (user.role === 'admin') {
        this.router.navigate(['task/admin-dashboard']);
      } else {
        this.router.navigate(['task/user-dashboard']);
      }
    } else {
      alert('Invalid Credentials');
    }
  }, error => {
    console.error('Error fetching users:', error);
    alert('Something went wrong. Please try again.');
  });
}

goToSignup() {
  this.router.navigate(['task/signup']);
}
}
