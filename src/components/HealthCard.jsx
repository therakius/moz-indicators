export default function HealthCard({status, uptime, timestamp}) {
    return(
        <div className="health">
            <h2>
                health ...
            </h2>
            <small>
                <ul>
                    <li>Status: <span>{status} </span> </li>
                    <li>Uptime: <span>{uptime} </span></li>
                    <li>Timestamp: <span>{timestamp} </span></li>
                </ul>
            </small>
        </div>
    )
}