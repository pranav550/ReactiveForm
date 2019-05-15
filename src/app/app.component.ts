import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "angular12";
  form = new FormGroup(
    {
      organizationId: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
      organizationName: new FormControl("", Validators.required),
      country: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      cpassword: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ])
    },
    this.passwordMatchValidator
  );

  passwordMatchValidator(g: FormGroup) {
    return g.get("password").value === g.get("cpassword").value
      ? null
      : { mismatch: true };
  }
  constructor() {}

  get firstname() {
    return this.form.get("firstName");
  }
  ngOnInit() {}

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
}
