const UploadImage = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="xl:w-2/6 lg:w-2/5 md:block">
            <img
              className="w-full h-[30rem] object-fit object-cover "
              src="https://www.uniqlo.com.hk/hmall/test/u0000000019172/main/first/1000/1.jpg"
            />
            {/* s:h-[20rem] md:h-[30rem] s:object-contain md:object-fit md:object-cover */}
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            {/* component */}
            <section className="max-w-4xl p-6 mx-auto bg-[#F46956] rounded-md shadow-md dark:bg-gray-800 ">
              <h1 className="text-xl font-bold text-white capitalize dark:text-white">
                MEN +J WOOL BLENDED OVERSIZED SHIRT JACKET
              </h1>
              <form className="py-4">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Upload Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span className="">Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 text-white">or drag and drop</p>
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#B0A695] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadImage;
