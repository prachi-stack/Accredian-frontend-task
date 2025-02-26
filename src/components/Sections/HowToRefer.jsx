import { FaUserPlus, FaGift, FaWallet } from "react-icons/fa";
import Card from "../UI/Card";

export default function HowToRefer() {
  return (
    <section className="bg-white py-8 md:py-12 lg:px-[8rem]">
      <h2 className="text-2xl font-bold text-center">
        How Do I <span className="text-blue-600">Refer?</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 px-4">
        <Card className="p-4 md:p-6 text-center">
          <FaUserPlus className="text-blue-600 text-3xl mx-auto" />
          <p className="mt-4 font-semibold">Submit referrals easily via our website's referral section.</p>
        </Card>
        <Card className="p-4 md:p-6 text-center">
          <FaGift className="text-blue-600 text-3xl mx-auto" />
          <p className="mt-4 font-semibold">Earn rewards once your referral joins an Accredian program.</p>
        </Card>
        <Card className="p-4 md:p-6 text-center">
          <FaWallet className="text-blue-600 text-3xl mx-auto" />
          <p className="mt-4 font-semibold">Referrer receives a bonus 30 days after program enrollment.</p>
        </Card>
      </div>
    </section>
  );
}