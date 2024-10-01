import { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextInput(props: TextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">{props.label}</label>
      <input {...props} className="bg-zinc-800 p-2 rounded-md outline-none" />
    </div>
  );
}
