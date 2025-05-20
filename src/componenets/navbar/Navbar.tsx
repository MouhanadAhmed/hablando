"use client"
import Image from "next/image";
import styles from './styles.module.css'
import Link from "next/link";
import React, { useRef } from "react";
import { useForm } from 'react-hook-form';
import { redirect } from "next/navigation";

export default function Navbar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchDialogRef = useRef<HTMLDialogElement>(null);


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) =>{ 
  console.log(data);
  const keyword: any = {};

  let tags = '';

  if (data.tags) tags += data.tags + ' ';
  if (data.discountType) tags += data.discountType + ' ';
  if (data.SearchKeyword) tags += data.SearchKeyword;

  if (tags.trim()) keyword.tags = tags.trim();
  if (data.availability) keyword.availability = data.availability;
  if (data.Location) keyword.Location = data.Location;

  console.log("keyword", keyword);

    // Convert keyword object to query string
    const queryParts = Object.entries(keyword).map(([key, value]) =>
      `keyword[${key}]=${value}`
    );
    const queryString = queryParts.join('&');
  
    console.log("query string:", queryString);
    // href={{
    //   pathname: '/venues/yoga/pages',
    //   query: {
    //     'keyword[tags]': 'Wellness 50%',
    //     'keyword[availability]': 'Everyday',
    //     'keyword[Location]': 'Dubai',
    //   },
    // }}
    // redirect(`/venues/pages?${{
    //   pathname: '/venues/yoga/pages',
    //   query: {
    //     'keyword[tags]': 'Wellness 50%',
    //     'keyword[availability]': 'Everyday',
    //     'keyword[Location]': 'Dubai',
    //   },
    // }}`)
    localStorage.setItem("search",queryString)
    redirect(`/venues/${queryString}`)
  };
  console.log(errors);
  const openDialog = () => {
    dialogRef.current?.showModal();
  }
  const openSearchDialog = () => {
    searchDialogRef.current?.showModal();
  }


  return (
    <div className="flex justify-between md:px-[2vw] px-5 items-center max-md:py-3" >
      <Link className='block  max-md:hidden' href="/">
        <Image
          className="py-4 md:h-[10vw] w-[15vw] md:h-[7vw] h-[7vw] 2xl:w-[10vw] 2xl:h-[5vw] object-contain"
          src="/images/logo.png"
          alt="CatCard logo"
          width={200}
          height={820}
        />
      </Link>
      <Link className='block md:hidden' href="/">
        <Image
          src="/icons/mobile-logo.png"
          alt="CatCard logo"
          width={130}
          height={38}
        />
      </Link>

      <div className="flex justify-between max-md:gap-[18px] gap-[2vw] items-center" >

        <button className="font-montserrat text-2xl font-semibold cursor-pointer" onClick={openSearchDialog}>
          <Image
            className="w-[28px] h-[28px] md:w-[2vw]  md:h-[2vw] "
            src='/images/searchIcon.png'
            alt="CatCard logo"
            width={24}
            height={24}
          />
        </button>
        <button className="max-md:py-1 max-md:px-3 max-md:bg-[#B1022980] max-md:rounded-[8px] max-md:text-xl max-md:uppercase text-[2vw] md:text-[1.5vw] cursor-pointer" onClick={openDialog}>
          <span className={styles.loginBtn}>Login</span>
        </button>

        <button className={`font-anton max-md:!hidden !text-[1.5vw] ${styles.callButton}`}>
          <Image
            className="me-[0.7vw] object-contain w-[2vw] h-[2vw]"
            src="/images/phoneIcon.png"
            alt="CatCard logo"
            width={24}
            height={24}
          />
          +971 527667527
        </button>

      </div>
      <dialog ref={dialogRef} id="my_modal_2" className="modal border-none">
        <div className="modal-box bg-white text-black rounded-none w-[85vw] md:w-7/12 xl:w-4/12 3xl:w-3/12 max-w-5xl pt-6 px-12">
          <div className="flex flex-row-reverse">

            <button
              onClick={() => dialogRef.current?.close()}
              className=" text-6xl  text-gray-700 font-extralight hover:text-black"
            >
              ×
            </button>
          </div>
          <h3 className="text-7xl  lg:mb-8 md:text-6xl lg:text-[80px] text-center font-anton uppercase pb-4">
            LOGIN
          </h3>
          <p className="py-2 lg:mb-6 text-center font-montserrat text-lg md:text-3xl lg:text-[32px] font-medium">
            Please login to proceed
          </p>

          <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-2 gap-6 md:gap-8 items-center justify-center " >



            <form onSubmit={handleSubmit(onSubmit)} className="w-[80vw] lg:w-[100vw]" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '24px',
            }}>
              <input type="text" placeholder="Username" {...register("Username", { required: true })} className="w-full border p-[3vw] md:p-[2vw] 3xl:p-[1vw]  rounded-full" style={{
                // borderRadius: '2vw',
                // padding: '1vw',
                border: "0.1vw solid #B6B6B6",
              }} />
              <input type="password" placeholder="Password" {...register} className="w-full border p-[3vw] md:p-[2vw] 3xl:p-[1vw]  rounded-full" style={{
                // borderRadius: '2vw',
                // padding: '1vw',
                border: "0.1vw solid #B6B6B6",
                marginBottom: "0.5vw"
              }} />

              <button type="submit" className="p-[3vw] md:p-[2vw] 3xl:p-[1vw] rounded-full" style={{
                backgroundColor: '#B10229',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
                textTransform: "uppercase"
              }}
              // onMouseOver={(e) => (e.currentTarget.style.backgroundColor = `${defaultValues ? '#ffa501' : '#4CAF49'}`)}
              // onMouseOut={(e) => (e.currentTarget.style.backgroundColor = `${defaultValues ? '#ffa500' : '#4CAF50'}`)}
              >
                {/* {defaultValues ? 'Update' : 'Submit'} */} Login
              </button>
            </form>


          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog ref={searchDialogRef} id="my_modal_2" className="modal border-none ">
        <div className="modal-box bg-white text-black rounded-none w-[85vw] md:w-7/12 xl:w-4/12 3xl:w-3/12 max-w-5xl py-0 3xl:pt-6 px-12 max-h-[90vh]">
          <div className="flex flex-row-reverse">

            <button
              onClick={() => searchDialogRef.current?.close()}
              className=" text-6xl  text-gray-700 font-extralight hover:text-black"
            >
              ×
            </button>
          </div>
          <h3 className="text-7xl  3xl:mb-8 md:text-6xl lg:text-[80px] text-center font-anton uppercase ">
            Search
          </h3>


          <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-2 gap-6 md:gap-8 items-center justify-center " >




            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[70vw] py-6 md:w-[80vw] lg:w-[100vw] md:p-12 3xl:pb-18"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                // padding: '24px',
              }}
            >
              <input
                type="text"
                placeholder="Search Keyword"
                {...register("SearchKeyword")}
                className="w-full border p-[3vw] md:p-[1vw] 3xl:p-[1vw] rounded-full"
                style={{
                  border: "0.1vw solid #B6B6B6",
                }}
              />

              {/* Location Select */}
              <div className="relative w-full">
                <select
                  {...register("Location")}
                  className="appearance-none w-full border p-[3vw] md:p-[1vw] 3xl:p-[1vw] rounded-full"
                  style={{
                    border: "0.1vw solid #B6B6B6",
                  }}
                >
                  <option disabled value="">Select Location</option>
                  <option  value="">Any</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sharqa">Sharqa</option>
                </select>
                <div className="pointer-events-none absolute right-[2vw] top-1/2 transform -translate-y-1/2 text-gray-800">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Activity Type Select */}
              <div className="relative w-full">
                <select
                  {...register("tags")}
                  className="appearance-none w-full border p-[3vw] md:p-[1vw] 3xl:p-[1vw] rounded-full"
                  style={{
                    border: "0.1vw solid #B6B6B6",
                  }}
                >
                  <option disabled value="">Select Category</option>
                  <option  value="">Any</option>
                  <option value="Restaurants">Restaurants</option>
                  <option value="Bookshop">Bookshops</option>
                  <option value="Languages">Languages</option>
                  <option value="Fitness">Fitness</option>
                  <option value="beachclub">Beach Clubs</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Wellness">wellness</option>
                  <option value="Mealplan">Meal Plan</option>
                  <option value="Entertaiment">Entertaiment</option>
                </select>
                <div className="pointer-events-none absolute right-[2vw] top-1/2 transform -translate-y-1/2 text-gray-800">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Discount Type Select */}
              <div className="relative w-full">
                <select
                  {...register("discountType")}
                  className="appearance-none w-full border p-[3vw] md:p-[1vw] 3xl:p-[1vw] rounded-full"
                  style={{
                    border: "0.1vw solid #B6B6B6",
                  }}
                >
                  <option disabled value="">Select Discount type</option>
                  <option  value="">Any</option>
                  <option value="10%">10%</option>
                  <option value="25%">25%</option>
                  <option value="50%">50%</option>
                  <option value="70%">70%</option>
                </select>
                <div className="pointer-events-none absolute right-[2vw] top-1/2 transform -translate-y-1/2 text-gray-800">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Availability Select */}
              <div className="relative w-full">
                <select
                  {...register("availability")}
                  className="appearance-none w-full border p-[3vw] md:p-[1vw] 3xl:p-[1vw] rounded-full"
                  style={{
                    border: "0.1vw solid #B6B6B6",
                  }}
                >
                  <option disabled value="">Select availability</option>
                  <option  value="">Any</option>
                  <option value="Everyday">Everyday</option>
                  <option value="Monday">Monday</option>
                </select>
                <div className="pointer-events-none absolute right-[2vw] top-1/2 transform -translate-y-1/2 text-gray-800">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="p-[3vw] md:p-[1vw] 3xl:p-[1vw] rounded-full"
                style={{
                  backgroundColor: '#B10229',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease',
                  textTransform: "uppercase",
                }}
              >
                Search
              </button>
            </form>


          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>


  )
}



