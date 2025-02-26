import Button from "../UI/Button";

export default function TopBar() {
  return (
    <div className="lg:px-[9rem] bg-blue-300 text-center py-2 text-sm flex flex-col md:flex-row justify-around">
      <span className="mt-2">Navigate your ideal career path with tailored expert advice</span>
      <Button variant="link" className="text-blue-700 mt-2 md:mt-0">
        Contact Expert
      </Button>
    </div>
  );
}