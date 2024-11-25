import ImageDescriptionBox from "@/app/molecules/ImageDescriptionBox";
import Image from "next/image";
import IconWithLabel from "@/app/molecules/IconWithLabel";
import FooterContentBox from "@/app/molecules/FooterContentBox";
import { footerContentData, imageDescriptionData } from "@/app/dummyData";
import Logo from "@/app/assets/logo.png";

//https://nextjs.org/icons/next.svg
export default function MobileFooter() {
  return (
    <footer class="bg-gray-100 py-10 px-4">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <IconWithLabel
            icon={Logo}
            lableName="Hyperhire"
            className="h-8 text-black font-extrabld"
            width={48}
            height={48}
            position="front"
          />
          <p class="text-sm text-gray-700 font-bold">
            우리는 국가와 경계를 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <p class="text-sm text-gray-700 mt-2 font-bold">
            010-0000-0000
            <br />
            aaaaa@naver.com
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {imageDescriptionData.map((item, index) => (
            <ImageDescriptionBox
              key={index}
              icon={item.icon}
              height={32}
              width={32}
              descriptionText={item.descriptionText}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {footerContentData.slice(0, 2).map((item, index) => (
          <FooterContentBox
            key={index}
            head={item.head}
            subText={item.subText}
            description={item.description}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {footerContentData.slice(2).map((item, index) => (
          <FooterContentBox
            key={index}
            head={item.head}
            subText={item.subText}
            description={item.description}
          />
        ))}
      </div>

      <div class="mt-4  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex space-x-4">
          <a href="#" class="text-gray-700 hover:text-gray-900 text-extrabold">
            © 2023 Hyperhire
          </a>
        </div>
      </div>
    </footer>
  );
}
