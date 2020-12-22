import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from './../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: FormControl) => {
    const { value } = control;
    return this.authService.usernameAvailable(value).pipe(
      catchError((err) => {
        console.log(err);
        return of({ nonUniqueUsername: true });
      })
    );
  };
}
