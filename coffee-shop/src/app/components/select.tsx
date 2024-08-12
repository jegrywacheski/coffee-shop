export type SelectOptions = {
  value: string;
  label: string;
}[];

export function Select(props: {
  disabled?: boolean;
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: SelectOptions;
}) {
  return (
    <>
      <div className="flex flex-col items-left justify-center w-44 h-full m-2">
        <label htmlFor={props.value}>{props.label}</label>
        <select
          disabled={props.disabled}
          name={props.value}
          className="rounded-lg text-black p-2"
          value={props.value}
          onChange={(event) => props.setValue(event.target.value)}
        >
          {props.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
