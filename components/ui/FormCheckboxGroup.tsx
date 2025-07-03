interface FormCheckboxGroupProps {
  label: string;
  name: string;
  options: string[];
}

export const FormCheckboxGroup: React.FC<FormCheckboxGroupProps> = ({
  label,
  name,
  options,
}) => (
  <div className="w-full">
    <label className="block text-sm font-semibold text-gray-500 mb-1">
      {label}
    </label>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <input
            type="checkbox"
            id={`${name}-${option}`}
            name={`${name}[]`}
            value={option}
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
