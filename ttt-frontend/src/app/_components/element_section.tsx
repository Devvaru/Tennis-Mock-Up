import React, { useState } from "react";
import { ElementSectionProps } from "../_types/types";

export default function ElementSection({ title, options }: ElementSectionProps) {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = options.find(option => option.value === event.target.value);
        if (selected) setSelectedOption(selected);
    }

    return (
        <div className="activity-section">
            <h2>
                Tweak the {title}
            </h2>

            <div className="dropdown">
                <label htmlFor="option-select">Select {title}</label>

                <select id="option-select" value={selectedOption.value} onChange={handleChange}>

                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.title}
                        </option>
                    ))}
                </select>
            </div>

            <div className="activity-description">
                <p>{selectedOption.description}</p>
            </div>
        </div>
    )
}