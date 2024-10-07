/**
 * StateSelect Component
 * 
 * @component
 * 
 * @description A dropdown component that allows users to select a U.S. state. It leverages PrimeReact's `Dropdown` 
 * component and maps through a list of states to populate the dropdown options.
 * 
 * @param {Object} props - The props object.
 * @param {string} props.value - The currently selected value for the state dropdown.
 * @param {Function} props.onChange - The callback function triggered when the selected value in the dropdown changes.
 * 
 * @returns {JSX.Element} A dropdown for selecting a state.

 * 
 * @description The `StateSelect` component takes in a `value` and an `onChange` handler from its parent. 
 * It uses the `states` data, mapping over the array to create an option list for the dropdown, 
 * where each state's name is displayed, and its abbreviation is the value.
 */

import React from "react";
import { Dropdown } from "primereact/dropdown";
import states from "../data/states";

const StateSelect = ({ value, onChange }) => {
    return (
        <Dropdown
            id="state"
            value={value}
            options={states.map((state) => ({
                label: state.name,
                value: state.abbreviation
            }))}
            onChange={onChange}
            placeholder="Select State"
            required
            className="p-dropdown"
        />
    );
};

export default StateSelect;
