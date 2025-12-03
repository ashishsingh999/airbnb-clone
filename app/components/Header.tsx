import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.396.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.396-.634-.936-.634zm4.314.634c.108-.215.396-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.396.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.752 3.752 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
          </svg>
          <span>airbnb-clone</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="text-sm font-semibold px-4 border-r border-gray-300">Anywhere</div>
          <div className="text-sm font-semibold px-4 border-r border-gray-300">Any week</div>
          <div className="text-sm text-gray-500 px-4">Add guests</div>
          <div className="bg-primary text-white p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <div className="text-sm font-semibold hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer hidden md:block">
            Airbnb your home
          </div>
          <div className="flex items-center gap-2 border rounded-full p-2 hover:shadow-md transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-500">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

