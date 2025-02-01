import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col text-gray-900 items-center justify-center ">
      {/* Hero */}
      <div className="mx-auto flex flex-col pt-10 items-center justify-center min-h-[60vh]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold md:w-[50%] text-center">
          Your Gateway to Amazing Local Offers
        </h1>
        <p className="md:text-xl font-bold text-gray-600 mt-5 md:w-[60%] text-center">
          Oupoun connects you with exclusive discounts and experiences. Browse,
          discover, and save effortlessly!
        </p>
        <div class="flex flex-col md:flex-row items-center gap-4 mt-5 justify-center">
          <button
            type="button"
            class="flex items-center justify-center mt-3 text-white bg-black w-44 h-14 rounded-lg"
          >
            <div class="mr-3">
              <svg viewBox="0 0 384 512" width="30">
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
            </div>
            <div>
              <div class="text-xs">Download on the</div>
              <div class="-mt-1 font-sans text-2xl font-semibold">
                App Store
              </div>
            </div>
          </button>
          <button
            type="button"
            class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14"
          >
            <div class="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width="30">
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                ></path>
                <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                ></path>
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                ></path>
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                ></path>
              </svg>
            </div>
            <div>
              <div class="text-xs">GET IT ON</div>
              <div class="-mt-1 font-sans text-xl font-semibold">
                Google Play
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col items-center mt-10 ">
        <h1 className="md:text-5xl text-3xl md:my-5 mt-5 md:w-[80%] leading-10 text-center font-bold">
          Your Savings Are Just a Click Away with Oupoun
        </h1>
        {/* Feature cards */}
        <div className="grid md:grid-cols-3 py-10 gap-14 lg:gap-0">
          {/* Card 1 */}
          <div className="flex flex-col items-center ">
            <Image
              src="/images/1-download.png"
              alt="Feature 1"
              className="mb-5"
              width={300}
              height={300}
            />
            <p className="text-2xl font-bold mb-2">Explore Local Deals</p>
            <p className="text-center font-semibold md:w-[80%]">
              Find the best offers near you. Save on dining, wellness, and more.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/2-createAccount.png"
              alt="Feature 2"
              className="mb-5"
              width={300}
              height={300}
            />
            <p className="text-2xl font-bold mb-2">Easy to Use.</p>
            <p className="text-center   font-semibold md:w-[80%]">
              Browse, select, and redeem offers in just a few taps.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/3-enjoy.png"
              alt="Feature 3"
              className="mb-5"
              width={300}
              height={300}
            />
            <p className="text-2xl font-bold mb-2">Save Big, Live Better</p>
            <p className="text-center  font-semibold md:w-[80%]">
              Enjoy exclusive savings on services you love.
            </p>
          </div>
        </div>
      </div>

      {/* Download The app */}
      <div className="flex flex-col items-center bg-blue-50 w-[100%] lg:w-[70%] rounded-3xl gap-10 p-10 lg:p-20 m-10 md:mt-20">
        <h1 className="font-bold text-3xl lg:text-4xl">
          Download The App Today
        </h1>
        <div class="flex flex-col md:flex-row items-center gap-4  justify-center">
          <button
            type="button"
            class="flex items-center justify-center mt-3 text-white bg-black w-44 h-14 rounded-lg"
          >
            <div class="mr-3">
              <svg viewBox="0 0 384 512" width="30">
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
            </div>
            <div>
              <div class="text-xs">Download on the</div>
              <div class="-mt-1 font-sans text-2xl font-semibold">
                App Store
              </div>
            </div>
          </button>
          <button
            type="button"
            class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14"
          >
            <div class="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width="30">
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                ></path>
                <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                ></path>
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                ></path>
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                ></path>
              </svg>
            </div>
            <div>
              <div class="text-xs">GET IT ON</div>
              <div class="-mt-1 font-sans text-xl font-semibold">
                Google Play
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
