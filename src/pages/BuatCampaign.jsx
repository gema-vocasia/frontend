import Footer from "../components/Footer";
import FormBuatCampaign from "../components/FormBuatCampaign";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import fotoBuatCampaign from "../assets/bg-foto-buat-campaign.png";

const BuatCampaign = () => {

    return (
        <div>
            <Navbar />
            <Hero 
                imageSrc={fotoBuatCampaign}
                title={`Buat\n Penggalangan Dana`}
            />
            <FormBuatCampaign />
            <Footer />
        </div>
    )
}

export default BuatCampaign;