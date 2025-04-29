import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Theme } from '../../core/models/ThemeAbstractFactory/Themes/Theme';
import { PaymentService } from '../../core/services/payment.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule, 
    ReactiveFormsModule, 
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  form!: FormGroup;

  themes: string[] = ['light', 'dark'];
  selectedTheme!: Theme;

  paymentTypes: { key: string; value: string }[] = [
    { key: 'CREDIT_CARD', value: 'Tarjeta de Crédito' },
    { key: 'DEBIT_CARD', value: 'Tarjeta de Debito' },
    { key: 'CASH', value: 'Efectivo' },
  ]
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

    console.log(this.selectedTheme.createBackGround().StyleClass)
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

  changeTheme(theme: string){
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
