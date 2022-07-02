import "./IpDetail.css";

const IpDetail = (props) => {

  const ip_address = props.data?.ip || "-";
  const isp = props.data?.isp || "-";
  const location = props.data?.location
    ? `${props.data?.location?.city}, ${props.data?.location?.country} ${props.data?.location?.postalCode}`
    : "-";
  const timezone = props.data?.location?.timezone
    ? `UTC ${props.data.location.timezone}`
    : "-";

  return (
    <section className="header_detail">
      <div className="ip-address">
        <h2 className="ip_title">IP ADDRESS</h2>
        <span className="ip-value">{ip_address}</span>
      </div>
      <div className="ip-location">
        <h2 className="ip_title">LOCATION</h2>
        <span className="ip-value">{location}</span>
      </div>
      <div className="ip-timezone">
        <h2 className="ip_title">TIMEZONE</h2>
        <span className="ip-value">{timezone}</span>
      </div>
      <div className="ip-isp">
        <h2 className="ip_title">ISP</h2>
        <span className="ip-value">{isp}</span>
      </div>
    </section>
  );
};

export default IpDetail;
