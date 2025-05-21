import { useLocation, useParams } from "react-router";
import warriorImg from "../assets/fantasy-3287062_1280.png";
import ThiefImg from "../assets/fantasy-2026150_1280.png";
import MageImg from "../assets/wizard-1456914_1280.png";

export default function HeroClass() {
  const { hero } = useParams();
  const location = useLocation();
  const age = Number(location.state?.age || 0);
  const hp = age * 10;
  return (
    <div className="text-center">
      {hero === "Warrior" && (
        <div className="flex flex-col gap-12 items-center mt-35">
          <p>
            <img className="w-50 animate-pulse" src={warriorImg} alt={hero} />
          </p>
        </div>
      )}
      {hero === "Mage" && (
        <div className="flex flex-col gap-12 items-center mt-35">
          <p>
            <img className="w-50 animate-pulse" src={MageImg} alt={hero} />
          </p>
        </div>
      )}
      {hero === "Thief" && (
        <div className="flex flex-col gap-12 items-center mt-35">
          <p>
            <img className="w-50 animate-pulse" src={ThiefImg} alt={hero} />
          </p>
        </div>
      )}
      <p className="text-xl font-semibold my-5">HP = {hp}</p>
      <p className="text-3xl font-bold animate-bounce">
        You've Reached the End of Today's Quest!
      </p>
    </div>
  );
}
