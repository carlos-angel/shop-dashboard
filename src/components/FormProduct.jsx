import { useAlert } from "@hooks/useAlert";
import { addProduct, editProduct } from "@services/api/products.api";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function FormProduct({ setOpen, setReload, product }) {
  const formRef = useRef(null);
  const router = useRouter();
  const { showMessage } = useAlert();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      title: formData.get("title"),
      price: parseInt(formData.get("price")),
      description: formData.get("description"),
      categoryId: parseInt(formData.get("category")),
      images: [formData.get("images").name],
    };
    if (product) {
      editProduct({ id: product.id, body: data })
        .then(() => {
          showMessage({ type: "success", message: "Product updated successfully" });
          router.push("/dashboard/products");
        })
        .catch((err) => {
          showMessage({ type: "danger", message: err.message });
        });
    } else {
      addProduct(data)
        .then(() => {
          showMessage({ type: "success", message: "Product added successfully" });
          setReload(true);
          setOpen(false);
        })
        .catch((err) => {
          showMessage({ type: "danger", message: err.message });
        });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={product?.title}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                defaultValue={product?.price}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={product?.category}
                autoComplete="category-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="1">Clothes</option>
                <option value="2">Electronics</option>
                <option value="3">Furniture</option>
                <option value="4">Toys</option>
                <option value="5">Others</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={product?.description}
                id="description"
                autoComplete="description"
                rows="3"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-textarea focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-400"
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
                        htmlFor="images"
                        className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="images"
                          name="images"
                          defaultValue={product?.images}
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
