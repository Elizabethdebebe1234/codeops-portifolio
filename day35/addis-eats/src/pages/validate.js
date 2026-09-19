export function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.phone.trim()) {
    errors.phone = "TeleBirr phone number is required.";
  } else if (!/^(?:\+251|0)9\d{8}$/.test(form.phone)) {
    errors.phone =
      "Enter a valid Ethiopian phone number such as 0912345678 or +251912345678.";
  }

  if (!form.area) {
    errors.area = "Please select a delivery area.";
  }

  if (form.notes.length > 300) {
    errors.notes = "Notes must be 300 characters or less.";
  }

  return errors;
}
