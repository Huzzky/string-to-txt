import {error} from "../../../config";

const Img = (data, className) => {
    const img404 = (data) => {
        return !data.logo ? "Img 404 error" : !data.alt ? "logo" : data.alt
    }

    data = data.data
    return (
        <img className={className}
             src={!data.logo ? error.logo : data.logo}
             alt={img404(data)}/>
    );
}

export default Img;