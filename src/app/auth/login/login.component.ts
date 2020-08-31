import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'qa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  submitted = false;

  hide = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private title: Title
  ) {
    this.form = fb.group({
      email: ['olcay@mail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.min(8)]]
    });
  }

  ngOnInit(): void {
    this.title.setTitle(`Oturum aç - ${environment.appTitle}`);
  }

  formSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      const {email, password} = this.form.value;

      this.authService.login(email, password).subscribe(value => {
        console.log(value);
        this.submitted = false;
        // @ts-ignore
        if (value.error) {
          alert('error');
        } else {
          // Redirect the user
          this.router.navigate([this.authService.redirectUrl]);
        }
      });
    }
  }
}
