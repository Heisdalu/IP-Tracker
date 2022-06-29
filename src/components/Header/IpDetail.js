import './IpDetail.css';

const IpDetail = () => {
    return (
      <section className="header_detail">
        <div className="ip-address">
          <h2 className="ip_title">IP ADDRESS</h2>
          <span className="ip-value">192.212.174.101</span>
        </div>
        <div className="ip-location">
          <h2 className="ip_title">LOCATION</h2>
          <span className="ip-value">Brookylyn, NY 10001</span>
        </div>
        <div className="ip-timezone">
          <h2 className="ip_title">TIMEZONE</h2>
          <span className="ip-value">UTC -05:00</span>
        </div>
        <div className="ip-isp">
          <h2 className="ip_title">ISP</h2>
          <span className="ip-value">SpaceX Starlink</span>
        </div>
      </section>
    );
}


export default IpDetail;