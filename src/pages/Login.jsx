import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Login() {
  let phoneNum;
  let password;
  return (
    <section>
      <Header />
      <div className="bg-[#FAFAFA] px-4 py-30 flex justify-center">
        <form action="POST" className="flex flex-col gap-8 w-3/4 sm:w-1/2">
          <input
            value={phoneNum}
            type="number"
            name=""
            id=""
            placeholder="Phone Number"
            className="bg-[#F5F5F5] rounded-lg px-4 py-2 placeholder:text-[#656565] placeholder:text-sm"
          />
          <input
            value={password}
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="bg-[#F5F5F5] rounded-lg px-4 py-2 placeholder:text-[#656565] placeholder:text-sm"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-lg px-16 py-3"
          >
            Login
          </button>
          <a
            href=""
            className="text-[#140853] text-sm font-medium sm:items-center"
          >
            Create Account
          </a>
        </form>
      </div>
      <Footer />
    </section>
  );
}
