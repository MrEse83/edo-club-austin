"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-bronze/30 bg-parchment-soft p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Message sent
        </p>
        <p className="mt-2 text-sm text-ink/70">
          Thank you for contacting Edo Club of Austin. We have received your
          inquiry and a member of our team will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)" name="phone" type="tel" />
        <Field label="Subject" name="subject" required />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-bronze/30 bg-parchment px-4 py-3 text-ink placeholder:text-ink/40 focus:border-coral focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-coral-dark">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-sm bg-coral px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-coral-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-bronze/30 bg-parchment px-4 py-3 text-ink placeholder:text-ink/40 focus:border-coral focus:outline-none"
      />
    </div>
  );
}
