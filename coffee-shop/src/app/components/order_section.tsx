"use client";

import { Select } from "./select";

export type RadioSelectOptions = {
  radioValue: string;
  radioLabel: string;
  options: {
    value: string;
    label: string;
  }[];
};

export type RadioSelectValue = {
  radioValue: string;
  selectValue: string;
};

export function OrderSection(props: {
  title: string;
  value: RadioSelectValue;
  setValue: (value: RadioSelectValue) => void;
  options: RadioSelectOptions[];
}) {
  const isSelected = (value: string) => {
    return props.value.radioValue === value;
  };
  const handleChangeRadio = (value: string) => {
    props.setValue({ radioValue: value, selectValue: "none" });
  };
  const handleChangeSelect = (value: string) => {
    props.setValue({ radioValue: props.value.radioValue, selectValue: value });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <p className="text-2xl font-bold">{props.title}</p>
        <div className="flex flex-row items-center justify-center gap-8 w-full h-full m-2">
          {props.options.map((option, index) => (
            <div key={index} className="flex flex-row">
              <input
                type="radio"
                name="radio"
                value={option.radioValue}
                checked={isSelected(option.radioValue)}
                onChange={() => handleChangeRadio(option.radioValue)}
              />
              <Select
                disabled={!isSelected(option.radioValue)}
                label={option.radioLabel}
                value={props.value.selectValue}
                setValue={handleChangeSelect}
                options={option.options}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
