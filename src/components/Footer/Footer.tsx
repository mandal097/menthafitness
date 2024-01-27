import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="flex-col gap-4 w-full h-auto py-4 flex md:flex-row items-center justify-between">
      {/* left */}
      <div className="flex-1 d-flex-center">
        <p className="text-sm  text-black text-center">
          © Copyright{" "}
          <span className="font-bold text-black"> Mentha Fitness</span>
          . All Rights Reserved <br /> Designed by{" "}
          <a
            href="https://mandal097-portfolio.netlify.app/"
            target="_blank"
            className="font-medium text-blue cursor-pointer hover:text-blue hover:font-semibold">
            Amarnath mandal
          </a>
        </p>
      </div>

      {/* right */}
      <div className="flex-1 d-flex-center">
        <div className="d-flex-center gap-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="social-links-container group">
            <RiWhatsappFill className="social-links" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="social-links-container group">
            <MdEmail className="social-links" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="social-links-container group">
            <AiFillInstagram className="social-links" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="social-links-container group">
            <BsFacebook className="social-links" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
