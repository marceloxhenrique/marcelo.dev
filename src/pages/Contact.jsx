import styles from "./Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [information, setInformation] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rl0z4w9",
        "template_3dso74n",
        form.current,
        "cFLjigvf38V-v9y9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInformation({...information, from_name: "", from_email: "", message: ""});
  };

  return (
    <div className={styles.contactContainer}>
      {information.from_name && console.log(information.from_name)}
      <div className={styles.boxContainer}>
        <div className={styles.text}>
          <h1>Contact</h1>
          Hello there want to hit me up just fill up the form below I will
          answer as soon as possible.
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            min="2"
            required
            value={information.from_name}
            onChange={(e) => {
              setInformation({ ...information, from_name: e.target.value });
            }}
          />
          <label>Email</label>
          <input
            type="email"
            name="from_email"
            required
            value={information.from_email}
            onChange={(e) =>
              setInformation({ ...information, from_email: e.target.value })
            }
          />
          <label>Message</label>
          <textarea
            name="message"
            required
            value={information.message}
            onChange={(e) =>
              setInformation({ ...information, message: e.target.value })
            }
          />
          <input type="submit" value="Send" id={styles["submitButton"]} />
        </form>
      </div>
    </div>
  );
}
// export default function Contact() {
//   return (
//     <div className={styles.contactContainer}>
//       Contact
//     </div>
//   )
// }
