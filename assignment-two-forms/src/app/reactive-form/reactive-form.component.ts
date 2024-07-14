import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  constructor(public _fb: FormBuilder) {
    this.userForm = this._fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      skills: this._fb.array([]), // Initialize FormArray for skills
    });
  }

  onSubmit() {
    console.log('userform=', this.userForm);
    this.userForm.markAllAsTouched();
  }

  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
