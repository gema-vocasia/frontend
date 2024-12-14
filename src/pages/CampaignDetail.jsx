import BackButton from "../components/atoms/BackButton";
import Button from "../components/atoms/Button";
import CampaignDetailContent from "../components/organisms/CampaignDetailContent";
import CampaignDonorSection from "../components/organisms/CampaignDonorSection";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import campaignStore from "../store/campaignStore";
import donationStore from "../store/donationStore";
import "react-toastify/dist/ReactToastify.css";

const CampaignDetail = () => {
  const { campaignId } = useParams();
  console.log(campaignId);
  const navigate = useNavigate();
  const location = useLocation();
  const { getCampaignById } = campaignStore();
  const { donationByCampaignId } = donationStore();
  const [thisCampaign, setThisCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription] = useState(false);
  const [showDonors, setShowDonors] = useState(false);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        console.log("Fetching campaign with ID:", campaignId);
        setLoading(true);
        const data = await getCampaignById(campaignId);
        setThisCampaign(data);
        console.log("Fetched campaign:", data);
      } catch (error) {
        console.error("Error fetching campaign by ID:", error);
      } finally {
        setLoading(false);
      }
    };

    if (campaignId) {
      fetchCampaign();
    }
  }, [campaignId, getCampaignById]);

  // Tampilkan loading
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        Memuat kampanye...
      </div>
    );
  }

  if (!thisCampaign) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        Kampanye tidak ditemukan
        <Button onClick={() => navigate("/")} className="mt-4">
          Kembali ke Beranda
        </Button>
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

        <CampaignDetailContent
          campaign={thisCampaign}
          showFullDescription={showFullDescription}
        />

        {/* Bagian Donatur */}
        <CampaignDonorSection
          donors={donationByCampaignId}
          showDonors={showDonors}
          toggleShowDonors={() => setShowDonors(!showDonors)}
        />

        {/* Tombol Donasi */}
        <div className="mt-8 mb-12 text-center">
          <Button
            onClick={() => navigate(`/donasi/${thisCampaign._id}`)}
            className="w-2/6"
          >
            Donasi Sekarang
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CampaignDetail;
