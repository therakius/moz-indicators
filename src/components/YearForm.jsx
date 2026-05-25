import { Fragment } from "react";

export default function YearForm({ onYearChange, selectedYear }) {
    const availableYears = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

    return (
        <Fragment>
            <form className="year-form">
                <label htmlFor="year-select">Select Year:</label>
                <select
                    id="year-select"
                    value={selectedYear}
                    onChange={(e) => onYearChange(parseInt(e.target.value))}
                >
                    {availableYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </form>
        </Fragment>
    );
}
