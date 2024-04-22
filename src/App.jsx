import { motion } from 'framer-motion';
import React from 'react';
import DownArrow from './components/DownArrow.jsx';
import UpArrow from './components/UpArrow.jsx';

export default function App() {
  const [index, setIndex] = React.useState(null);
  const data = [
    {
      question: 'How do I reset my password?',
      answer: `To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions to reset your password.`,
    },
    {
      question: 'How do I update my profile information?',
      answer: `To update your profile information, go to your account settings page. From there, you can edit your profile details such as your name, email, and profile picture.`,
    },
    {
      question: 'Can I change my subscription plan?',
      answer: `Yes, you can change your subscription plan at any time. Go to the subscription settings page and choose the plan that best suits your needs.`,
    },
    {
      question: 'What payment methods do you accept?',
      answer: `We accept payments via credit card, debit card, and PayPal. You can securely enter your payment information during the checkout process.`,
    },
    {
      question: 'How do I contact customer support?',
      answer: `If you need assistance, you can contact our customer support team by emailing support@example.com or by calling our toll-free number at 1-800-123-4567.`,
    },
  ];

  const handleClick = (activeIndex) => {
    index === activeIndex ? setIndex(null) : setIndex(activeIndex);
  };

  const accordionElement = data.map((prev) => {
    return (
      <div
        key={data.indexOf(prev)}
        className='flex flex-col justify-between gap-5'
      >
        <div
          onClick={() => handleClick(data.indexOf(prev))}
          className='flex flex-row justify-between gap-5 text-gray-800 cursor-pointer group'
        >
          <p className='text text-xl md:text-3xl group-hover:underline underline-offset-8'>
            {prev.question}
          </p>
          <DownArrow
            className={`text text-2xl md:text-4xl ${
              data.indexOf(prev) === index ? 'hidden' : null
            }`}
          />
          <UpArrow
            className={`text text-2xl md:text-4xl ${
              data.indexOf(prev) === index ? '' : 'hidden'
            }`}
          />
        </div>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`${
            data.indexOf(prev) === index ? '' : 'hidden'
          } text text-md md:text-xl text-gray-600`}
        >
          {prev.answer}
        </motion.p>
        <hr />
      </div>
    );
  });

  return (
    <div className='w-screen'>
      <div className='bg-zinc-200 m-5 backdrop-blur-sm bg-opacity-30 p-10 flex flex-col gap-10 rounded-lg shadow-sm'>
        <p className='text-[3rem] md:text-[6rem] font-bold leading-none text-center'>
          Accordion
        </p>
        {accordionElement}
      </div>
    </div>
  );
}
