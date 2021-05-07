import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '@workspace/core-data';


@Injectable()
export class AuthGuard implements CanActivate {

    base_url: string;

    constructor(private router: Router
        , private userService: UserService) {}

    canActivate() {
        // Check to see if a user has logged in
        console.log(this.userService.currUser);
        if (this.userService.currUser){
            // If they do, return true and allow the user to load app
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(['/']);
        return false;
    }


}
