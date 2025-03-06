import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, signInWithPopup, User } from 'firebase/auth';
import { Auth, signInWithEmailAndPassword,sendPasswordResetEmail } from '@angular/fire/auth';
import{sendEmailVerification} from '@angular/fire/auth'
import{GoogleAuthProvider} from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private auth:Auth,private router:Router) {
    
   }

  
 

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        if (res.user?.emailVerified) {
          localStorage.setItem('token', 'true');
          alert("Login successful!");
          this.router.navigate(['/task/dashboard']);
        } else {
          alert("Please verify your email before logging in.");
          this.auth.signOut();
          this.router.navigate(['/task/firebase-verifyemail']);
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
        alert(`Something went wrong: ${error.message}`);
        this.router.navigate(['/firebase-login']);
      });
  }
  
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        alert("Registration successful! Verification email sent.");
        if (res.user) {
          this.sendEmailForVarification(res.user);
        }
  
        // 🔹 Sign out user after registration to prevent login without verification
        return this.auth.signOut().then(() => {
          this.router.navigate(['/task/firebase-login']);
        });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        alert(`Error: ${error.message}`);
        this.router.navigate(['/task/firebase-register']);
      });
  }

  logout(){
    this.auth.signOut()
    .then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/task/firebase-login']);
    },err=>{
      alert(err.message);
    })
  }

  forgotPassword(email: string) {
    sendPasswordResetEmail(this.auth,email)
      .then(() => {
        this.router.navigate(['/task/firebase-verifyemail']);
      })
      .catch((error) => {
        console.error('something went wrong',error);
      });
  }

  sendEmailForVarification(user: User) {
    sendEmailVerification(user) // ✅ Corrected function call
      .then(() => {
        alert("Verification email sent. Please check your inbox.");
        this.router.navigate(['/task/firebase-verifyemail']);
      })
      .catch((error) => {
        console.error("Email verification error:", error);
        alert("Something went wrong. Unable to send verification email.");
      });
  
    }

  googleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(this.auth, provider)
      .then((res) => {
        if (res.user) {
          localStorage.setItem('token', JSON.stringify(res.user.uid));
          alert("Google Sign-In successful!");
          this.router.navigate(['task/dashboard']);
        }
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        alert(`Error: ${error.message}`);
      });
  }



}





 // login(email: string, password: string) {
  //   signInWithEmailAndPassword(this.auth, email, password)
  //     .then((res) => {
  //       localStorage.setItem('token', 'true');
  //       alert("Login successful");

  //       if(res.user?.emailVerified == true){
  //         this.router.navigate(['/task/dashboard']);
  //       }else{
  //         this.router.navigate(['task/firebase-verifyemail'])
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Login Error: ", error);
  //       alert("Something went wrong. Please check your credentials.");
  //       this.router.navigate(['/firebase-login']);
  //     });
  // }

// register(email: string, password: string) {
  //   return createUserWithEmailAndPassword(this.auth, email, password)
  //     .then((res) => {
  //       alert("Registration successful");
  //       this.router.navigate(['/task/firebase-login']);
  //       if (res.user) {
  //         this.sendEmailForVarification(res.user); // ✅ Pass the user object
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Registration error:', error);
  //       this.router.navigate(['task/firebase-register']);
  //     });
  // }



    // sendEmailForVarification(user:any){
  //   user.sendEmailVerification()
  //   .then((res:any)=>{
  //     this.router.navigate(['task/firebase-verifyemail'])
      
  //   },(err:any)=>{
  //     alert("something went wrong, not able to send mail to your registered email");
  //   })

  // }

  // googleSignIn(){
  //   return this.auth.signInWithPopup(new GoogleAuthProvider)
  //   .then((res:any)=>{
  //     this.router.navigate(['task/dashboard'])
  //     localStorage.setItem('token',JSON.stringify(res.user?.uid));

  //   },err=>{
  //     console.error(err.message);
  //   })
  // }
  