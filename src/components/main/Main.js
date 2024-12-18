/* Import */
import { useState, useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
/* CSS Module */
import styles from "../../css/module/main/main.module.scss";
/* Image */
import logoImg from "../../img/main/logo.svg";
import mainImg1 from "../../img/main/visual/main1.png";
import mainImg1Mo from "../../img/main/visual/main1_m.png";
import mainImg2 from "../../img/main/visual/main2.png";
import mainImg2Mo from "../../img/main/visual/main2_m.png";
import mouseImg from "../../img/main/icon/mouse.svg";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Main = () => {
  const { isMobile } = useContext(SetContext);
  return (
    <>
      <header class="header">
        <div class="view__wrapper">
          <div class="header__wrapper">
            <div class="logo">
              <a href="#">
                <h1>시집가는 날</h1>
                <img src={logoImg} alt="시집가는 날 로고" />
              </a>
            </div>
            <div class="tool">
              <ul>
                <li><a href="#">로그인</a></li>
                <li><a href="#">회원가입</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div id="butter" class="scroll__wrapper">
        <section class="content">
          <article class="visual">
            <div className="swiper-container">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={false}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                className="visualSwiper"
                navigation={{
                  prevEl: '.visual .swiper-button-wrapper .swiper-button-prev',
                  nextEl: '.visual .swiper-button-wrapper .swiper-button-next',
                }}
              >
              {/* {
                selectGalleryPhotoList.map((item, idx) => (
                  <SwiperSlide key={item.src + idx} onClick={() => handleOpen(idx)}>
                    <img src={item.src} alt={item.alt} />
                  </SwiperSlide>
                ))
              } */}
                <SwiperSlide>
                  <></>
                  {
                    !isMobile ? <img src={mainImg1} alt="" /> : <img src={mainImg1Mo} alt="" />
                  }
                  <div class="view__wrapper">
                    <div class="visual__wrapper">
                      <div class="text">
                        <h2>감성과 기능 모두 갖춘<br />모바일 청첩장!</h2>
                        <span>언제든 쉽고 빠르게 제작할 수 있습니다.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <></>
                  {
                    !isMobile ? <img src={mainImg2} alt="" /> : <img src={mainImg2Mo} alt="" />
                  }
                  <div class="view__wrapper">
                    <div class="visual__wrapper">
                      <div class="text">
                        <h2>다양한 디자인과<br />심플한 기능!</h2>
                        <span>특별한 당신에게 편리함을 선사합니다.</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div class="swiper-button-wrapper">
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="scroll">
                  <img src={mouseImg} alt="" />
                  <p>SCROLL</p>
                </div> 
              </Swiper>
            </div>
          </article>
          <article class="intro">
            <div class="view__wrapper">
              <div class="intro__wrapper">
                <h3 class="style__title center">모바일 청첩장 소개</h3>
                <div class="list">
                  <ul>
                    <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                      <div class="image">
                        <img src="./images/icon/pen.svg" alt="다양한 템플릿" />
                      </div>
                      <div class="text">
                        <p>
                          다양한 템플릿
                          <span>가족, 지인용으로 사용</span>
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                      <div class="image">
                        <img src="./images/icon/map.svg" alt="길찾기, 예식일정" />
                      </div>
                      <div class="text">
                        <p>
                          길찾기, 예식일정
                          <span>예식 정보를 한 번에!</span>
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                      <div class="image">
                        <img src="./images/icon/gift.svg" alt="정성깃든 답례품" />
                      </div>
                      <div class="text">
                        <p>
                          정성깃든 답례품
                          <span>감사의 마음 표현하기</span>
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                      <div class="image">
                        <img src="./images/icon/moneygift.svg" alt="축의금, 화환" />
                      </div>
                      <div class="text">
                        <p>
                          축의금, 화환
                          <span>축하의 마음 전하기</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article class="menu">
            <div class="view__wrapper">
              <div class="menu__wrapper">
                <div class="title">
                  <h3 class="style__title">모바일 청첩장 메뉴</h3>
                  <p>
                    모바일 청첩장 기능이 궁금하신가요?<br />
                    청첩장 만들기는 물론 답례품과 감사장 보내기 메뉴로<br />
                    고마운 분들에게 마음을 표현할 수 있습니다.
                  </p>
                  <a href="#" class="button main">
                    <p>바로 시작하기</p>
                    <img src="./images/icon/arrow_mainbutton_right.svg" alt="" />
                  </a>
                </div>
                <div class="list">
                  <ul>
                    <li>
                      <a href="#" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <div class="image">
                          <img src="./images/icon/mail_heart.svg" alt="청첩장 만들기" />
                        </div>
                        <p>청첩장 만들기</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
                        <div class="image">
                          <img src="./images/icon/modify.svg" alt="청첩장 관리" />
                        </div>
                        <p>청첩장 관리</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                        <div class="image">
                          <img src="./images/icon/flower.svg" alt="화환 보내기" />
                        </div>
                        <p>화환 보내기</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
                        <div class="image">
                          <img src="./images/icon/gift_menu.svg" alt="답례품 보내기" />
                        </div>
                        <p>답례품 보내기</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                        <div class="image">
                          <img src="./images/icon/mail_click.svg" alt="감사장 보내기" />
                        </div>
                        <p>감사장 보내기</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-aos="fade-up" data-aos-delay="700" data-aos-duration="800">
                        <div class="image">
                          <img src="./images/icon/wedding_people.svg" alt="예식 순서" />
                        </div>
                        <p>예식 순서</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
          <article class="template ver2">
            <div class="view__wrapper">
              <div class="template__wrapper">
                <h3 class="style__title center">다양한 템플릿</h3>
                <div class="button__wrapper">
                  <a href="javascript:;" class="button template on">등록순</a>
                  <a href="javascript:;" class="button template">인기순</a>
                </div>
                <div class="slide__wrapper">
                  <div class="frame">
                    <div id="templateSwiper2" class="swiper2">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide">
                          <a href="./invitation.html">
                            <img src="./images/template/template01.png" alt="" />
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="./invitation.html">
                            <img src="./images/template/template02.png" alt="" />
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="./invitation.html">
                            <img src="./images/template/template03.png" alt="" />
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="./invitation.html">
                            <img src="./images/template/template04.png" alt="" />
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="./invitation.html">
                            <img src="./images/template/template05.png" alt="" />
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="./invitation.html">
                            <img src="./images/template/template06.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>
                  <div id="templateSwiper" class="swiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template01.png" alt="" />
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template02.png" alt="" />
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template03.png" alt="" />
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template04.png" alt="" />
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template05.png" alt="" />
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="./invitation.html">
                          <img src="./images/template/template06.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="swiper-button-wrapper">
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article class="faq">
            <div class="view__wrapper">
              <div class="faq__wrapper">
                <div class="item">
                  <h3 class="style__title center white">공지사항</h3>
                  <p>
                    모바일 청첩장 서비스 ‘시집가는 날’의<br />
                    새로운 소식을 전합니다.
                  </p>
                  <a href="#">
                    <p>바로가기</p>
                    <img src="./images/icon/arrow_mainbutton_right.svg" alt="" />
                  </a>
                </div>
                <div class="item">
                  <h3 class="style__title center white">FAQ</h3>
                  <p>
                    이용자들이 가장 자주 묻는 질문과 답변을<br />
                    확인해 보세요.
                  </p>
                  <a href="#">
                    <p>바로가기</p>
                    <img src="./images/icon/arrow_mainbutton_right.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}

export default Main;