import { useState } from "react";

const ApplicationForm = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");

  const formData = new FormData(event.target);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbznbmxiCWMATYbTxyl4cCOKtC01FU3ID5OZID81SOTPFFYPaNWOTaQw8XuRsnIVRijl/exec",
      {
        method: "POST",
        body: formData,
        mode: "no-cors", // 🔑 KEY LINE
      }
    );

    setResult("Form submitted successfully!");
    event.target.reset();
  } catch (error) {
    setResult("Error submitting form");
  }
};



  return (
    <section className="application-form">
      <h2>Admission Enquiry Form</h2>

      <form onSubmit={onSubmit}>

  <input type="text" name="name" placeholder="Full Name" required />
  <input type="email" name="email" placeholder="Email Address" required />
  <input type="tel" name="phone" placeholder="Mobile Number" required />

  <select name="course" required>
    <option value="">Select Course</option>
    <option>B.Tech</option>
    <option>M.Tech</option>
    <option>BBA</option>
    <option>MBA</option>
    <option>UI / UX Design</option>
  </select>

  <select name="qualification" required>
    <option value="">Highest Qualification</option>
    <option>12th Pass</option>
    <option>12th Appearing</option>
    <option>Graduate</option>
    <option>Diploma</option>
  </select>

  <textarea name="message" placeholder="Your Message (optional)" />

  <button type="submit">Submit Application</button>
  <span>{result}</span>
</form>


    </section>
  );
};

export default ApplicationForm;
