"use client";
import React from "react";
import ProfileCarousel from "../ProfileCarousel";
import MobileHeader from "@/app/organisms/MobileHeader";
import ContentBox from "@/app/molecules/ContentBox";
import MobileFooter from "@/app/organisms/MobileFooter";
import PriceBadge from "@/app/atoms/Bage/priceBadge";
import { mobileCheckbox } from "@/app/dummyData";
import Checkbox from "@/app/atoms/Checkbox";

const HyperHireMobile = () => {
  return (
    <>
      {/* Top Section (Banner) */}
      <main className="mainContainer">
        <MobileHeader />
        <section className="main-section">
          <div className="text-white py-6 mob-section-1">
            {/* Header Section */}
            <div className="container mx-auto px-4 flex flex-col py-5">
              {/* Title and Description */}
              <div>
                <div class="chat-tooltip">
                  <div class="content">
                    <div class="title">풀타임,파트타임</div>
                  </div>
                </div>

                <h1
                  className="text-3xl font-bold animate-fadeInUp pt-5"
                  style={{
                    animationDelay: "500ms",
                    animationDuration: "500ms",
                  }}
                >
                  최고의 실력을 가진 외국인 인재를 찾고 계신가요?
                </h1>

                <p
                  className="mt-4 text-sm md:text-md font-bold text-gray-100 animate-fadeInUp"
                  style={{
                    animationDelay: "700ms",
                    animationDuration: "500ms",
                  }}
                >
                  법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
                </p>
              </div>

              {/* Price Badge */}
              <div className="items-center text-center mt-6">
                <PriceBadge price={"100만원"} />
              </div>
            </div>
          </div>
          {/* Profile Card Carousel */}
          <div className="relative w-full max-w-sm mx-auto">
            <ProfileCarousel />
          </div>
          <div className="text-sm leading-relaxed text-center space-y-2 mob-section-2">
            <div class="w-full max-w-md mx-auto text-white pt-28">
              <div className="grid grid-cols-2 gap-4">
                {mobileCheckbox.map((checkbox) => (
                  <Checkbox
                    key={checkbox.id}
                    id={checkbox.id}
                    label={checkbox.label}
                    checked={true}
                    onChange={(checked) =>
                      handleCheckboxChange(checkbox.id, checked)
                    }
                  />
                ))}
              </div>

              <div class="mt-4 text-left">
                <a href="#" class="text-yellow-300 font-bold underline text-sm">
                  개발자가 필요하신가요?
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Bottom Section (Contact and Details) */}
      <MobileFooter />
    </>
  );
};

export default HyperHireMobile;
