import Button from "../UI/Button";
import Card from "../UI/Card";
import refer from "../../assets/refer.png";

export default function HeroSection({ onReferNowClick }) {
  return (
    <section className="text-center py-8 md:py-16">
      <div className="mx-4 md:mx-[5rem] lg:mx-[15rem]">
        <Card className="p-4 md:p-9 text-center md:flex md:items-center md:justify-around">
          <div className="md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl lg:mb-7 font-bold">Let's Learn & Earn</h2>
            <p className="mt-2 text-2xl lg:mb-4">
              Get a chance to win up to <span className="text-blue-600 font-semibold">Rs. 15,000</span>
            </p>
            <Button onClick={onReferNowClick} className="mt-4">
              Refer Now
            </Button>
          </div>
          <div className="hidden md:block md:w-1/3">
            <img src={refer} alt="Hero Image" className="rounded-lg" />
          </div>
        </Card>
      </div>
    </section>
  );
}