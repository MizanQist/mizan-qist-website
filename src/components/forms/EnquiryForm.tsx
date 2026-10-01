"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "./fields";
import { enquirySchema, issuesToErrors, type EnquiryKind } from "@/lib/enquiry";

type Props = {
  kind: EnquiryKind;
  /** Select options, passed in from the content files by the page. */
  options: Record<string, ReadonlyArray<string>>;
  /** Pre-selected values, e.g. from ?division=labs */
  defaults?: Record<string, string>;
  note?: string;
  submitLabel?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryForm({ kind, options, defaults = {}, note, submitLabel = "Send enquiry" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return; // honeypot filled → silently ignore bots

    const parsed = enquirySchema.safeParse({ ...data, kind });
    if (!parsed.success) {
      const errs = issuesToErrors(parsed.error.issues);
      setErrors(errs);
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-card p-8 text-center">
        <span className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Check className="size-6" aria-hidden />
        </span>
        <h3 className="text-display-sm">Thank you. We have your enquiry.</h3>
        <p className="mt-3 text-muted">We will come back to you within one working day.</p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>Send another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Your name" name="name" error={errors.name}>
        <Input name="name" error={errors.name} autoComplete="name" placeholder="Full name" required />
      </Field>

      {kind === "studio" && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Email" name="email" error={errors.email}>
              <Input name="email" type="email" error={errors.email} autoComplete="email" placeholder="you@company.com" required />
            </Field>
            <Field label="Phone (optional)" name="phone" error={errors.phone}>
              <Input name="phone" type="tel" error={errors.phone} autoComplete="tel" placeholder="+234 …" />
            </Field>
          </div>
          <Field label="What do you need?" name="serviceType" error={errors.serviceType}>
            <Select name="serviceType" error={errors.serviceType} options={options.serviceTypes} defaultValue={defaults.serviceType ?? ""} required />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Budget range" name="budget" error={errors.budget}>
              <Select name="budget" error={errors.budget} options={options.budgets} required />
            </Field>
            <Field label="Timeline" name="timeline" error={errors.timeline}>
              <Select name="timeline" error={errors.timeline} options={options.timelines} required />
            </Field>
          </div>
          <Field label="Tell us about the project" name="message" error={errors.message}>
            <Textarea name="message" error={errors.message} placeholder="Goals, audience, references, anything that helps." required />
          </Field>
        </>
      )}

      {kind === "private-office" && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred contact method" name="contactMethod" error={errors.contactMethod}>
              <Select name="contactMethod" error={errors.contactMethod} options={options.contactMethods} required />
            </Field>
            <Field label="Number or email to reach you" name="contactDetail" error={errors.contactDetail}>
              <Input name="contactDetail" error={errors.contactDetail} placeholder="+44 … or you@domain.com" required />
            </Field>
          </div>
          <Field label="Area of interest" name="areaOfInterest" error={errors.areaOfInterest}>
            <Select name="areaOfInterest" error={errors.areaOfInterest} options={options.areasOfInterest} defaultValue={defaults.areaOfInterest ?? ""} required />
          </Field>
          <Field label="Brief" name="brief" error={errors.brief} hint="Share as much or as little as you wish.">
            <Textarea name="brief" error={errors.brief} placeholder="What are you looking for, and by when?" required />
          </Field>
        </>
      )}

      {kind === "contact" && (
        <>
          <Field label="Email" name="email" error={errors.email}>
            <Input name="email" type="email" error={errors.email} autoComplete="email" placeholder="you@company.com" required />
          </Field>
          <Field label="Who would you like to reach?" name="division" error={errors.division}>
            <Select name="division" error={errors.division} options={options.divisions} defaultValue={defaults.division ?? ""} required />
          </Field>
          <Field label="Message" name="message" error={errors.message}>
            <Textarea name="message" error={errors.message} placeholder="How can we help?" required />
          </Field>
        </>
      )}

      {note && <p className="text-xs leading-relaxed text-muted">{note}</p>}
      {status === "error" && (
        <p role="alert" className="rounded-lg bg-ember-100 px-4 py-3 text-sm text-ember-700 dark:bg-ember-700/20 dark:text-ember-300">
          Something went wrong sending your enquiry. Please try again, or email us directly.
        </p>
      )}
      <Button type="submit" size="lg" variant="accent" disabled={status === "submitting"} arrow className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
