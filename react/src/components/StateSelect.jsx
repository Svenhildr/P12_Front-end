import React from "react";
import { Dropdown } from "primereact/dropdown";
import states from "../data/states";

// const StateSelect = ({ value, onChange }) => {
//     return (
//         <select id="state" name="state" value={value} onChange={onChange} required>
//             <option value="">Select State</option>
//             {states.map((state) => (
//                 <option key={state.abbreviation} value={state.abbreviation}>
//                     {state.name}
//                 </option>
//             ))}
//         </select>
//     );
// };

// export default StateSelect;
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
