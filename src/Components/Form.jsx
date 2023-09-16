import React, {useState} from "react";


const Form = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const validateName = () => {

    const name = formData.name ? formData.name.trim() : '';

    if (name.length < 5) {
      return alert("El nombre debe tener más de 5 caracteres");
    }
    return true;
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(formData.email)){
      return alert("El e-mail tiene un formato incorrecto");
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateName() && validateEmail()) {

      console.log("Formulario OK");

      const span = document.getElementById("confirmaMail");

      if (span) {
        span.style.display = "block"; // Muestra el span
      }

    } else {
      const span = document.getElementById("confirmaMail");

      if (span) {
        span.style.display = "none"; // Oculta el span
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input-form"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-form"
          onChange={handleChange}
        />
        <button type="submit" className="btn-form">
          Enviar
        </button>
      </form>
      <span id="confirmaMail" style={{ display: "none" }}>Muchas Gracias {formData.name}, nos pondremos en contacto con usted.</span>
    </div>
  );
};

export default Form;
