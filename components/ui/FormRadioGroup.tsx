interface FormRadioGroupProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

export const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  label,
  name,
  options,
  required = false,
}) => (
  <div className="w-full">
    <label className="block text-sm font-semibold text-gray-500 mb-1">
      {label}
    </label>
    <div className="flex space-x-4">
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <input
            type="radio"
            id={`${name}-${option}`}
            name={name}
            value={option}
            required={required}
            className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
          />
          <label
            htmlFor={`${name}-${option}`}
            className="ml-2 text-sm text-gray-700"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  </div>
);
