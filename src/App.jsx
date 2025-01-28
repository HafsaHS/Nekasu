import { Button, Typography } from "@material-tailwind/react";
import MainNavBar from "./components/MainNavBar";
import image from "./assets/images/spying.png";
import image2 from "./assets/images/man.png";
import Search from "./assets/images/search.png";
import CountriesSelect from "./components/Countries";
import ReusableSelect from "./components/Select";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import FormikSelect from "./components/Select";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import FormikCountrySelect from "./components/Countries";
import FormikRegionSelect from "./components/Regions";
import { useNavigate } from "react-router";

export default function App() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const city = [
    { value: "city1", label: "City 1" },
    { value: "city2", label: "City 2" },
  ];
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

  const onChangeCountry = (val) => {
    setCountry(val);
    if (!val) {
      setRegion("");
    }
  };
  return (
    <div>
      <MainNavBar />
      <div className="bg-green-700 w-[1440px] h-[352px] flex justify-center flex-col items-center relative">
        <div className="bg-white w-[1226px] h-[187px] flex flex-row justify-center items-center rounded-2xl shadow-xl">
          <div className="flex items-center justify-center">
            <img src={image} alt="spying" className="w-[199px] h-[207px]" />
          </div>
          <div>
            <div className="flex flex-row items-center justify-center">
              <Typography className="font-inter font-extrabold text-[32px] text-black">
                Discover
              </Typography>
              <Typography variant="title" color="inherit">
                &nbsp;
              </Typography>
              <Typography className="font-inter font-semibold text-purple-1 text-[32px]">
                top creators and influencers
              </Typography>
            </div>
            <div className="flex flex-row items-center justify-center">
              <Typography className="font-inter text-[16px] font-normal text-black items-center leading-5">
                Choose from
              </Typography>
              <Typography className="font-inter text-[16px] font-normal text-purple-1 items-center leading-5 mx-2">
                over 2.5 million+
              </Typography>
              <Typography className="font-inter text-[16px] font-normal text-black items-center leading-5">
                creators for your next influencer marketing campaign
              </Typography>
            </div>
          </div>
          <div className="flex items-center justify-center -translate-y-5">
            <img src={image2} alt="man" className="w-[200px] h-[226px]" />
          </div>
        </div>

        <div className=" bg-white w-[909px] shadow-inner shadow-blue-gray-900 h-[256px] absolute transform translate-y-[87%] items-center rounded-[5px]">
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
              <Form className="grid grid-rows-3 grid-flow-col gap-y-4 pt-4 justify-around items-center">
                <FormikCountrySelect name="country" label="Country" />

                <FormikSelect
                  name="average followers"
                  label="Average Followers"
                  options={averageFollowers}
                />
                <FormikSelect name="media" label="Media" options={media} />
                <FormikRegionSelect
                  name="region"
                  label="Select Region"
                  country={values.country}
                />
                <FormikSelect
                  name="averageLikes"
                  label="Average Likes"
                  options={averageLikes}
                />
                <FormikSelect
                  name="category"
                  label="Category"
                  options={category}
                />

                <FormikSelect name="city" label="City" options={city} />
                <FormikSelect
                  name="averageViews"
                  label="Average Views"
                  options={averageViews}
                />
                <button
                  onClick={() => navigate("/add-influencer")}
                  type="submit"
                  className="relative bg-[#43C17E] h-[56px] w-[247px] rounded shadow-xl font-inter font-bold text-xl text-white flex items-center justify-center text-center"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <img src={Search} alt="Search" />
                  </div>
                  Search Results
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
