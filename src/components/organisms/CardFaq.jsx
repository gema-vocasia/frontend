import { useState } from "react";
import FaqData from "../atoms/FaqData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  <FaqData />;

  return (
    <main className="mt-[100px] container mx-auto px-4 py-8">
      <section className="space-y-6">
        <div className="flex justify-center">
          <h1 className="font-bold text-4xl mb-10">
            FAQ (FREQUENTLY ASKED QUESTIONS)
          </h1>
        </div>

        {FaqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 border border-gray-400"
          >
            <div className="flex items-center justify-between gap-5">
              <p className="font-bold text-xl text-gray-700 mr-5">
                {faq.question}
              </p>
              <button
                className="text-black-500 text-2xl focus:outline-none font-bold"
                onClick={() => toggleAnswer(index)}
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            {openIndex === index && (
              <p
                className="mt-2 text-gray-600 font-medium text-md mr-5"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Faq;
