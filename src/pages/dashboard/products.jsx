import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Modal from "@common/Modal";
import FormProduct from "@components/FormProduct";

export default function Products() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="mb-8 lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            List of Products
          </h2>
        </div>
        <div className="flex mt-5 lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
              Add Product
            </button>
          </span>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormProduct />
      </Modal>
    </>
  );
}
