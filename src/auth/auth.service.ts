import { Injectable } from "@nestjs/common";

 
 
 @Injectable({})
export
 class AuthService {
  // Service methods will go here
  signup() {
    return { message: "Signup successful!" };3
  }
  signin() {
    return "Login successful!";
  }   
}