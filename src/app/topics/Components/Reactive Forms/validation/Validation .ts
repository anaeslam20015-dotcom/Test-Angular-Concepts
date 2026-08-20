import { AbstractControl, ValidationErrors } from '@angular/forms';
export function CheckName(item: AbstractControl): ValidationErrors | null {
  if (/[0-9]/.test(item.value)) {
    return { Check: true };
  }
  return null;
}
