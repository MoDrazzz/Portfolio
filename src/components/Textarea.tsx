interface Props {
  name: string;
  rows: number;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  name,
  rows,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <textarea
      className="w-full resize-none rounded border border-light-gray bg-transparent p-2 placeholder:text-light-gray dark:border-dark-gray dark:placeholder:text-dark-gray sm:text-lg lg:text-xl"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      rows={rows}
    />
  );
}
