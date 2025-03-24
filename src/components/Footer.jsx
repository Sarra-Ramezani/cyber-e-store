import CyberLogo from "../../public/cyber-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-black w-full flex flex-col gap-8 px-8 sm:px-40 py-12 sm:py-28 sm:flex-row sm:justify-between">
      <div className="flex flex-col items-center sm:items-start gap-4 sm:w-1/3">
        <img src={CyberLogo} alt="logo" />
        <p className="text-[#CFCFCF] font-normal text-center sm:text-start">
          We are a residential interior design firm located in Portland. Our
          boutique-studio offers more than
        </p>
      </div>
      <div className="sm:w-1/3">
        <ul className="text-[#CFCFCF] font-normal flex flex-col items-center sm:items-start gap-2">
          <li className="font-bold text-lg">
            <a href="/"> Services </a>
          </li>
          <li>
            <a href="/"> Bonus program </a>
          </li>
          <li>
            <a href="/"> Gift cards </a>
          </li>
          <li>
            <a href="/"> Credit and payment </a>
          </li>
          <li>
            <a href="/"> Service contracts </a>
          </li>
          <li>
            <a href="/"> Non-cash account </a>
          </li>
          <li>
            <a href="/"> Payment </a>
          </li>
        </ul>
      </div>
      <div className="sm:w-1/3">
        <ul className="text-[#CFCFCF] font-normal flex flex-col items-center sm:items-start gap-2">
          <li className="font-bold text-lg">
            <a href="/">Assistance to the buyer </a>
          </li>
          <li>
            <a href="/"> Find an order </a>
          </li>
          <li>
            <a href="/"> Terms of delivery </a>
          </li>
          <li>
            <a href="/"> Exchange and return of goods </a>
          </li>
          <li>
            <a href="/"> Guarantee </a>
          </li>
          <li>
            <a href="/"> Frequently asked questions </a>
          </li>
          <li>
            <a href="/"> Terms of use of the site </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
