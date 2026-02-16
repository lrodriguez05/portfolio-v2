import emailjs from "emailjs-com";

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w0vt5x7",
        "template_ngqiz8p",
        e.target,
        "aAjJKNDSMuh0pzv5z",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Correo enviado con éxito!");
        },
        (error) => {
          console.log(error.text);
          alert("Error al enviar el correo.");
        },
      );
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4 flex flex-col flex-1">
      <input
        className="border p-3 rounded-lg"
        type="text"
        name="user_name"
        placeholder="Nombre"
        required
      />
      <input
        className="border p-3 rounded-lg"
        type="email"
        name="user_email"
        placeholder="Correo electrónico"
        required
      />
      <textarea
        className="border p-3 rounded-lg h-32 max-h-40 resize-none"
        name="message"
        placeholder="Por favor, escriba su mensaje aquí..."
        rows={4}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}
export default ContactForm;
