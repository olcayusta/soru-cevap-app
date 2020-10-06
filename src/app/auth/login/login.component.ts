import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { TagService } from '../../shared/services/tag.service';

@Component({
  selector: 'app-login',
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
    private tagService: TagService,
    private router: Router,
    private title: Title
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.min(8)]]
    });
  }

  ngOnInit(): void {
    this.title.setTitle(`Oturum Aç - ${environment.appTitle}`);
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
          this.router.navigate([this.authService.redirectUrl]).then(value1 => {
            this.tagService.getFavoriteTags().subscribe(value2 => {
              localStorage.setItem('watchedTags', JSON.stringify(value2));
            });
          });
        }
      });
    }
  }
}
