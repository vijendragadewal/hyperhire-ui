"use client";
import React from "react";
import ProfileCarousel from "../ProfileCarousel";
import Header from "@/app/organisms/Header";
import ContentBox from "@/app/molecules/ContentBox";
import ImageContentBox from "@/app/molecules/ImageContentBox";
import Computer from "@/app/assets/computer.png";
import Gallary from "@/app/assets/gallary.png";
import Cube from "@/app/assets/cube.png";
import Target from "@/app/assets/target.png";
import Footer from "@/app/organisms/Footer";
import Phone from "@/app/assets/phone.png";

const HyperHireDesktop = () => {
  return (
    <>
      <div className="mainContainer">
        {/* Top Section (Banner) */}
        {/* Header Section */}
        <Header />
        <main>
          <section className="main-section">
            <div className="section-1 bg-gradient-to-r text-white">
              <div className="container mx-auto px-8 flex justify-left items-center">
                <div className="text-left w-9/12">
                  <div className="item-left w-4/5 my-3">
                    <div class="chat-bubble">
                      <div class="content">
                        <div class="title">풀타임,파트타임</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-left w-4/5">
                    <h1
                      className="text-4xl font-bold w-3/5 animate-fadeInUp"
                      style={{
                        animationDelay: "500ms",
                        animationDuration: "500ms",
                      }}
                    >
                      최고의 실력을 가진
                    </h1>
                    <h1
                      className="text-4xl font-bold animate-fadeInUp "
                      style={{
                        animationDelay: "500ms",
                        animationDuration: "500ms",
                      }}
                    >
                      외국인 인재를 찾고 계신가요?
                    </h1>
                    <h3
                      className="mt-4 text-lg w-2/4 font-extrabold animate-fadeInUp "
                      style={{
                        animationDelay: "700ms",
                        animationDuration: "500ms",
                      }}
                    >
                      법률 및 인사관리 부담없이 1주일 이내에 원격으로
                      채용해보세요.
                    </h3>
                    <h3
                      className="mt-4 text-lg w-2/4 font-bold animate-fadeInUp underline underline-offset-1 "
                      style={{
                        animationDelay: "900ms",
                        animationDuration: "500ms",
                      }}
                    >
                      개발자가 필요하신가요?
                    </h3>
                  </div>
                  <div
                    className="flex justify-between w-3/5 font-bold animate-fadeInUp "
                    style={{
                      animationDelay: "500ms",
                      animationDuration: "500ms",
                    }}
                  >
                    <ContentBox
                      headContent="평균 월 120만원"
                      description="임금을 해당 국가를 기준으로 계산합니다."
                    />
                    <ContentBox
                      headContent="최대 3회 인력교체"
                      description="막상 채용해보니 맞지 않아도 걱정하지 마세요. "
                    />
                    <ContentBox
                      headContent="평균 3일, 최대 10일"
                      description="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
                    />
                  </div>
                </div>
                {/* Profile Card Slider */}
                <div className="relative">
                  <ProfileCarousel />
                </div>
              </div>

              {/* Services Section */}
              <div className="mt-5 px-8 mb-5">
                <div className="mt-5  mb-5">
                  <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto text-center animate-fadeIn overflow-hidden">
                    <div className="flex w-[500%] animate-slide">
                      <div className="flex w-[25%] justify-center">
                        <ImageContentBox
                          icon={Computer}
                          height={32}
                          width={32}
                          descriptionText="해외 마케팅"
                        />
                      </div>
                      <div className="flex w-[25%] justify-center">
                        <ImageContentBox
                          icon={Gallary}
                          height={32}
                          width={32}
                          descriptionText="퍼블리셔"
                        />
                      </div>
                      <div className="flex w-[25%] justify-center">
                        <ImageContentBox
                          icon={Cube}
                          height={32}
                          width={32}
                          descriptionText="캐드원(제도사)"
                        />
                      </div>
                      <div className="flex w-[25%] justify-center">
                        <ImageContentBox
                          icon={Target}
                          height={32}
                          width={32}
                          descriptionText="해외 세일즈"
                        />
                      </div>
                      <div className="flex w-[25%] justify-center">
                        <ImageContentBox
                          icon={Phone}
                          height={32}
                          width={32}
                          descriptionText="해외 CS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* Bottom Section (Contact and Details) */}
      <Footer />
    </>
  );
};

export default HyperHireDesktop;
