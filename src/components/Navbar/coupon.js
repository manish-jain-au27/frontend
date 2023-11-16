<div className="bg-yellow">
{!currentCoupon?.isExpired && (
            <div className="bg-yellow-600">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <p
                  style={{ textAlign: "center", width: "100%" }}
                  className="flex-1 text-center text-sm font-medium text-white lg:flex-none"
                >
                  {currentCoupon
                    ? `${currentCoupon?.code}- ${currentCoupon?.discount}% , ${currentCoupon?.daysLeft}`
                    : "No Flash sale at moment"}
                </p>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"></div>
              </div>
            </div>
          )}
</div>