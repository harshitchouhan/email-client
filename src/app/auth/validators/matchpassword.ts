import { Injectable } from '@angular/core';
import { FormGroup, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class Matchpassword implements Validator {
  validate(formGroup: FormGroup) {
    const { password, passwordConfirmation } = formGroup.value;

    if (password !== passwordConfirmation) {
      return { passwordsDontMatch: true };
    }

    return null;
  }
}
