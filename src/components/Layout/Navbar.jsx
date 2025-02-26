import Button from "../UI/Button";

export default function Navbar() {
  return (
    <nav className="lg:px-[8rem] bg-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <h1 className="text-lg font-bold text-blue-700">accredian</h1>
        <Button>Courses ▼</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button>Refer & Earn</Button>
        <Button>Resources</Button>
        <Button>About Us</Button>
        <Button>Login</Button>
        <Button>Try for free</Button>
      </div>
    </nav>
  );
}