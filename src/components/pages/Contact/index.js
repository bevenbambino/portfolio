import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setstatus] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // checking to see if all input fields are full 
    if (email && name && message) {
      // checking to make sure email is valid 
      if (checkEmail(email)) {
        const encodedSubject = "Email From Portfolio"
        const encodedBody = `${message} - from ${name} ${email}`

        // const link = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=arelyrivera1996@gmail.com&su=${encodedSubject}&body=${encodedBody}`

        // hyper link to open mail client and populate subject and body --- still working on this
        const link = `mailto:kevenchito24@icloud.com?
        subject=${encodedSubject}&amp;
        body=${encodedBody}`

        window.location = link;

      } else {
        setstatus("email is invalid")
      }
    } else {
      setstatus("all input fields need to be filled ")
    }
  };

  const checkEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="contact-me">
      <h1 className="text-center">Contact Me</h1>

      {/* form  */}
      <form className="px-5 py-1">
        {/* label name, input name, label email, input email, label message, input text area, submit btn*/}
        <div className="form-group ">
          <label for="name" className="py-1 ">Name</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            class="form-control"
          />
        </div>

        <div className="form-group">
          <label for="email" className="py-1 ">Email address</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            class="form-control"
          />
        </div>

        <div className="form-group">
          <label for="message" className="py-1 ">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            class="form-control"
            rows="3"
          />
        </div>

        <button
          type="submit"
          onClick={handleFormSubmit}
          class="btn btn-primary mt-2"
        >
          Submit
        </button>
      </form>

      <p>{status}</p>

      {/* contact information */}

      <p>
        Email :
        <a href="mailto:Kevenchito24@icloud.com" className="p-1">
          Kevenchito24@icloud.com
        </a>
      </p>

      <p>
        GitHub :
        <a
          href="https://github.com/bevenbambino"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1"
        >
          https://github.com/bevenbambino
        </a>
      </p>

    </div>
  );
}
