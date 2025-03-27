export default function Pagination() {
  return (
    <ul className="flex flex-row gap-3 justify-center items-center text-black ">
      <span className="right-4 bottom-6 border-l border-b border-[#9F9F9F] w-3 h-3 rotate-[45deg]"></span>
      <li className="bg-[#F6F6F6] w-8 h-8 rounded-md py-1 px-3">
        <a href=""> 1</a>
      </li>
      <li className="bg-[#F6F6F6] w-8 h-8 rounded-md py-1 px-3">
        <a href=""> 2</a>
      </li>
      <li className="bg-[#F6F6F6] w-8 h-8 rounded-md py-1 px-3">
        <a href=""> 3</a>
      </li>
      <span>....</span>
      <li className="bg-[#F6F6F6] w-8 h-8 rounded-md py-1 px-3">
        <a href=""> 12</a>
      </li>
      <span className="right-4 bottom-6 border-l border-b border-[#9F9F9F] w-3 h-3 rotate-[225deg]"></span>
    </ul>
  );
}
