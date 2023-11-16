import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategoriesAction } from "../../redux/slices/categories/categoriesSlice";
import './homecat.css';

const HomeCategories = () => {
  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  // Get data from store
  const { categories } = useSelector((state) => state?.categories);

  const categoriesToShow = categories?.categories?.slice(0, 5);

  return (
    <>
      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {categoriesToShow?.map((category) => (
                <div
                  key={category.name}
                  className="relative flex flex-col h-80 w-56 overflow-hidden p-6 hover:opacity-75 xl:w-auto home-categories-container"
                >
                  <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md border-2 border-gray-300 home-categories-container">
                    <img
                      src={category.image}
                      alt=""
                      className="h-48 w-full object-cover object-center mb-2 rounded-t-lg"
                    />
                    <Link
                      to={`/products-filters?category=${category.name}`}
                      className="block px-4 py-2 bg-blue-500 text-white rounded-b-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategories;
