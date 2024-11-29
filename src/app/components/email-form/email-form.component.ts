import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent {
  emailForm: FormGroup;
  message: string = ''; 

  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendMessage() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      this.message = `Mensaje enviado correctamente a: ${email}`;
    } else {
      this.message = 'Por favor, ingrese un correo válido.';
    }
  }
}
