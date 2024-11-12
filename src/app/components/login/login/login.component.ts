import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', // Asegúrate de que la ruta sea correcta
  styleUrls: ['./login.component.css']    // Asegúrate de que la ruta sea correcta
})
export class LoginComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  // Método para manejar el envío del formulario
  onSubmit() {
    // Aquí podrías agregar la lógica de envío o conexión con un backend
    console.log('Formulario enviado');
    console.log('Formulario TF');
    console.log(`Username: ${this.username}, Email: ${this.email}, Password: ${this.password}`);

    // Puedes implementar la lógica de autenticación aquí, por ejemplo, enviando los datos a un backend
  }
  // Puedes implementar la lógica de autenticación aquí, por ejemplo, enviando los datos a un backend
  //ógica de autenticación aquí, por ejemplo, enviando los datos a un backend

}








