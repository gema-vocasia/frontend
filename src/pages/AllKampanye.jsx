import { useState, useEffect } from "react";
import CampaignCard from "../components/molecules/CampaignCard";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import campaignStore from "../store/campaignStore";
import categoryStore from "../store/categoryStore";

const AllKampanye = () => {
  const { campaign, getCampaigns } = campaignStore();
  const { categories, getCategories } = categoryStore();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch campaigns and categories when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      await getCampaigns();
      await getCategories();

    console.log("Campaign Data:", campaign);
    console.log("Category Data:", categories);
    };
  
    fetchData();
  }, [getCampaigns, getCategories]);

  const filteredCategories = campaign.filter(
    (item) =>
      selectedCategory === "All" || item.categoryId?._id === selectedCategory
  );

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="pt-24 text-center"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <h1 className="text-4xl font-bold text-black">Kampanye Kami</h1>
        <p className="mt-2 text-lg text-gray-600">
          Kami hadir untuk membantu mereka yang membutuhkan
        </p>
      </div>

      {/* Filter Section */}
      <div className="px-6 pt-10 md:px-16" data-aos="fade-up">
        {/* Category Filter */}
        <div
          className="flex justify-center mb-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition duration-300 ${
                selectedCategory === "All"
                  ? "bg-[#5E84C5] text-white"
                  : "bg-white text-[#5E84C5] border border-[#5E84C5] hover:bg-[#E6ECF5]"
              }`}
            >
              All
            </button>
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => setSelectedCategory(cat._id)}
                  className={`px-6 py-2 text-sm font-semibold rounded-full transition duration-300 ${
                    selectedCategory === cat._id
                      ? "bg-[#5E84C5] text-white"
                      : "bg-white text-[#5E84C5] border border-[#5E84C5] hover:bg-[#E6ECF5]"
                  }`}
                >
                  {cat.title}
                </button>
              ))
            ) : (
              <p>No categories available</p>
            )}
          </div>
        </div>

        {/* Kampanye Section */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <p className="text-lg text-center text-gray-500 h-screen">
              Kampanye yang Anda cari tidak ditemukan.
            </p>
          ) : (
            categories.map((cat) => {
              const filteredItems = filteredCategories.filter(
                (item) => item.categoryId && item.categoryId._id === cat._id
              );

              if (filteredItems.length === 0) return null;

              return (
                <div key={cat._id}>
                  {/* Category Title */}
                  <h2
                    className="mb-4 text-2xl font-bold text-black"
                    data-aos="fade-up"
                  >
                    {cat.title}
                  </h2>

                  {/* Campaign List */}
                  <div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 "
                    data-aos="fade-up"
                  >
                    {filteredItems.map((campaign) => (
                      <CampaignCard key={campaign._id} campaign={campaign} />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Section */}
      </div>
      <Footer />
    </div>
  );
};

export default AllKampanye;
