import Footer from "../components/Footer";
import FormDonasi from "../components/FormDonasi";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import bgFotoDonasi from "../assets/bg-foto-donasi.png";

const Donasi = () => {

    return (
        <div>
            <Navbar />
            <Hero 
                imageSrc={bgFotoDonasi}
                title={`Donasikan\n Sebagian Harta Anda`}
            />
            <FormDonasi />
            <Footer />
        </div>
    )
}

export default Donasi;