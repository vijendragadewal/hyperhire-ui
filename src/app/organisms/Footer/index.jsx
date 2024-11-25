import Logo from "@/app/assets/logo.png";
import ImageDescriptionBox from "@/app/molecules/ImageDescriptionBox";
import IconWithLabel from "@/app/molecules/IconWithLabel";
import FooterContentBox from "@/app/molecules/FooterContentBox";
import { footerContentData, imageDescriptionData } from "@/app/dummyData";

//https://nextjs.org/icons/next.svg
export default function Footer() {
  return (
    <footer class="-gray-100 py-10 px-4">
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

      <div class="mt-4 max-w-7xl mx-auto px-14 flex justify-between gap-8">
        {footerContentData.map((item, index) => (
          <FooterContentBox
            key={index}
            head={item.head}
            subText={item.subText}
            description={item.description}
          />
        ))}
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
