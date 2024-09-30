//https://nextjs.org/icons/next.svg
export default function ContentBox({ headContent, description }) {
  return (
    <div className="border-white pt-4 pr-4 text-md w-60 ">
      <div className="border-t-2 border-white pb-2"></div>
      <h3 className="text-xl font-extrabold">{headContent}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}
