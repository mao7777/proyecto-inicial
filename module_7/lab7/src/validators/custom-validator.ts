import { FormControl } from "@angular/forms";

interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidators {
 
    public static checkPatternCharacterValidator(control: FormControl): ValidationResult {
        if(!control.value.matcth(/^123456/)) {
        	return {checkPatternCharacterValidator: true};
        }
    }
} 