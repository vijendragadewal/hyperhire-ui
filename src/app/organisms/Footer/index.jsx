import Computer from "@/app/assets/formate.png";
import Gallary from "@/app/assets/user.png";
import Cube from "@/app/assets/kor.png";
import Target from "@/app/assets/setting.png";
import Logo from "@/app/assets/logo.png";
import ImageDescriptionBox from "@/app/molecules/ImageDescriptionBox";
import Image from "next/image";
import IconWithLabel from "@/app/molecules/IconWithLabel";
import FooterContentBox from "@/app/molecules/FooterContentBox";

//https://nextjs.org/icons/next.svg
export default function Footer() {
  return (
    <footer class="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto px-14 grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <IconWithLabel
            icon={Logo}
            lableName="Hyperhire"
            className="h-8 text-black font-bold"
            width={48}
            height={48}
            position="front"
          />
          <p className="text-sm text-gray-700 font-bold mt-2">
            우리는 국가와 경계를 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <p className="text-sm text-gray-700 mt-4 font-extrabold">
            010-0000-0000
            <br />
            aaaaa@naver.com
          </p>
        </div>

        <div className="col-span-2 flex justify-end items-center space-x-6">
          <ImageDescriptionBox
            icon={Computer}
            height={32}
            width={32}
            descriptionText="해외 개발자 원격 채용"
          />
          <ImageDescriptionBox
            icon={Gallary}
            height={32}
            width={32}
            descriptionText="외국인 원격 채용"
          />
          <ImageDescriptionBox
            icon={Cube}
            height={32}
            width={32}
            descriptionText="한국어 가능한 외국인 채용"
          />
          <ImageDescriptionBox
            icon={Target}
            height={32}
            width={32}
            descriptionText="해외 개발자 활용 서비스"
          />
        </div>
      </div>

      <div class="mt-4 max-w-7xl mx-auto px-14 flex justify-between gap-8">
        <FooterContentBox
          head="상호명"
          subText="하이퍼하이어"
          description="Hyperhire India Pvt Ltd"
        />
        <FooterContentBox
          head="대표 CEO"
          subText="김주현"
          description="Hyun Kim"
        />

        <FooterContentBox
          head="사업자등록번호 CIN"
          subText="427-88-01187"
          description="U74110DL2016PTC298012"
        />

        <FooterContentBox
          head="주소 ADDRESS"
          subText="서울특별시 강남대로 479, 지하 1층 233호"
          description="D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
              Delhi, 110053 India"
        />
      </div>

      <div class="mt-4 px-14 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-900 font-extrabold">
            © 2023 Hyperhire
          </a>
        </div>
      </div>
    </footer>
  );
}
