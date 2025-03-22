export default function SmallBanner({
  className = "",
  img,
  imgALT,
  title,
  description,
  button,
  headingFont,
}) {
  //last word in banner title is bold
  //so we get the last word and attach the other ones together
  const titleWords = title.split(" ");
  const lastWord = titleWords[titleWords.length - 1];
  title = titleWords.slice(0, -1).join(" ");
  return (
    <div
      className={` relative flex flex-col gap-6  justify-center items-center text-center py-10 px-4 ${className}  sm:flex-row sm:overflow-clip sm:h-1/2 sm:px-10 `}
    >
      <img
        className="object-cover w-[70%] m-auto  sm:absolute sm:right-[70%] "
        src={img}
        alt={imgALT}
      />
      <div className="flex flex-col items-center gap-2 sm:text-start sm:w-[70%] sm:ml-[20%]">
        <h3 className={` text-black text-4xl font-light ${headingFont}`}>
          {title} <span className="font-medium">{lastWord}</span>
        </h3>
        <p className="text-[#909090] text-md font-medium sm:text-sm">
          {description}
        </p>
        {button}
      </div>
    </div>
  );
}
