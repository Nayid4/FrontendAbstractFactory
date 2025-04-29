import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormularioUtilService } from '../../../core/services/formulario-util.service';
import { PDFReportOptions } from '../../../core/models/PDFReportOptions.model';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-form-pdf',
  standalone: true,
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './form-pdf.component.html',
  styleUrl: './form-pdf.component.css'
})
export class FormPDFComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() cerrar = new EventEmitter<boolean>();
  @Output() registrar = new EventEmitter<PDFReportOptions>();

  formulario!: FormGroup;

  titulo: string = 'Generar Reporte PDF';
  themes = ['LIGHT', 'DARK'];
  formats = ['A4', 'LETTER'];

  constructor(
    private servicioFormulario: FormularioUtilService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.formulario = this.fb.group({
      includeLogo: [true],
      title: ['', Validators.required],
      includePaymentDetails: [true],
      includeUserInfo: [true],
      theme: ['LIGHT', Validators.required],
      includeTimestamp: [true],
      footerMessage: [''],
      format: ['A4', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.formulario.invalid) {
      this.servicioFormulario.verificarFormulario(this.formulario);
      return;
    }

    const opciones: PDFReportOptions = this.formulario.value;
    this.registrar.emit(opciones);
  }

  cerrarDialog(): void {
    this.cerrar.emit(false);
    this.formulario.reset();
  }

  campoInvalido(nombreCampo: string): boolean {
    return this.servicioFormulario.campoInvalido(this.formulario, nombreCampo);
  }
}
