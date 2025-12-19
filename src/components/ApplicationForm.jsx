import { useState } from "react";

const ApplicationForm = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "cef0a5c0-f03f-4787-b357-b33a9988f6b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
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
