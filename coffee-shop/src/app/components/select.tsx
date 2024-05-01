import { PropsWithChildren } from "react";

export type SelectOptions = {
    value: string;
    label: string;
}[];

export function Select(props: {name: string, label: string, id: string, options: SelectOptions} & PropsWithChildren) {
    return (
        <>
        <div className="flex flex-col items-left justify-center max-w-8">
        <label htmlFor={props.id}>{props.label}</label>
        <select name={props.name} id={props.id}>
            {props.options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
        </div>
        </>
    );
}