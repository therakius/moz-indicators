import { Fragment } from "react";
import IndicatorCard from "./IndicatorCard";

export default function IndicatorSection({ year, data }) {
    if (!data) return <p className="loading">Loading...</p>

    return (
        <section className="i-section">
            <h2>
                Indicators for the year {year}
            </h2>

            <div className="cards">
                <IndicatorCard
                    title="Population"
                    primary={`${data.total_population} M`}
                    details={[
                        `Male: ${data.male} M`,
                        `Female: ${data.female} M`,
                        `Sex ratio: ${data.sex_raio}`
                    ]}
                />


                <IndicatorCard
                    title="Urbanization"
                    primary={`${data.urban_percent}%`}
                    details={[
                        `Growth rate: ${data.growth_rate}%`,
                        `Dependency: ${data.dependency_rate.total} %`
                    ]}
                />

                <IndicatorCard
                    title="Median Age"
                    primary={`${data.median_age} years`}
                    details={[
                        `Life expectancy: ${data.life_expectancy_at_birth.average} years`,
                        `Infant mortality: ${data.infant_mortality.average}%`
                    ]}
                />
            </div>

        </section>
    )
}