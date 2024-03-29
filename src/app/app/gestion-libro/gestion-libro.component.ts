import { Component } from '@angular/core';
import { GestionLibroService } from '../../gestion-libro.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LibroRegModel } from '../../models/libro.reg.model';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gestion-libro',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './gestion-libro.component.html',
  styleUrl: './gestion-libro.component.scss'
})
export class GestionLibroComponent {
  public formOne!: FormGroup;
  formOnes: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
  });
  submitted = false;

  constructor(private gestionLibroService: GestionLibroService,
    private form: FormBuilder) { }

  ngOnInit(): void {
    this.formOnes = this.form.group({
      title: [{ value: '', disabled: false }, [Validators.required]],
      author: [{ value: '', disabled: false }, [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log("aaaaaa ");
    console.log("kikik " + this.formOnes.get('author')!.value);
    const lib: LibroRegModel = new LibroRegModel();
    lib.title = this.formOnes.get('title')!.value,
      lib.author = this.formOnes.get('author')!.value;

    this.gestionLibroService.registrarLibro(lib).subscribe({
      next: value => console.log("NEXT" + value),
      error: error => console.error("ERROR" + error),
      complete: () => console.log('complete')
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formOnes.controls;
  }

}
