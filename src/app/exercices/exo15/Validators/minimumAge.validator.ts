import { AbstractControl, ValidationErrors } from "@angular/forms";

export function minimumAgeValidator (control: AbstractControl): ValidationErrors | null {

    if (control.value) {

        const now = new Date();
        const selectedDate = new Date(control.value);

        const age = now.getFullYear() - selectedDate.getFullYear();

        if (age < 18) {
            return { minimumAge: 'Vous devez avoir 18 ans pour continuer.' };
        }

        return null;

    }

    return { minimumAge: 'Champ obligatoire' };

}