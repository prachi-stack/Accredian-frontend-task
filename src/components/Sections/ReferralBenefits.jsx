import { useState } from "react";

export default function ReferralBenefits() {
  const [selectedCategory, setSelectedCategory] = useState("ALL PROGRAMS");

  return (
    <section className="py-8 md:py-12 px-4">
      <h2 className="text-2xl font-bold text-center">
        What Are The <span className="text-blue-600">Referral Benefits?</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center mt-8 px-4 lg:px-[8rem]">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4">
          <div className="bg-blue-600 text-white p-3 font-bold md:mt-4">ALL PROGRAMS</div>
          <ul className="border">
            {[
              "Product Management",
              "Strategy & Leadership",
              "Business Management",
              "Fintech",
              "Senior Management",
              "Data Science",
              "Digital Transformation",
              "Business Analytics",
            ].map((category) => (
              <li
                key={category}
                className="p-3 border-b cursor-pointer hover:bg-blue-100"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 bg-gray-100 p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2">Programs</th>
                <th className="p-2">Referrer Bonus</th>
                <th className="p-2">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  program: "Professional Certificate Program in Product Management",
                  referrer: "₹ 7,000",
                  referee: "₹ 9,000",
                },
                {
                  program: "PG Certificate Program in Strategic Product Management",
                  referrer: "₹ 9,000",
                  referee: "₹ 11,000",
                },
                {
                  program: "Executive Program in Data Driven Product Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program: "Executive Program in Product Management and Digital Transformation",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program: "Executive Program in Product Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program: "Advanced Certification in Product Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
                {
                  program: "Executive Program in Product Management and Project Management",
                  referrer: "₹ 10,000",
                  referee: "₹ 10,000",
                },
              ].map(({ program, referrer, referee }) => (
                <tr className="border-b" key={program}>
                  <td className="p-2">{program}</td>
                  <td className="p-2">{referrer}</td>
                  <td className="p-2">{referee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}