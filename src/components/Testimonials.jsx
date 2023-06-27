import testimonialsHeroImg from "../assets/testimonialHero.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { TestimonialsData } from "../data/testimonials"

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonials_wrapper">
                <div className="testimonial_side">
                    <span>TOP RATED</span>
                    <p>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</p>
                </div>
                <img src={testimonialsHeroImg} alt="Testimonial Hero" />
                <div className="testimonial_side">
                    <span>100K</span>
                    <p>HAPPY CUSTOMERS WITH US</p>
                </div>
            </div>
            <span className="reviews_text">REVIEWS</span>
            <div className="testimonials_carousel">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={25}
                    
                    slidesPerGroup={1}
                    pagination={{ clickable: true }}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        650:{
                            slidesPerView: 1,
                        },
                        770:{
                            slidesPerView: 2,
                        },
                        1100:{
                            slidesPerView: 3,
                        }
                    }}
                >
                    {
                        TestimonialsData.map((testimonial, index) => {
                            const { image, comment, name } = testimonial
                            return (
                                <SwiperSlide key={index}>
                                    <div className="testi">
                                        <img src={image} alt={name} />
                                        <span className="text">{comment}</span>
                                        <hr />
                                        <span className="name">{name}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials 