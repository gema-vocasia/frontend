import Navbar from '../components//organisms/Navbar';
import Footer from "../components/organisms/Footer";
import Hero from '../components/organisms/Hero';
import FormBuatCampaign from "../components/organisms/FormBuatCampaign";
import bgHeroBuatCampaign from "../assets/images/bg-foto-buat-campaign.png";

const BuatCampaign = () => {

    return (
        <div>
            <Navbar />
            <Hero
                title="Buat Penggalangan Dana"
                subtitle="Ajak Teman dan Keluarga untuk Mendukung Tujuan Anda"
                image={bgHeroBuatCampaign}
            />
            <FormBuatCampaign />
            <Footer />
        </div>
    )
}

export default BuatCampaign;