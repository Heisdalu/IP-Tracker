import './IpDetail.css';

const IpDetail = () => {
    return <section className="header_detail">
        <div className='ip-address'>
            <h2>IP ADDRESS</h2>
            <span>192.212.174.101</span>
        </div>
        <div className='ip-location'>
            <h2>LOCATION</h2>
            <span>Brookylyn, NY 10001</span>
        </div>
        <div className='ip-timezone'>
            <h2>TIMEZONE</h2>
            <span>UTC -05:00</span>
        </div>
        <div className='ip-isp'>
            <h2>ISP</h2>
            <span>SpaceX Starlink</span>
        </div>
    </section>;
}


export default IpDetail;