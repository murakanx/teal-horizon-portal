
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Can I upload a CV?",
    answer: "Yes, you can upload your CV in PDF, DOCX, or RTF format. Your CV will be added to your profile and can be used when applying for jobs. You can upload multiple versions of your CV for different types of applications.",
  },
  {
    id: 2,
    question: "How long will the recruitment process take?",
    answer: "The recruitment process varies depending on the employer and position. Typically, you can expect an initial screening within 1-2 weeks, followed by interviews over the next 2-4 weeks. The entire process from application to job offer usually takes 3-6 weeks.",
  },
  {
    id: 3,
    question: "What does the recruitment and selection process involve?",
    answer: "Our recruitment process typically involves application screening, skills assessments, interviews (which may include phone, video, and in-person interviews), reference checks, and finally the job offer. Some positions may require additional assessments or multiple interview rounds.",
  },
  {
    id: 4,
    question: "Do you recruit for Graduates, Apprentices and Students?",
    answer: "Yes, we have dedicated sections for graduates, apprentices, and students with appropriate entry-level positions. Many of our partner companies offer internships, graduate programs, and apprenticeship opportunities specifically designed for those starting their careers.",
  },
  {
    id: 5,
    question: "Can I receive notifications for any future jobs that may interest me?",
    answer: "Absolutely! You can set up job alerts based on your preferences including job title, location, salary range, and more. You'll receive emails when new positions matching your criteria are posted. You can manage these alerts from your account settings at any time.",
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We've compiled some of the most common questions about our job portal and services
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "shadow-sm" : ""
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center mr-3">
                    {String(faq.id).padStart(2, '0')}
                  </span>
                  {faq.question}
                </span>
                <span className="text-primary">
                  {activeIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "pb-5 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
