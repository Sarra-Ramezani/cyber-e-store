export default function CategoryCard({ icon, title }) {
  return (
    <div className="bg-[#EDEDED] flex flex-col items-center justify-center gap-2 px-14 py-6 rounded-[15px] w-41 sm:w-40 sm:gap-8">
      <img src={icon} alt="" />
      <h3 className="text-black font-medium text-md text-center">{title}</h3>
    </div>
  );
}
