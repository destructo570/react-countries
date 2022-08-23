import React from "react";
import { Select } from "./styles";

export default function SelectBox(props) {
  return (
    <Select>
      {props.dataSource.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
}
