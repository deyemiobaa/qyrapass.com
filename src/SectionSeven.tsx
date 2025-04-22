// Install required packages:
// npm install @radix-ui/react-accordion

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Button } from './components/Button';

const faqItems = [
  {
    question: "How is this more secure than keycards?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, autem."
  },
  {
    question: "What if members don't have smartphones?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, autem."
  },
  {
    question: "How long does setup take?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, autem."
  },
  {
    question: "Can I restrict access times?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, autem.."
  },
  {
    question: "What happens if our Wi-Fi goes down",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, autem.."
  },
];

export const SectionSeven = () => (
  <div className="container py-10 px-5 md:px-15  xl:px-20 md:py-10  mx-auto">
    <div className="text-left mb-14 space-y-3">
      <h2 className="text-xl text-[#1B1F3B] sm:text-2xl md:text-3xl lg:text-5xl xl:text-[56px]/[64px] tracking-tight font-semibold max-w-2xl">
        Frequently asked Questions!
      </h2>
      <p className="text-sm text-left md:text-sm xl:text-lg/[28px] text-[#333858] lg:max-w-lg">
        Here are common questions people have about QyrdPass!
      </p>
    </div>

    <Accordion.Root 
      type="single" 
      collapsible 
      className="space-y-4 mb-16"
    >
      {faqItems.map((item, index) => (
        <Accordion.Item 
          key={index} 
          value={`item-${index}`}
          className="bg-white   border-b border-gray-200"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex justify-between items-center w-full p-6 text-left group">
              <span className="text-lg font-semibold text-[#1B1F3B]">
                {item.question}
              </span>
              <ChevronDownIcon 
                className="text-gray-600 ml-4 h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" 
                aria-hidden 
              />
            </Accordion.Trigger>
          </Accordion.Header>
          
          <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
            <div className="px-6 pb-6 pt-2 text-[#1B1F3B]">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>

    <div className="flex flex-col items-center md:items-start  gap-6">
     <Button />
      <p className="text-[#656673]">
        Still have questions?
      </p>
    </div>
  </div>
);

