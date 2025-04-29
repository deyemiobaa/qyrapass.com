import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <div className=" h-[80vh] px-6 py-2 md:h-[75vh] bg-[#1B1F3B] ">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-[2.25rem] text-center md:text-left font-[900] leading-[4.25rem] tracking-[-0.09rem] text-[#FFFFFF] md:text-[3.5rem] md:font-bold md:leading-[4rem]">
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="px-6 py-8 space-y-8 max-w-7xl mx-auto">
        <Section title="What information do we collect?">
          We collect information from you when you register on our site,
          subscribe to our newsletter or fill out a form. When ordering or
          registering on our site, as appropriate, you may be asked to enter
          your: name, e-mail address, mailing address or phone number. You may,
          however, visit our site anonymously.
        </Section>

        <Section title="What do we use your information for?">
          Any of the information we collect from you may be used in one of the
          following ways:
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <span className="font-normal">
                To personalize your experience: your information helps us to
                better respond to your individual needs
              </span>
            </li>
            <li>
              <span className="font-normal">
                To improve our website: we continually strive to improve our
                website offerings based on the information and feedback we
                receive from you
              </span>
            </li>
            <li>
              <span className="font-normal">
                To send periodic emails: the email address you provide for order
                processing may be used to send you information and updates
                pertaining to your order, in addition to receiving occasional
                company news, updates, related product or service information,
                etc.
              </span>
            </li>
          </ul>
        </Section>

        <Section title="How do we protect your information?">
          We implement a variety of security measures to maintain the safety of
          your personal information when you enter, submit, or access your
          personal information.
        </Section>

        <Section title="Do we use cookies?">
          Yes, cookies are small files that a site or its service provider
          transfers to your computer's hard drive through your Web browser (if
          you allow) that enables the sites or service providers' systems to
          recognize your browser and capture and remember certain information.
          <br />
          <br />
          We use cookies to compile aggregate data about site traffic and site
          interaction so that we can offer better site experiences and tools in
          the future.
        </Section>

        <Section title="Do we disclose any information to outside parties?">
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include trusted
          third parties who assist us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential. We may also release your information
          when we believe release is appropriate to comply with the law, enforce
          our site policies, or protect ours or others rights, property, or
          safety. However, non-personally identifiable visitor information may
          be provided to other parties for marketing, advertising, or other
          uses.
        </Section>

        <Section title="Third Party Links">
          Occasionally, at our discretion, we may include or offer third party
          products or services on our website. These third party sites have
          separate and independent privacy policies. We therefore have no
          responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our
          site and welcome any feedback about these sites.
        </Section>

        <Section title="Online Privacy Policy Only">
          This online privacy policy applies only to information collected
          through our website and not to information collected offline.
        </Section>

        {/* <Section title="Terms and Conditions">
          Please also visit our Terms and Conditions section establishing the
          use, disclaimers, and limitations of liability governing the use of
          our website at{" "}
          <a
            href="https://www.qyrapass.com"
            className="text-blue-600 underline"
          >
            www.qyrapass.com
          </a>
          .
        </Section> */}

        <Section title="Your Consent">
          By using our site, you consent to our website's privacy policy.
        </Section>

        <Section title="Changes to our Privacy Policy">
          If we decide to change our privacy policy, we will post those changes
          on this page.
        </Section>
      </div>
      <Footer />
    </>
  );
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h2 className="text-[18px] font-medium text-[#1B1F3B]">{title}</h2>
    <p className="mt-4 text-[16px] font-normal text-[#333858]">{children}</p>
  </div>
);
