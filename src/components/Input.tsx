interface Props {
  name: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, placeholder, value, onChange }: Props) {
  return (
    <input
      className="w-full rounded border border-light-gray bg-transparent p-2 placeholder:text-light-gray dark:border-dark-gray dark:placeholder:text-dark-gray sm:text-lg lg:text-xl"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}
