import emailjs from "@emailjs/browser";
import { ChangeEvent, useState } from "react";

export default function Contato() {
  const [formValue, SetformValue] = useState({
    Nome: "",
    Sobrenome: "",
    Email: "",
    Telefone: "",
    Assunto: "",
    Mensagem: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    SetformValue({ ...formValue, [name]: value });
  };
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    SetformValue({ ...formValue, Mensagem: value });
  };
  const clearForm = () => {
    SetformValue({
      Nome: "",
      Sobrenome: "",
      Email: "",
      Telefone: "",
      Assunto: "",
      Mensagem: "",
    });
  };
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f307wt1",
        "template_3wvaio3",
        e.currentTarget,
        "p_7cgeywU21K3wVL5"
      )
      .then(
        () => {
          alert("Messagem enviada com sucesso!");
          clearForm();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <section id="Contact" className="sectionContact">
      <h1 className="contactTitle">Fale comigo</h1>
      <p className="contactDescription">Envie-me uma mensagem para que possamos conversar melhor.</p>
      <form onSubmit={sendMessage} className="formContact">
        <div className="sectionInfo">
          <label htmlFor="Nome">Nome</label>
          <input
            type="text"
            name="Nome"
            id="Nome"
            value={formValue.Nome}
            onChange={handleInput}
            required
          />
        </div>
        <div className="sectionInfo">
          <label htmlFor="Sobrenome">Sobrenome</label>
          <input
            type="text"
            name="Sobrenome"
            id="Sobrenome"
            value={formValue.Sobrenome}
            onChange={handleInput}
            required
          />
        </div>
        <div className="sectionInfo">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            id="Email"
            value={formValue.Email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="sectionInfo">
          <label htmlFor="Telefone">Telefone</label>
          <input
            type="tel"
            name="Telefone"
            id="Telefone"
            value={formValue.Telefone}
            onChange={handleInput}
            required
          />
        </div>
        <div className="sectionInfo-assunto">
          <label htmlFor="Assunto">Assunto</label>
          <input
            type="text"
            name="Assunto"
            id="Assunto"
            value={formValue.Assunto}
            onChange={handleInput}
            required
          />
        </div>
        <div className="sectionInfo-textarea">
          <textarea
            name="Mensagem"
            id="Mensagem"
            cols={60}
            rows={10}
            required
            placeholder="Digite sua mensagem..."
            value={formValue.Mensagem}
            onChange={handleMessage}
          ></textarea>
        </div>
        <button className="btnContact" type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}
