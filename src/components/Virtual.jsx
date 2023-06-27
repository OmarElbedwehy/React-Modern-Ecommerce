import shadeImg from "../assets/shade.png"
import ReactCompareImage from 'react-compare-image';
import Before from "../assets/before.png"
import After from '../assets/after.png'

const Virtual = () => {
    return (
        <div className="virtual_container">
            <div className="text_content">
                <span>VIRTUAL TRY-ON</span>
                <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
                <span>Try Now!</span>
                <img src={shadeImg} alt="Shade" />
            </div>
            <div className="virtual_wrapper">
                <ReactCompareImage leftImage={Before} rightImage={After} />
            </div>
        </div>
    )
}

export default Virtual