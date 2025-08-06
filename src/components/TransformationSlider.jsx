import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./TransformationSlider.css";

const transformations = [
  {
    name: "Patient A",
    before: "/images/transformations/patient-a-before.png",
    after: "/images/transformations/patient-a-after.png",
  },
  {
    name: "Patient B",
    before: "/images/transformations/patient-a-before.png",
    after: "/images/transformations/patient-a-after.png",
  },
  {
    name: "Patient C",
    before: "/images/transformations/patient-a-before.png",
    after: "/images/transformations/patient-a-after.png",
  },
];

export default function TransformationSlider() {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={1}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 1.5 },
        }}
      >
        {transformations.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <div className="image-pair">
                <img
                  src={item.before}
                  alt={`${item.name} Before`}
                  className="image"
                  loading="lazy"
                />
                <img
                  src={item.after}
                  alt={`${item.name} After`}
                  className="image"
                  loading="lazy"
                />
              </div>
              <h3>{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
