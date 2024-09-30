import Image from "next/image";
import rightArrow from "@/app/assets/rightArrow.jpg";

//https://nextjs.org/icons/next.svg
export default function ImageDescriptionBox({
  icon,
  descriptionText,
  width,
  height,
}) {
  return (
    <div class="px-4 py-2 bg-gray-50 text-black rounded-lg">
      <div class="p-2 rounded-lg">
        <Image src={icon} width={width} height={height} />
      </div>

      <p class="text-gray-700 font-semibold">{descriptionText}</p>
      <p class="text-gray-500 font-semibold">
        <span>
          바로가기
          <Image src={rightArrow} width={25} height={25} />
        </span>
      </p>
    </div>
  );
}
