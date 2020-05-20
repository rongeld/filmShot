import React from 'react';
import Select from 'react-select';
import variables from 'styles/variables';

const selectStyles = (base, error) => ({
  ...base,
  border: error ? `1px solid ${variables['error']}` : '1px solid transparent',
  borderRadius: '0',
  borderBottom: error
    ? `1px solid ${variables['error']}`
    : `1px solid ${variables['gray-color']}`,
  boxShadow: 'none',
});

const defaultView = {
  color: variables['gray-color'],
  fontFamily: 'Arial',
  fontSize: '13px',
};

const SelectForm = ({ options, placeholder, error, ...otherProps }) => (
  <Select
    {...otherProps}
    placeholder={placeholder}
    components={{
      IndicatorSeparator: () => null,
    }}
    styles={{
      control: base => selectStyles(base, error),
      placeholder: defaultStyles => ({
        ...defaultStyles,
        ...defaultView,
      }),
      singleValue: provided => ({
        ...provided,
        ...defaultView,
      }),
    }}
    options={options}
  />
);

export default SelectForm;
