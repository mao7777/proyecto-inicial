import { FormControl } from "@angular/forms";

interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidators {
 
    public static checkPatternCharacterValidator(control: FormControl): ValidationResult {
        var valid = /^123/.test(control.value);
        if (valid) {
            return {checkPatternCharacterValidator: true};
        }
        return null;
    }
}