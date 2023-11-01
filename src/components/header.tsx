import Input from "./input";
import Switcher from "./switcher";

const Header = () => {
  return (
    <header className="bg-background fixed top-0 w-full border-b px-4 py-3 shadow-sm md:px-6 md:py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-primary text-base font-semibold uppercase md:text-xl">
          Notes App
        </h1>
        <div className="flex items-center space-x-2.5">
          <div className="relative">
            <Input
              className="w-44 px-1.5 py-1 text-sm sm:w-64 md:p-2 md:placeholder:text-base"
              placeholder="search"
            />
            <svg
              className="absolute right-1 top-1 h-5 w-5 fill-zinc-400 md:right-2 md:top-1.5 md:h-6 md:w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </div>
          <Switcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
