import BackButton from "../components/atoms/BackButton";
import Button from "../components/atoms/Button";
import CampaignDetailContent from "../components/organisms/CampaignDetailContent";
import CampaignDonorSection from "../components/organisms/CampaignDonorSection";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import campaignStore from "../store/campaignStore";
import donationStore from "../store/donationStore";

const CampaignDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { campaign, getCampaign } = campaignStore();
  const { donationByCampaignId, getDonationsByCampaignId } = donationStore();
  const [thisCampaign, setThisCampaign] = useState(null);
  const [showFullDescription] = useState(false);
  const [showDonors, setShowDonors] = useState(false);

  // Update state only when `id` or `campaign` changes
  useEffect(() => {
    const selectedCampaign = campaign.find(
      (campaign) => campaign._id === id
    );
    setThisCampaign(selectedCampaign || null);

    // Mengambil donations berdasarkan _id campaign
    // if (selectedCampaign) {
    //   getDonationsByCampaignId(selectedCampaign._id);
    // }
  }, [id, campaign, getDonationsByCampaignId]); // Dependency array memastikan ini dijalankan hanya saat `id` atau `campaign` berubah

  console.log(donationByCampaignId);
  if (!thisCampaign) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        Campaign not found
      </div>
    );
  }

  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white">
      <main className="m-4 p-2">
        <div className="absolute top-8 z-10 sm:left-4 md:left-8 lg:left-12">
          <BackButton onClick={handleBack} />
        </div>

        {/* Konten Detail Kampanye */}
        <CampaignDetailContent
          campaign={thisCampaign}
          showFullDescription={showFullDescription}
        />

        {/* Bagian Donatur */}
        <CampaignDonorSection
          donors={donationByCampaignId} // Menggunakan donationsByCampaignId
          showDonors={showDonors}
          toggleShowDonors={() => setShowDonors(!showDonors)}
        />

        {/* Tombol Donasi */}
        <div className="mt-8 mb-12 text-center">
          <Button onClick={() => navigate("/donasi")} className="w-2/6">
            Donasi Sekarang
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CampaignDetail;
