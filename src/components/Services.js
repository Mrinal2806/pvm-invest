import { SERVICE_CONTENT } from "../utils/constants";

const Services = () => {
  return (
    <div className="row" style={{ marginLeft: "5rem" }}>
    <div className="col-12">
      <h1>OUR SERVICES</h1>
    </div>
    <div className="col-12">
        <div className="row" >
            {SERVICE_CONTENT.map((card) => (
                <div className="col-3" style={{border: '1px solid black', marginRight: '2rem', marginBottom: '2rem', paddingBottom: '1rem'}}>
                    <h3 style={{margin: '1rem 0rem', fontSize: '1.5rem'}}>{card.title}</h3>
                    <span>{card.description}</span>
                </div>
            ))}
        </div>
    </div>
    </div>
  );
};

export default Services;
