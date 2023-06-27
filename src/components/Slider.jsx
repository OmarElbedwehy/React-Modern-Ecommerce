import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';

import { SliderProducts } from "../data/products"

const Slider = () => {
    return (
        <div className='slider_container'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerGroup={1}
                navigation={true}
                loop={true}
                loopFillGroupWithBlank={true}
                breakpoints={{
                    530: {
                        width: 530,
                        slidesPerView: 1,
                    },
                    550:{
                        width: 550,
                        slidesPerView: 2,
                    },
                    1100:{
                        slidesPerView: 3,
                    }
                }}
            >
                {
                    SliderProducts.map((item, index)=>{
                        const {name, detail, price, img} = item
                        return(
                            <SwiperSlide key={index}>
                                <div className='text_content'>
                                    <div className='name'>
                                        <span>{name}</span>
                                        <span>{detail}</span>
                                    </div>
                                    <span className='price'>{price}$</span>
                                    <button>Shop Now</button>
                                </div>
                                <img src={img} alt={name} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Slider