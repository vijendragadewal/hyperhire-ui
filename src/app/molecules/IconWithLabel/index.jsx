import Image from "next/image";
import Label from "../../atoms/Label";

//https://nextjs.org/icons/next.svg
export default function IconWithLabel({
  lableName,
  className,
  icon,
  position,
  width,
  height,
}) {
  return (
    <div className="flex items-center space-x-2">
      {position === "front" && (
        <Image src={icon} width={width} height={height} alt="front-img" />
      )}
      <Label displayName={lableName} className={className} />
      {position === "back" && (
        <Image src={icon} width={width} height={height} alt="back-img" />
      )}
    </div>
  );
}
