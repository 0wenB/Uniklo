const ReusableButton = () => {
  return (
    <>
      <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
        <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
          Cancel{" "}
        </button>
        <button className="mb-2 md:mb-0 bg-[#F46956] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
          Save
        </button>
      </div>
    </>
  );
};

export default ReusableButton;
