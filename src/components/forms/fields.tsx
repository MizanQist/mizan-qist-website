import { cn } from "@/lib/utils";

export const inputClass =
  "w-full rounded-lg border border-line bg-card px-4 py-3 text-base text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none aria-[invalid=true]:border-ember-500";

type FieldProps = { label: string; name: string; error?: string; hint?: string; children: React.ReactNode; className?: string };

export function Field({ label, name, error, hint, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      {children}
      {hint && !error && <p id={`${name}-hint`} className="text-xs text-muted">{hint}</p>}
      {error && <p id={`${name}-error`} role="alert" className="text-xs text-ember-500">{error}</p>}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { name: string; error?: string };
export function Input({ name, error, className, ...rest }: InputProps) {
  return <input id={name} name={name} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className={cn(inputClass, className)} {...rest} />;
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { name: string; error?: string };
export function Textarea({ name, error, className, ...rest }: TextareaProps) {
  return <textarea id={name} name={name} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className={cn(inputClass, "min-h-36 resize-y", className)} {...rest} />;
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { name: string; error?: string; options: ReadonlyArray<string>; placeholder?: string };
export function Select({ name, error, options, placeholder = "Select…", className, ...rest }: SelectProps) {
  return (
    <select id={name} name={name} aria-invalid={!!error} aria-describedby={error ? `${name}-error` : undefined} className={cn(inputClass, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%238f8680%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10", className)} {...rest}>
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}
