const PriceBadge = ({ price }) => {
  return (
    <>
      {/* Price Badge */}

      <div class="badge">
        <div class="content">
          <div class="title flex items-center space-x-2">
            <div className="bg-[#BBF3D2] w-8 h-8 flex items-center justify-center rounded-full">
              <h1 className="text-extrabold text-2xl">$</h1>
            </div>
            <span className="text-lg font-bold">월 {price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceBadge;
