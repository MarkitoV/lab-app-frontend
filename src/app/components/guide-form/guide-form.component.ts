import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';

import { GuideService } from '../../services/guide.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

// Custom options to configure the tooltip's default show/hide delays.
export const myCustomTooltipDefault: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 500,
  touchendHideDelay: 500
};

// Error when invalid control is ShowOnDirtyErrorStateMatcher, touched or submitted
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

// for the subject Select Option
export interface Subject {
  value: string;
  viewValue: string;
  name: string;
}

export interface SubjectGroup {
  disabled?: boolean;
  name: string;
  subject: Subject[];
}

@Component({
  selector: 'app-guide-form',
  templateUrl: './guide-form.component.html',
  styleUrls: ['./guide-form.component.css'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefault }
  ]
})
export class GuideFormComponent implements OnInit {

  // ********************************************
  // NOTE: VARIABLE DECLARATION OF THE COMPONENT
  // ********************************************

  // for validations
  requiredFormControl = new FormControl('', Validators.required);
  matcher = new MyErrorStateMatcher();
  // for guide image
  file: File;
  guideSelected: string | ArrayBuffer;
  // for the subject Select Option
  subjectControl = new FormControl();
  subjectGroups: SubjectGroup[] = [
    {
      name: 'Primer Semestre',
      subject: [
        { value: 'sis110-1', viewValue: 'SIS110', name: 'Técnicas de Programación I' },
        { value: 'sis141-2', viewValue: 'SIS141', name: 'Computación Básica' }
      ]
    },
    {
      name: 'Segundo Semestre',
      subject: [
        { value: 'fis205-3', viewValue: 'FIS205', name: 'Física I' },
        { value: 'sis211-4', viewValue: 'SIS211', name: 'Técnicas de Programación II' }
      ]
    },
    {
      name: 'Tercer Semestre',
      subject: [
        { value: 'fis308-5', viewValue: 'FIS308', name: 'Física II' },
        { value: 'sis312-6', viewValue: 'SIS312', name: 'Estructura de Datos' },
        { value: 'sis313-7', viewValue: 'SIS313', name: 'Diseño y Programación Gráfica' }
      ]
    },
    {
      name: 'Cuarto Semestre',
      subject: [
        { value: 'sis414-8', viewValue: 'SIS414', name: 'Tecnologías Emergentes' },
        { value: 'sis415-9', viewValue: 'SIS415', name: 'Bases de Datos' },
        { value: 'sis420-10', viewValue: 'SIS420', name: 'Sistemas Digitales' },
        { value: 'sis421-11', viewValue: 'SIS421', name: 'Electrónica' }
      ]
    },
    {
      name: 'Quinto Semestre',
      subject: [
        { value: 'sis518-12', viewValue: 'SIS518', name: 'Taller de Base de Datos' },
        { value: 'sis522-13', viewValue: 'SIS522', name: 'Arquitectura de Computadoras' },
        { value: 'sis523-14', viewValue: 'SIS523', name: 'Redes I' },
        { value: 'sis532-15', viewValue: 'SIS532', name: 'Sistemas Operativos' }
      ]
    },
    {
      name: 'Sexto Semestre',
      subject: [
        { value: 'sis624-16', viewValue: 'SIS624', name: 'Configuración de Servidores' },
        { value: 'sis625-17', viewValue: 'SIS625', name: 'Taller de Redes' },
        { value: 'sis645-18', viewValue: 'SIS645', name: 'Simulación de Sistemas' }
      ]
    },
    {
      name: 'Septimo Semestre',
      subject: [
        { value: 'sis710-19', viewValue: 'SIS710', name: 'Dinámica de Sistemas' },
        { value: 'sis719-20', viewValue: 'SIS719', name: 'Seminario de Sistemas' },
        { value: 'sis735-21', viewValue: 'SIS735', name: 'Auditoría de Sistemas' },
        { value: 'sis737-22', viewValue: 'SIS737', name: 'Seguridad de Sistemas' }
      ]
    },
    {
      name: 'Noveno Semestre',
      subject: [
        { value: 'sis939-23', viewValue: 'SIS939', name: 'Informática Forense' }
      ]
    },
    {
      name: 'Optativas',
      subject: [
        { value: 'opt001-24', viewValue: 'OPT001', name: 'Sistemas Distribuidos' },
        { value: 'opt002-25', viewValue: 'OPT002', name: 'Sistemas Expertos' },
        { value: 'opt003-26', viewValue: 'OPT003', name: 'Programación Concurrente y Distribuida' },
        { value: 'opt005-27', viewValue: 'OPT005', name: 'Robótica' },
        { value: 'opt006-28', viewValue: 'OPT006', name: 'Autómatas' },
        { value: 'opt007-29', viewValue: 'OPT007', name: 'Microcontroladores' },
        { value: 'opt008-30', viewValue: 'OPT008', name: 'Inteligencia Artificial' },
        { value: 'opt009-31', viewValue: 'OPT009', name: 'Bases de Datos III' },
        { value: 'opt010-32', viewValue: 'OPT010', name: 'Taller de Estructura de Datos' },
        { value: 'opt011-33', viewValue: 'OPT011', name: 'Compiladores' },
        { value: 'opt012-34', viewValue: 'OPT012', name: 'Sistemas de Información Empresariales' },
        { value: 'opt013-35', viewValue: 'OPT013', name: 'Sistemas de Información Geográficas' },
        { value: 'opt017-36', viewValue: 'OPT017', name: 'Antenas y Propagación' },
        { value: 'opt018-37', viewValue: 'OPT018', name: 'Telecomunicaciones' },
        { value: 'opt019-38', viewValue: 'OPT019', name: 'Telemática' },
        { value: 'opt020-39', viewValue: 'OPT020', name: 'Programación de Sockets' },
        { value: 'opt021-40', viewValue: 'OPT021', name: 'Tráfico y Colisiones' },
        { value: 'opt022-41', viewValue: 'OPT022', name: 'Teoría de Control' }
      ]
    }
  ];
  // Datepicker minimun date
  minDate = new Date();
  // defaults values for the Datepickers
  date = new FormControl(new Date());
  // a week in miliseconds
  oneWeek = 1000 * 60 * 60 * 24 * 7;
  nextWeek = this.minDate.getTime() + this.oneWeek;
  date1 = new FormControl(new Date(this.nextWeek));

  // ********************************
  // NOTE: FUNCTIONS OF THE COMPONENT
  // ********************************

  constructor(private guideService: GuideService, private router: Router) { }
  
  ngOnInit() {
  }
  
  onGuideSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.guideSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadGuide(title: HTMLInputElement, description: HTMLTextAreaElement, subjectCode: HTMLInputElement, subjectName: HTMLInputElement, numberLab: HTMLInputElement, semester: HTMLInputElement, docent: HTMLInputElement, publishDate: HTMLInputElement, deliveryDate: HTMLInputElement, workingTime: HTMLInputElement, bodyPath: HTMLInputElement, codePath: HTMLInputElement): boolean {
    this.guideService.createGuide(title.value, description.value, subjectCode.value, subjectName.value, numberLab.value, semester.value, docent.value, publishDate.value, deliveryDate.value, workingTime.value, bodyPath.value, codePath.value, this.file)
      .subscribe(res => {
        this.router.navigate(['/guides']);
      }, err => console.log(err));
    return false;
  }
}

// *********************
// NOTE: REFERENCE LINKS
// *********************

// https://stackblitz.com/angular/aaadrnxeyjqd?file=src%2Fapp%2Fselect-optgroup-example.ts