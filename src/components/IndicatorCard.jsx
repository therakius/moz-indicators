export default function IndicatorCard({ title, primary, details }) {
    return (
        <div className="indicator-card">
            <div className="card">
                <h2>
                    {title}
                </h2>
                <p className="p-primary">
                    {primary}
                </p>

                <div className="details">
                {details.map((item) => (
                    <spam
                        key={item}>{item}
                    </spam>
                ))}
                </div>


            </div>
        </div>
    )
}