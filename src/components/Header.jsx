const Header = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-[1.31rem] font-abyssinica-sil">
      <a href="/" className="relative w-[2.38rem] h-[2.38rem] shrink-0">
        <img className="w-full h-full" alt="" src="/logo2.svg" />
      </a>
      <div className="relative leading-[109.5%] inline-block w-[10.63rem] h-[2rem] shrink-0">
        Oceanledge
      </div>
      <div className="flex flex-row items-center justify-center gap-[3.13rem] text-[1.13rem]">
        <a
          href="/home"
          className="relative w-[3.63rem] h-[1.5rem] shrink-0 text-[1.38rem] no-underline hover:bg-goldenrod"
        >
          <div className="absolute h-[166.67%] w-[179.31%] top-[-33.33%] right-[-39.66%] bottom-[-33.33%] left-[-39.66%] rounded-lg bg-ghostwhite box-border hidden border-[3px] border-solid border-goldenrod" />
          <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_29px)] leading-[1.5rem]">
            Home
          </div>
        </a>
        <a
          href="/game"
          className="relative leading-[155.5%] inline-block w-[7.38rem] h-[1.75rem] shrink-0 no-underline hover:bg-goldenrod"
        >
          Ocean Helper
        </a>
        <a
          href="/quiz"
          className="relative leading-[155.5%] inline-block w-[9.88rem] h-[1.81rem] shrink-0 no-underline hover:bg-goldenrod"
        >
          Ocean Friend Quiz
        </a>
        <a
          href="/identification"
          className="relative leading-[155.5%] inline-block w-[10.56rem] h-[1.81rem] shrink-0 no-underline hover:bg-goldenrod"
        >
          Friend Identification
        </a>
        <a
          href="/"
          className="relative leading-[155.5%] inline-block w-[12.56rem] h-[1.81rem] shrink-0 no-underline hover:bg-goldenrod"
        >
          Ocean Facts
        </a>
      </div>
    </div>
  );
};

export default Header;
