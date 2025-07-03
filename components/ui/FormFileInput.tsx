interface FormFileInputProps {
  label: string;
  name: string;
  accept: string;
  required?: boolean;
}

export const FormFileInput: React.FC<FormFileInputProps> = ({
  label,
  name,
  accept,
  required = false,
}) => (
  <div className="w-full">
    <label
      htmlFor={name}
      className="block text-sm font-semibold text-gray-500 mb-1"
    >
      {label}
    </label>
    <input
      type="file"
      name={name}
      id={name}
      accept={accept}
      required={required}
      className="w-full p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
    />
  </div>
);
