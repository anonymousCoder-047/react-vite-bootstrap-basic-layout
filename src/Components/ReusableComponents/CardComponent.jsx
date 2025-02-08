
import {
    Link
} from "react-router-dom";

const CardComponent = ({ 
    imgUrl="", 
    altText="image", 
    title="Card Title", 
    description="lorem ipsum", 
    btnLink="", 
    btnText="read more",
    styles={},
    multiple=false,
    data=[],
    handleClick=()=>{}
}) => {
  
    return (
      <>
        {
            !multiple ? 
            <>
                <div className={`card ${styles?.card?.color ?? "text-bg-primary"}`}>
                    <img src={imgUrl} className="card-img-top" alt={altText} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <Link to={btnLink} className={`btn ${styles?.button?.primary ?? "btn-primary"}`} onClick={handleClick}>{btnText}</Link>
                    </div>
                </div>
            </>
            :
            data?.length && ( 
                <>
                    <div className="row g-2">
                        {data?.map((item, index) => (
                            <>
                                <div key={`card-${index}-${item?.title}`} className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <img src={item?.imgUrl} className="card-img-top" alt={item?.altText} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item?.title}</h5>
                                            <p className="card-text">{item?.description}</p>
                                            <Link to={item?.btnLink} className={`btn ${styles?.button?.primary ?? "btn-primary"}`} onClick={handleClick}>{item?.btnText}</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </>
            )
        }
      </>
    )
  }
  
  export default CardComponent
  