import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductsAction } from "../../redux/slices/products/productSlices";
import baseURL from "../../utils/baseURL";
import './homeproducttrending.css'; // Import your CSS file

const HomeProductTrending = () => {
  // Build up URL
  let productUrl = `${baseURL}/products`;

  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsAction({ url: productUrl }));
  }, [dispatch]);

  // Get data from store
  const {
    products: { products },
  } = useSelector((state) => state?.products);

  return (
    <section aria-labelledby="trending-heading">
      <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
        <div className="md:flex md:items-center md:justify-between">
          <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Trending Products
          </h2>
          <Link to="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products?.map((product) => (
            <Link
              to={`/products/${product._id}`}
              key={product.id}
              className="group relative rounded-md overflow-hidden glass-container"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.images[0]}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="content p-4">
                <h3 className="text-sm text-custom-gray">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-custom-black">
                  Rs.{product.price}.00
                </p>
                <Link
                  to={`/products/${product._id}`}
                  className="view-button block mt-4 px-4 py-2 bg-custom-blue text-black rounded-full hover:bg-custom-dark-blue focus:outline-none focus:shadow-outline-blue active:bg-custom-darker-blue"
                >
                  View Product
                </Link>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProductTrending;
