import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentService } from './core/services/payment.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ThemeService } from './core/services/theme.service';
import { Theme } from './core/models/Themes/Theme';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'FrontendAbstractFactory';
  form!: FormGroup;

  themes: string[] = ['light', 'dark'];
  selectedTheme!: Theme;

  paymentTypes: { key: string; value: string }[] = [
    { key: 'CREDIT_CARD', value: 'Tarjeta de Crédito' },
    { key: 'DEBIT_CARD', value: 'Tarjeta de Debito' },
    { key: 'PAYPAL', value: 'Paypal' },
  ];
  resultado: number = 0;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private themeService: ThemeService,
    private chdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initialForm();
    this.changeTheme('light');

    console.log(this.selectedTheme.createBackGround().StyleClass);
  }

  initialForm(): void {
    this.form = this.fb.group({
      cantPayment: ['', Validators.required],
      paymentType: ['CREDIT_CARD'],
    });
  }

  onThemeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;

    this.changeTheme(selectElement.value);
  }

  changeTheme(theme: string) {
    this.selectedTheme = this.themeService.ChangeTheme(theme);
  }

  onSubmit(): void {
    if (this.form.valid) {
      const cantidad = this.form.value.cantPayment;

      this.paymentService
        .CalculatePayment(this.form.value.paymentType, cantidad)
        .subscribe({
          next: (response) => {
            this.resultado = response;
          },
        });
    } else {
      console.log('Formulario inválido');
    }
  }
}
