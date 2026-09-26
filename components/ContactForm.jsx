"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Website enquiry from ${name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:hello@sawariacademy.in?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <Field label="Your name">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-2 border-ink/15 bg-paper px-4 py-2.5 font-body text-sm text-ink outline-none focus:border-ink"
          placeholder="Full name"
        />
      </Field>

      <Field label="Your email">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-2 border-ink/15 bg-paper px-4 py-2.5 font-body text-sm text-ink outline-none focus:border-ink"
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Message">
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none border-2 border-ink/15 bg-paper px-4 py-2.5 font-body text-sm text-ink outline-none focus:border-ink"
          placeholder="How can we help?"
        />
      </Field>

      <button
        type="submit"
        className="mt-2 w-full bg-plate-yellow px-6 py-3 font-display text-base font-700 tracking-tight text-asphalt transition-transform hover:-translate-y-0.5"
      >
        Send message
      </button>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-body text-xs font-medium uppercase tracking-plate text-ink/50">
        {label}
      </span>
      {children}
    </label>
  );
}
