import { useState } from "react";

const ApplicationForm = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending...");

  const formData = new FormData(event.target);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbwkqsy7xTHvtCq8HpQCO0iIkbfz_3QXnnW7nJYs5Vubg_b7nfWE0soyvFlNGqeR04U/exec",
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
  <input type="text" name="city" placeholder="City" required />

  <select name="specialization" required>
    <option value="">Select Specializations</option>
    <option>Fashion Design</option>
    <option>Interior Design</option>
    <option>Communication/Graphic Design</option>
    <option>Product Design</option>
    <option>Animation and VFX</option>
    <option>UI / UX Design</option>
    <option>Textile Design</option>
  </select>



  <textarea name="message" placeholder="Your Message (optional)" />

  <button type="submit">Submit Application</button>
  <span>{result}</span>
</form>


    </section>
  );
};

export default ApplicationForm;
