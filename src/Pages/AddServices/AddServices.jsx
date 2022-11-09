import React from "react";

const AddServices = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const service_name = e.target.servicesName.value;
    const service_charge = e.target.price.value;
    const img = e.target.imageURL.value;
    const des = e.target.servicesDescription.value;
    console.log(img, des, service_charge, service_name);
  };

  return (
    <section className=" min-h-screen p-6 px-8 dark:dark:dark:bg-gray-800 dark:dark:dark:text-gray-50">
      <p className="mt-10 text-center text-4xl font-semibold">
        Add Your Services Here
      </p>
      <form onSubmit={handleSubmit}>
        <fieldset
          className="mx-auto mt-16 grid w-[96%] grid-cols-4 gap-6 rounded-md py-4 px-4 shadow-sm dark:dark:dark:bg-gray-900 sm:max-w-xl sm:place-items-end sm:py-20 sm:pl-10
          md:max-w-full md:px-24 lg:max-w-screen-xl"
        >
          <div className="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Services Name</label>
              <input
                id="servicesName"
                type="text"
                name="servicesName"
                required
                placeholder="Services Name"
                className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:dark:dark:border-gray-700 dark:dark:dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Price</label>
              <input
                id="price"
                type="text"
                name="price"
                required
                placeholder="Price"
                className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:dark:dark:border-gray-700 dark:dark:dark:text-gray-900"
              />
            </div>

            <div className="col-span-full">
              <label className="text-sm">Image URL</label>
              <input
                id="imageurl"
                type="text"
                name="imageURL"
                required
                placeholder="Image URL"
                className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:dark:dark:border-gray-700 dark:dark:dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label className=" text-sm">Services Description</label>
              <input
                id="servicesDescription"
                type="text"
                name="servicesDescription"
                required
                placeholder="Services Description"
                className=" w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:dark:dark:border-gray-700 dark:dark:dark:text-gray-900"
              />
            </div>
            <div className="col-span-full text-center">
              <button
                className="rounded-md bg-white px-8 py-2 font-medium text-gray-900 hover:bg-slate-500 hover:text-gray-300"
                type="submit"
              >
                Add Service
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddServices;
