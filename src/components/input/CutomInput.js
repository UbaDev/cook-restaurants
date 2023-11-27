import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  error,
  disabled,
  secureTextEntry,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      error={error}
      disabled={disabled}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      secureTextEntry={secureTextEntry}
      style={[
        styles.input,
        {
          backgroundColor: "#F4F5F7",
        },
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F4F5F7",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    borderWidth: 0, 
    height: 55
  },
});

export default CustomInput;
