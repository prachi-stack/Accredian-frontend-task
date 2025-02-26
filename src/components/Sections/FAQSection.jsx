import Button from "../UI/Button";

export default function FAQSection() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-2xl font-bold text-center">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8 px-4 lg:mx-[8rem]">
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <Button className="bg-blue-300">Eligibility</Button>
          <Button>How To Use?</Button>
          <Button>Terms & Conditions</Button>
        </div>
        <div className="w-full md:w-3/4">
          <p className="text-blue-600 font-semibold">
            Do I need to have prior Product Management and Project Management experience to enroll in the program?
          </p>
          <p>
            No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the
            basics, making it suitable for individuals from any field of work.
          </p>
          <p className="font-semibold">What is the minimum system configuration required?</p>
        </div>
      </div>
      <div className="bg-blue-600 text-white p-6 mt-8 text-center">
        <p className="font-bold">Want to delve deeper into the program?</p>
        <p>Share your details to receive expert insights from our program team!</p>
        <Button className="mt-4 bg-blue-800 text-blue-600">Get in touch →</Button>
      </div>
    </section>
  );
}