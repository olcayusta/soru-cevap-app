import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@shared/services/user.service';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Component({
  selector: 'qa-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private title: Title
  ) {
    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.min(8)]],
      displayName: ['Olcay Usta'],
      picture: ['https://resources.tidal.com/images/3f5fb645/46b8/44c4/9721/e60ec54c2fa1/320x320.jpg'],
    });
  }

  ngOnInit(): void {
    this.title.setTitle(`Kayıt ol - ${environment.appTitle}`);
  }

  submit(): void {
    const {email, password, displayName, picture} = this.form.value;
    this.userService.createUser(email, password, displayName, picture).subscribe(value => {
      console.log('Uye kaydedildi!');
    });
  }
}
