import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
	imports: [MatButtonModule, MatCheckboxModule,MatInputModule,  MatFormFieldModule],
	exports: [MatButtonModule, MatCheckboxModule, MatInputModule,  MatFormFieldModule],
})
export class MaterialModule{}