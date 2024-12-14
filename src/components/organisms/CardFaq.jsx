import FaqData from "../atoms/FaqData";

const Faq = () => {
  return (
    <div className="flex flex-col md:flex-row mt-28 w-full text-black">
      {/* Kolom Kiri: Judul dan Gambar */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-5">
        {/* Judul FAQ */}
        <section className="relative md:fixed text-left sm:text-4xl font-semibold w-full">
          <div className="text-[#5E84C5] text-center p-6 mb-5 text-4xl lg:text-5xl xl:text-7xl md:left-0 md:top-24 md:w-auto md:text-left z-10">
            <p className="m-0 leading-[30px] sm:leading-[65px]">
              Frequently Asked
            </p>
            <p className="m-0 italic">Questions</p>
          </div>
        </section>
      </div>

      {/* Kolom Kanan: Card FAQ */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-5 px-5 mt-5 md:mt-0">
        <div className="w-full max-w-screen-xl">
          <div className="grid divide-y divide-gray-300">
            {FaqData.map((item, index) => (
              <details
                key={index}
                className="group mb-5 border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                style={{ boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}
              >
                <summary className="flex justify-between items-center font-medium text-lg sm:text-xl cursor-pointer p-4 bg-gray-50 hover:bg-[#EBF1FF]">
                  <div className="flex items-center">
                    <span className="transition transform group-open:rotate-45 pr-3 text-[#5E84C5] text-2xl">
                      +
                    </span>
                    <span className="question">{item.question}</span>
                  </div>
                </summary>
                <div className="answer text-gray-800 px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p
                    className="text-base leading-6 sm:text-lg"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
