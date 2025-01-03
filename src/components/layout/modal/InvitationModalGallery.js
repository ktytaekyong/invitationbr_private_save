/* Import */
import { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
/* Component */
import GalleryModal from "./GalleryModal.js";
/* Image */
/* Context */
import { GalleryContext } from "../../../store/option-gallery-context.js";

const InvitationModalGallery = ({ src, onClose, openvar, clickidx }) => {
  const { selectGalleryPhotoList } = useContext(GalleryContext);
  return (
    <GalleryModal 
      openvar={openvar} 
      onClose={onClose} 
      ButtonWrapperUse={false}
    >
      <div className="modal">
        <div className="swiper-container">
          <Swiper
            initialSlide={clickidx}  // 클릭된 슬라이드부터 시작
            loop={true}
            spaceBetween={8}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            className="modalSwiper"
            navigation={{
              prevEl: '.swiper-button-wrapper .swiper-button-prev',
              nextEl: '.swiper-button-wrapper .swiper-button-next',
            }}
          >
            {selectGalleryPhotoList.length !== 0 ? (
              selectGalleryPhotoList.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <img src={item.src} alt={item.alt} />
                </SwiperSlide>
              ))
            ) : null}
            <div className="swiper-button-wrapper">
              <button className="swiper-button-prev">Prev</button>
              <button className="swiper-button-next">Next</button>
            </div>
          </Swiper>
        </div>
      </div>
    </GalleryModal>
  );
}

export default InvitationModalGallery;