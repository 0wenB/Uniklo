const SearchFilter = () => {
  return (
    <>
      <nav className="flex w-full items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        {/* Filter */}
        <div className="flex items-center px-3">
          <div className="relative inline-block text-left">
            <button
              id="dropdown-button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              id="dropdown-menu"
              className="origin-top-right absolute right-0 mt-2 w-full min-w-screen-sm rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden"
            >
              <div
                className="py-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-button"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100"
                  role="menuitem"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md bg-white hover-bg-gray-100"
                  role="menuitem"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100"
                  role="menuitem"
                >
                  Item 3
                </a>
                {/* Input field and submit button inside the dropdown */}
              </div>
            </div>
          </div>
        </div>
        {/* End of filter */}
        {/* Search */}
        <div className="flex items-center">
          <input
            type="search"
            className="block w-full rounded border border-neutral-300 bg-transparent px-3 py-2 text-base font-normal text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-3 focus:border-primary focus:text-neutral-700 focus:shadow-inset-0 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:border-neutral-500 dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <span
            className="input-group-text px-3 py-2 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        {/* End of search */}
      </nav>
    </>
  );
};

export default SearchFilter;
