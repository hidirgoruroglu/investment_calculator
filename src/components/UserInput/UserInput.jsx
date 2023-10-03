import React, { useState } from "react";
import "./UserInput.css";

const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    "duration": 10,
}

const UserInput = ({onCalculate}) => {
    const [inputValues, setInputValues] = useState(initialUserInput)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onCalculate(inputValues)
    };

    const handleChange = (input, value) => {
        setInputValues(prev => {
            return {
                ...prev,
                [input]: value,
            }
        })
    };

    const handleResetButton = () => {
        setInputValues(initialUserInput)
    }
    return (
        <form onSubmit={handleFormSubmit} className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        onChange={(e) => {
                            handleChange("current-savings", e.target.value);
                        }}
                        type="number"
                        id="current-savings"
                        value={inputValues["current-savings"]
                    }
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        onChange={(e) => {
                            handleChange("yearly-contribution", e.target.value);
                        }}
                        type="number"
                        id="yearly-contribution"
                        value={inputValues["yearly-contribution"]}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        onChange={(e) => {
                            handleChange("expected-return", e.target.value);
                        }}
                        type="number"
                        id="expected-return"
                        value={inputValues["expected-return"]}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        onChange={(e) => {
                            handleChange("duration", e.target.value);
                        }}
                        type="number"
                        id="duration"
                        value={inputValues["duration"]}
                    />
                </p>
            </div>
            <p className="actions">
                <button onClick={handleResetButton} type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default UserInput;
