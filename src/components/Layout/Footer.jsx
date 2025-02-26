import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="bg-black text-white py-8 md:py-12 px-8 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold">accredian</h2>
            <p className="text-gray-400 text-sm">credentials that matter</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Programs</h3>
            <ul className="space-y-2">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Strategy & Leadership",
                "Senior Management",
                "Fintech",
              ].map((item) => (
                <li key={item} className="flex justify-between cursor-pointer hover:text-gray-300">
                  {item} <span className="text-xl font-bold">+</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm text-gray-400">
              Email us (For Data Science Queries): <span className="text-white">admissions@accredian.com</span>
            </p>
            <p className="text-sm text-gray-400">
              Email us (For Product Management Queries): <span className="text-white">pm@accredian.com</span>
            </p>
            <p className="text-sm text-gray-400">
              Data Science Admission Helpline: <span className="text-white">+91 9079653292 (9 AM - 7 PM)</span>
            </p>
            <p className="text-sm text-gray-400">
              Product Management Admission Helpline: <span className="text-white">+91 9625811095</span>
            </p>
            <p className="text-sm text-gray-400">
              Enrolled Student Helpline: <span className="text-white">+91 7969322507</span>
            </p>
            <p className="text-sm text-gray-400">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Accredian</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Career",
                "Blog",
                "Admission Policy",
                "Referral Policy",
                "Privacy Policy",
                "Terms Of Service",
                "Master FAQs",
              ].map((link) => (
                <li key={link} className="cursor-pointer hover:text-gray-300">
                  {link}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
              <FaTwitter className="cursor-pointer hover:text-gray-400" />
              <FaInstagram className="cursor-pointer hover:text-gray-400" />
              <FaYoutube className="cursor-pointer hover:text-gray-400" />
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </footer>
    );
  }