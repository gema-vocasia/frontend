import Navbar from '../components//organisms/Navbar';
import Footer from "../components/organisms/Footer";
import FormDonasi from "../components/organisms/FormDonasi";
import Hero from '../components/organisms/Hero';
import bgFotoDonasi from "../assets/images/bg-foto-donasi.png";

const Donasi = () => {
    
    return (
        <div>
            <Navbar />
            <Hero
                title="Setetes Kebaikan untuk Sejuta Harapan"
                subtitle="Bergabunglah dalam misi kemanusiaan ini"
                image={bgFotoDonasi}
            />
            <FormDonasi />
            <Footer />
        </div>
    )
}

export default Donasi;