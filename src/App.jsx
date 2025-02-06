import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import MainNavBar from "./components/MainNavBar";
import image from "./assets/images/spying.png";
import image2 from "./assets/images/man.png";
import Search from "./assets/images/search.png";
import { Formik, Form } from "formik";
import FormikSelect from "./components/Select";
import FormikCountrySelect from "./components/Countries";
import FormikRegionSelect from "./components/Regions";
import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();

  const averageFollowers = [
    { value: "followers1", label: "Followers 1" },
    { value: "followers2", label: "Followers 2" },
    { value: "followers3", label: "Followers 3" },
  ];
  const media = [
    { value: "media1", label: "Media 1" },
    { value: "media2", label: "Media 2" },
  ];
  const category = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
  ];
  const averageLikes = [
    { value: "likes1", label: "Likes 1" },
    { value: "likes2", label: "Likes 2" },
  ];
  const averageViews = [
    { value: "views1", label: "Views 1" },
    { value: "views2", label: "Views 2" },
  ];
  const city = [
    { value: "city1", label: "City 1" },
    { value: "city2", label: "City 2" },
  ];

  return (
    <div className="min-h-screen">
      <MainNavBar />
      <div className="bg-green-700 w-full min-h-[352px] py-8 px-4 flex justify-center flex-col items-center relative">
        {/* Hero Section */}
        <div className="bg-white w-full max-w-6xl mx-auto p-6 rounded-2xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="hidden md:block">
              <img
                src={image}
                alt="spying"
                className="w-32 md:w-[199px] h-auto"
              />
            </div>

            <div className="text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <Typography className="font-inter font-extrabold text-2xl md:text-[32px] text-black">
                  Discover
                </Typography>
                <Typography className="font-inter font-semibold text-purple-1 text-2xl md:text-[32px]">
                  top creators and influencers
                </Typography>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center text-sm md:text-base gap-1 mt-2">
                <span className="font-inter text-black">Choose from</span>
                <span className="font-inter text-purple-1 mx-1">
                  over 2.5 million+
                </span>
                <span className="font-inter text-black">
                  creators for your next influencer marketing campaign
                </span>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src={image2}
                alt="man"
                className="w-32 md:w-[200px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white w-full max-w-4xl mx-auto p-6 mt-8 rounded-lg shadow-lg">
          <Formik
            initialValues={{
              country: "",
              region: "",
              averageFollowers: "",
              averageLikes: "",
              averageViews: "",
              media: "",
              category: "",
              city: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values }) => (
              <Form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FormikCountrySelect name="country" label="Country" />
                <FormikRegionSelect
                  name="region"
                  label="Select Region"
                  country={values.country}
                />
                <FormikSelect name="city" label="City" options={city} />
                <FormikSelect
                  name="average followers"
                  label="Average Followers"
                  options={averageFollowers}
                />
                <FormikSelect
                  name="averageLikes"
                  label="Average Likes"
                  options={averageLikes}
                />
                <FormikSelect
                  name="averageViews"
                  label="Average Views"
                  options={averageViews}
                />
                <FormikSelect name="media" label="Media" options={media} />
                <FormikSelect
                  name="category"
                  label="Category"
                  options={category}
                />

                <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-4">
                  <button
                    onClick={() => navigate("/add-influencer")}
                    type="submit"
                    className="bg-[#43C17E] px-6 py-3 rounded shadow-xl font-inter font-bold text-lg md:text-xl text-white flex items-center justify-center gap-2 hover:bg-[#3ba76d] transition-colors"
                  >
                    <img src={Search} alt="Search" className="w-6 h-6" />
                    Search Results
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
