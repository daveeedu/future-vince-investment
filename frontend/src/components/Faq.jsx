import React from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import questionMark from "../images/man-question.png";

const Faq = () => {
  return (
    <div className="relative py-16 px-6 bg-[#0d0f1a]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          We answer some of your frequently asked questions regarding our
          platform. If your query is not here, please contact us.
        </p>

        {/* FAQ Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          {/* Left - Image */}
          <div className="hidden md:block w-1/3">
            <img src={questionMark} alt="Man thinking" className="w-full" />
          </div>

          {/* Right - FAQ Accordion */}
          <div className="w-full md:w-2/3">
            <Accordion defaultActiveKey="0">
              {faqData.map((faq, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="my-4 border-0 shadow-lg transition-all duration-300 hover:shadow-yellow-400/50"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "12px",
                  }}
                >
                  <Accordion.Header>
                    <AiOutlineQuestionCircle className="text-yellow-400 text-xl mr-3" />
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="text-gray-300">{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Data
const faqData = [
  {
    question: "When can I deposit/withdraw from my investment account?",
    answer:
      "Deposits and withdrawals are available anytime. Ensure your funds are not in ongoing trades before withdrawing. Your available balance is shown on the dashboard.",
  },
  {
    question: "How do I check my account balance?",
    answer:
      "You can check your balance anytime by logging into your dashboard with your username and password.",
  },
  {
    question: "I forgot my password, what should I do?",
    answer:
      "Go to the password reset page, enter your email, and click 'Reset'. You will receive an email with instructions.",
  },
  {
    question: "How will I know that my withdrawal was successful?",
    answer:
      "You will receive an email notification once the funds are sent. You can also check your transactions or account balance.",
  },
  {
    question: "How much can I withdraw?",
    answer:
      "You can withdraw your full available balance except for funds supporting open positions.",
  },
];

export default Faq;
