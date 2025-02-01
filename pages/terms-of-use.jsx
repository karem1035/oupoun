import translations from '@/locales/tou_translation';
import { useLanguage } from '../contexts/LanguageContext';

export default function TermsOfUse() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div
      className="flex flex-col items-center justify-center"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="text-start leading-loose text-lg font-medium lg:w-[70%] mt-5 md:mt-8">
        <h2
          className="text-2xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: t.header.title }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.header.lastUpdated }}
        />
        <h3
          className="text-xl font-bold mt-6 mb-4"
          dangerouslySetInnerHTML={{ __html: t.header.agreement }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.intro.companyDescription }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.intro.platformDescription }}
        />
        <h3
          className="text-xl font-bold mt-6 mb-4"
          dangerouslySetInnerHTML={{ __html: t.contact.title }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.contact.description }}
        />
        <ul className="mb-4">
          <li>
            <strong
              dangerouslySetInnerHTML={{ __html: t.contact.emailLabel }}
            />{' '}
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </li>
          <li>
            <strong dangerouslySetInnerHTML={{ __html: t.contact.mailLabel }} />{' '}
            {t.contact.mailAddress}
          </li>
        </ul>
        <h3
          className="text-xl font-bold mt-6 mb-4"
          dangerouslySetInnerHTML={{ __html: t.agreement.title }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.agreement.description }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.agreement.disclaimer }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.agreement.notifications }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.agreement.ageRestriction }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.agreement.minorRequirement }}
        />
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.agreement.recommendation }}
        />
        <h3 className="text-xl font-bold mt-6 mb-4">
          {t.tableOfContents.title}
        </h3>
        <ol className="list-decimal pl-8 mb-4">
          {t.tableOfContents.items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-blue-600">
                {item.text}
              </a>
            </li>
          ))}
        </ol>

        {/* //////////////////////////////// Here /////////////////////////////// */}

        {/* Section 1: OUR SERVICES */}
        <h2
          id="1"
          className="text-2xl font-bold mt-8 mb-4"
          dangerouslySetInnerHTML={{ __html: t.section1.title }}
        />

        <p
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: t.section1.description }}
        />

        {/* Section 2: INTELLECTUAL PROPERTY RIGHTS */}
        <h2
          id="2"
          className="text-2xl font-bold mt-8 mb-4"
          dangerouslySetInnerHTML={{ __html: t.section2.title }}
        />
        {t.section2.description.map((item) => (
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: item }} />
        ))}
        {/* Subsection: Your Use of Our Services */}
        <h3 className="text-xl font-bold mt-6 mb-4">
          {t.section2.useOfServices.title}
        </h3>
        <p className="mb-4">
          Subject to your compliance with these Legal Terms, including the{' '}
          <a href="#7" className="text-blue-600">
            PROHIBITED ACTIVITIES
          </a>{' '}
          section below, we grant you a non-exclusive, non-transferable,
          revocable license to:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>Access the Services; and</li>
          <li>
            Download or print a copy of any portion of the Content to which you
            have properly gained access,
          </li>
        </ol>
        <p className="mb-4">
          solely for your personal, non-commercial use or internal business
          purpose.
        </p>
        <p className="mb-4">
          Except as set out in this section or elsewhere in our Legal Terms, no
          part of the Services and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly
          displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission.
        </p>
        <p className="mb-4">
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in this section or elsewhere in our Legal Terms,
          please address your request to:{' '}
          <a href="mailto:info@opalworld.com.sa" className="text-blue-600">
            info@opalworld.com.sa
          </a>
          .
        </p>
        <p className="mb-4">
          If we ever grant you the permission to post, reproduce, or publicly
          display any part of our Services or Content, you must identify us as
          the owners or licensors of the Services, Content, or Marks and ensure
          that any copyright or proprietary notice appears or is visible on
          posting, reproducing, or displaying our Content.
        </p>
        <p className="mb-4">
          We reserve all rights not expressly granted to you in and to the
          Services, Content, and Marks.
        </p>
        <p className="mb-4">
          Any breach of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms, and your right to use our Services
          will terminate immediately.
        </p>
        {/* Subsection: Your Submissions */}
        <h3 className="text-xl font-bold mt-6 mb-4">Your Submissions</h3>
        <p className="mb-4">
          Please review this section and the{' '}
          <a href="#7" className="text-blue-600">
            PROHIBITED ACTIVITIES
          </a>{' '}
          section carefully prior to using our Services to understand the:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>Rights you give us</li>
          <li>
            Obligations you have when you post or upload any content through the
            Services.
          </li>
        </ol>
        <p className="mb-4">
          <strong>Submissions:</strong>
        </p>
        <p className="mb-4">
          By directly sending us any question, comment, suggestion, idea,
          feedback, or other information about the Services ("Submissions"), you
          agree to assign to us all intellectual property rights in such
          Submissions. We shall own these Submissions and be entitled to their
          unrestricted use and dissemination for any lawful purpose, commercial
          or otherwise, without acknowledgment or compensation to you.
        </p>
        <p className="mb-4">
          <strong>You are responsible for what you post or upload:</strong>
        </p>
        <p className="mb-4">
          By sending us Submissions through any part of the Services, you:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            Confirm that you have read and agree with our{' '}
            <a href="#7" className="text-blue-600">
              PROHIBITED ACTIVITIES
            </a>{' '}
            section and will not post, send, publish, upload, or transmit
            through the Services any Submission that is illegal, harassing,
            hateful, harmful, defamatory, obscene, bullying, abusive,
            discriminatory, threatening, sexually explicit, false, inaccurate,
            deceitful, or misleading.
          </li>
          <li>
            To the extent permissible by applicable law, waive any and all moral
            rights to such Submissions.
          </li>
          <li>
            Warrant that such Submissions are original to you or that you have
            the necessary rights and licenses to submit them and grant us the
            above-mentioned rights.
          </li>
          <li>
            Represent that your Submissions do not constitute confidential
            information.
          </li>
        </ol>
        <p className="mb-4">
          You are solely responsible for your Submissions and agree to reimburse
          us for any and all losses we may suffer due to your breach of this
          section, any third-party intellectual property rights, or applicable
          law.
        </p>
        {/* Section 3: USER REPRESENTATIONS */}
        <h2 id="3" className="text-2xl font-bold mt-8 mb-4">
          3. USER REPRESENTATIONS
        </h2>
        <p className="mb-4">
          By using the Services, you represent and warrant that:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            You have the legal capacity and agree to comply with these Legal
            Terms.
          </li>
          <li>You are not under the age of 13.</li>
          <li>
            You are not a minor in the jurisdiction where you reside, or if a
            minor, you have received parental permission to use the Services.
          </li>
          <li>
            You will not access the Services through automated or non-human
            means (e.g., bots or scripts).
          </li>
          <li>
            You will not use the Services for any illegal or unauthorized
            purpose.
          </li>
          <li>
            Your use of the Services will not violate any applicable law or
            regulation.
          </li>
        </ol>
        <p className="mb-4">
          If you provide any untrue, inaccurate, not current, or incomplete
          information, we reserve the right to suspend or terminate your account
          and refuse any and all current or future use of the Services.
        </p>
        {/* Section 4: PRODUCTS */}
        <h2 id="4" className="text-2xl font-bold mt-8 mb-4">
          4. PRODUCTS
        </h2>
        <p className="mb-4">
          We make every effort to display as accurately as possible the colors,
          features, specifications, and details of the products available on the
          Services. However, we do not guarantee that the displayed details will
          be accurate, complete, reliable, current, or free of errors. Your
          electronic display may not accurately reflect the actual product
          colors or details.
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            All products are subject to availability, and we cannot guarantee
            that items will be in stock.
          </li>
          <li>
            We reserve the right to discontinue any products at any time for any
            reason.
          </li>
          <li>Prices for all products are subject to change.</li>
        </ol>
        {/* Section 5: PURCHASES AND PAYMENT */}
        <h2 id="5" className="text-2xl font-bold mt-8 mb-4">
          5. PURCHASES AND PAYMENT
        </h2>
        <p className="mb-4">
          We will make every effort to ensure that the purchasing process is
          smooth and secure. Additional details about purchases and payment
          methods will be provided where applicable.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-4">Payment Terms</h3>
        <p className="mb-4">We accept the following forms of payment:</p>
        <ol className="list-decimal pl-8 mb-4">
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
          <li>MADA</li>
        </ol>
        <p className="mb-4">
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the Services. You
          further agree to promptly update account and payment information,
          including email address, payment method, and payment card expiration
          date, so that we can complete your transactions and contact you as
          needed.
        </p>
        <p className="mb-4">
          Sales tax will be added to the price of purchases as required. We may
          change prices at any time. All payments shall be in{' '}
          <strong>Saudi Riyal</strong>.
        </p>
        <p className="mb-4">
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees, and you authorize us to
          charge your chosen payment provider for any such amounts upon placing
          your order. We reserve the right to correct any errors or mistakes in
          pricing, even if we have already requested or received payment.
        </p>
        <p className="mb-4">
          <strong>We reserve the right to:</strong>
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>Refuse any order placed through the Services.</li>
          <li>
            Limit or cancel quantities purchased per person, household, or
            order.
          </li>
          <li>
            Limit or prohibit orders that appear to be placed by dealers,
            resellers, or distributors.
          </li>
        </ol>
        {/* Section 6: Return/Refunds Policy */}
        <h2 id="6" className="text-2xl font-bold mt-8 mb-4">
          6. Return/Refunds Policy
        </h2>
        <p className="mb-4">
          In accordance with the regulations of the Ministry of Commerce and
          Investment in Saudi Arabia, this Return and Refund Policy governs the
          return, refund, or exchange of purchases (<strong>"Purchases"</strong>
          ) made through our mobile application.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-4">
          General Conditions for Returns and Refunds
        </h3>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            Purchases that have not been used can be returned within{' '}
            <strong>7 days</strong> from the date of purchase.
          </li>
          <li>
            Purchases that have not been used can be exchanged within{' '}
            <strong>14 days</strong> from the date of purchase.
          </li>
          <li>
            A valid invoice or proof of purchase must accompany any return or
            exchange request.
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-6 mb-4">
          Non-Refundable and Non-Returnable Conditions
        </h3>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            <strong>Expired Purchases</strong>: Purchases{' '}
            <strong>cannot be returned or refunded</strong> after their
            expiration date, whether used or unused.
          </li>
          <li>
            <strong>Used Purchases</strong>: Purchases{' '}
            <strong>cannot be returned, refunded, or exchanged</strong> if they
            have been used or redeemed in any form.
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-6 mb-4">
          Valid Reasons for Return or Exchange
        </h3>
        <p className="mb-4">
          Customers may return or exchange a Purchase only under the following
          conditions:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            <strong>Wrong Purchase Received</strong>: The customer received a
            Purchase different from what was ordered.
          </li>
          <li>
            <strong>Incorrect Information</strong>: The Purchase received
            contains details or information different from what was displayed on
            the App.
          </li>
          <li>
            <strong>Service Provider Refusal</strong>: The service provider
            refuses to honor a valid Purchase without valid justification.
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-6 mb-4">
          How to Request a Return or Exchange
        </h3>
        <p className="mb-4">
          To initiate a return or exchange, the customer must:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            Contact our support team within the return or exchange period (7 or
            14 days, respectively).
          </li>
          <li>
            Provide the order number, reason for return/exchange, and proof of
            purchase (e.g., invoice or order confirmation).
          </li>
        </ol>
        <p className="mb-4">
          Our team will review the request and respond promptly. If the return
          or exchange is approved, the applicable refund or replacement will be
          processed according to our policies.
        </p>
        {/* Section 7: Prohibited Activities */}
        <h2 id="7" className="text-2xl font-bold mt-8 mb-4">
          7. Prohibited Activities
        </h2>
        <p className="mb-4">
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>
        <p className="mb-4">As a user of the Services, you agree not to:</p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            Systematically retrieve data or other content from the Services to
            create or compile a collection, compilation, database, or directory
            without written permission.
          </li>
          <li>Trick, defraud, or mislead us and other users.</li>
          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Services.
          </li>
          <li>Disparage, tarnish, or otherwise harm us and/or the Services.</li>
          <li>
            Use any information obtained from the Services to harass, abuse, or
            harm another person.
          </li>
          <li>
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </li>
          <li>
            Use the Services in a manner inconsistent with any applicable laws
            or regulations.
          </li>
          <li>Engage in unauthorized framing of or linking to the Services.</li>
          <li>
            Upload or transmit viruses, Trojan horses, or other harmful
            material.
          </li>
          <li>Engage in any automated use of the system.</li>
          <li>
            Delete the copyright or other proprietary rights notice from any
            Content.
          </li>
          <li>
            Decipher, decompile, disassemble, or reverse engineer any of the
            software comprising the Services.
          </li>
          <li>Use or launch any unauthorized script or other software.</li>
          <li>
            Use a buying agent or purchasing agent to make purchases on the
            Services.
          </li>
          <li>
            Make any unauthorized use of the Services, including collecting
            usernames and/or email addresses of users for the purpose of sending
            unsolicited email, or creating user accounts by automated means or
            under false pretenses.
          </li>
          <li>
            Upload or transmit any material that acts as a passive or active
            information collection or transmission mechanism.
          </li>
          <li>
            Interfere with, disrupt, or create an undue burden on the Services
            or the networks or services connected to the Services.
          </li>
          <li>
            Harass, annoy, intimidate, or threaten any of our employees or
            agents.
          </li>
          <li>
            Attempt to bypass any measures of the Services designed to prevent
            or restrict access.
          </li>
          <li>
            Copy or adapt the Services' software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </li>
          <li>
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Services.
          </li>
          <li>
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Services, or
            use or launch any
          </li>
          <li>
            Use a buying agent or purchasing agent to make purchases on the
            Services.
          </li>
          <li>
            Use the Services as part of any effort to compete with us or
            otherwise use the Services and/or the Content for any
            revenue-generating
          </li>
        </ol>
        {/* Section 8: User Generated Contributions */}
        <h2 id="8" className="text-2xl font-bold mt-8 mb-4">
          8. User Generated Contributions
        </h2>
        <p className="mb-4">
          The Services does not offer users the ability to submit or post
          content. We may provide you with the opportunity to create, submit,
          post, display, transmit, perform, publish, distribute, or broadcast
          content and materials to us or on the Services, including but not
          limited to text, writings, video, audio, photographs, graphics,
          comments, suggestions, personal information, or other material
          (collectively, <strong>"Contributions"</strong>). Contributions may be
          viewable by other users of the Services and through third-party
          websites. As such, any Contributions you transmit may be treated in
          accordance with the Services' Privacy Policy.
        </p>
        <p className="mb-4">
          When you create or make available any Contributions, you thereby
          represent and warrant that:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </li>
          <li>
            You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Services, and other users of the Services to use your
            Contributions in any manner contemplated by the Services and these
            Legal Terms.
          </li>
          <li>
            You have the written consent, release, and/or permission of each and
            every identifiable individual person in your Contributions to use
            the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions in any
            manner contemplated by the Services and these Legal Terms.
          </li>
          <li>Your Contributions are not false, inaccurate, or misleading.</li>
          <li>
            Your Contributions are not unsolicited or unauthorized advertising,
            promotional materials, pyramid schemes, chain letters, spam, mass
            mailings, or other forms of solicitation.
          </li>
          <li>
            Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </li>
          <li>
            Your Contributions do not ridicule, mock, disparage, intimidate, or
            abuse anyone.
          </li>
          <li>
            Your Contributions are not used to harass or threaten (in the legal
            sense of those terms) any other person and to promote violence
            against a specific person or class of people.
          </li>
          <li>
            Your Contributions do not violate any applicable law, regulation, or
            rule.
          </li>
          <li>
            Your Contributions do not violate the privacy or publicity rights of
            any third party.
          </li>
          <li>
            Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors.
          </li>
          <li>
            Your Contributions do not include any offensive comments that are
            connected to race, national origin, gender, sexual preference, or
            physical handicap.
          </li>
          <li>
            Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Legal Terms, or any applicable
            law or regulation.
          </li>
        </ol>
        <p className="mb-4">
          Any use of the Services in violation of the foregoing violates these
          Legal Terms and may result in, among other things, termination or
          suspension of your rights to use the Services.
        </p>
        {/* Section 9: Contribution License */}
        <h2 id="9" className="text-2xl font-bold mt-8 mb-4">
          9. Contribution License
        </h2>
        <p className="mb-4">
          You and Services agree that we may access, store, process, and use any
          information and personal data that you provide following the terms of
          the{' '}
          <a
            href="https://www.notion.so/Oupoun-Terms-Conditions-15e90b58f31980edbf9beb469ebd9769?pvs=21"
            className="text-blue-600"
          >
            Privacy Policy
          </a>{' '}
          and your choices (including settings).
        </p>
        <p className="mb-4">
          By submitting suggestions or other feedback regarding the Services,
          you agree that we can use and share such feedback for any purpose
          without compensation to you.
        </p>
        <p className="mb-4">
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Services. You
          are solely responsible for your Contributions to the Services and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
        </p>
        {/* Section 10: Mobile Application License */}
        <h2 id="10" className="text-2xl font-bold mt-8 mb-4">
          10. Mobile Application License
        </h2>
        <h3 className="text-xl font-bold mt-6 mb-4">Use License</h3>
        <p className="mb-4">
          If you access the Services via the App, then we grant you a revocable,
          non-exclusive, non-transferable, limited right to install and use the
          App on wireless electronic devices owned or controlled by you, and to
          access and use the App on such devices strictly in accordance with the
          terms and conditions of this mobile application license contained in
          these Legal Terms. You shall not:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            Except as permitted by applicable law, decompile, reverse engineer,
            disassemble, attempt to derive the source code of, or decrypt the
            App.
          </li>
          <li>
            Make any modification, adaptation, improvement, enhancement,
            translation, or derivative work from the App.
          </li>
          <li>
            Violate any applicable laws, rules, or regulations in connection
            with your access or use of the App.
          </li>
          <li>
            Remove, alter, or obscure any proprietary notice (including any
            notice of copyright or trademark) posted by us or the licensors of
            the App.
          </li>
          <li>
            Use the App for any revenue-generating endeavor, commercial
            enterprise, or other purpose for which it is not designed or
            intended.
          </li>
          <li>
            Make the App available over a network or other environment
            permitting access or use by multiple devices or users at the same
            time.
          </li>
          <li>
            Use the App for creating a product, service, or software that is,
            directly or indirectly, competitive with or in any way a substitute
            for the App.
          </li>
          <li>
            Use the App to send automated queries to any website or to send any
            unsolicited commercial email.
          </li>
          <li>
            Use any proprietary information or any of our interfaces or our
            other intellectual property in the design, development, manufacture,
            licensing, or distribution of any applications, accessories, or
            devices for use with the App.
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-6 mb-4">
          Apple and Android Devices
        </h3>
        <p className="mb-4">
          The following terms apply when you use the App obtained from either
          the Apple Store or Google Play (each an "App Distributor") to access
          the Services:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            The license granted to you for our App is limited to a
            non-transferable license to use the application on a device that
            utilizes the Apple iOS or Android operating systems, as applicable,
            and in accordance with the usage rules set forth in the applicable
            App Distributor’s terms of service.
          </li>
          <li>
            We are responsible for providing any maintenance and support
            services with respect to the App as specified in the terms and
            conditions of this mobile application license contained in these
            Legal Terms or as otherwise required under applicable law, and you
            acknowledge that each App Distributor has no obligation whatsoever
            to furnish any maintenance and support services with respect to the
            App.
          </li>
          <li>
            In the event of any failure of the App to conform to any applicable
            warranty, you may notify the applicable App Distributor, and the App
            Distributor, in accordance with its terms and policies, may refund
            the purchase price, if any, paid for the App, and to the maximum
            extent permitted by applicable law, the App Distributor will have no
            other warranty obligation whatsoever with respect to the App.
          </li>
          <li>
            You represent and warrant that:
            <ol className="list-decimal pl-8 mt-2">
              <li>
                You are not located in a country that is subject to a US
                government embargo, or that has been designated by the US
                government as a "terrorist supporting" country.
              </li>
              <li>
                You are not listed on any US government list of prohibited or
                restricted parties.
              </li>
            </ol>
          </li>
          <li>
            You must comply with applicable third-party terms of agreement when
            using the App, e.g., if you have a VoIP application, then you must
            not be in violation of their wireless data service agreement when
            using the App.
          </li>
          <li>
            You acknowledge and agree that the App Distributors are third-party
            beneficiaries of the terms and conditions in this mobile application
            license contained in these Legal Terms, and that each App
            Distributor will have the right (and will be deemed to have accepted
            the right) to enforce the terms and conditions in this mobile
            application license contained in these Legal Terms against you as a
            third-party beneficiary thereof.
          </li>
        </ol>
        {/* Section 11: Services Management */}
        <h2 id="11" className="text-2xl font-bold mt-8 mb-4">
          11. Services Management
        </h2>
        <p className="mb-4">
          We reserve the right, but not the obligation, to:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>Monitor the Services for violations of these Legal Terms.</li>
          <li>
            Take appropriate legal action against anyone who, in our sole
            discretion, violates the law or these Legal Terms, including without
            limitation, reporting such user to law enforcement authorities.
          </li>
          <li>
            In our sole discretion and without limitation, refuse, restrict
            access to, limit the availability of, or disable (to the extent
            technologically feasible) any of your Contributions or any portion
            thereof.
          </li>
          <li>
            In our sole discretion and without limitation, notice, or liability,
            to remove from the Services or otherwise disable all files and
            content that are excessive in size or are in any way burdensome to
            our systems.
          </li>
          <li>
            Otherwise manage the Services in a manner designed to protect our
            rights and property and to facilitate the proper functioning of the
            Services.
          </li>
        </ol>
        {/* Section 12: Privacy Policy */}
        <h2 id="12" className="text-2xl font-bold mt-8 mb-4">
          12. Privacy Policy
        </h2>
        <p className="mb-4">
          We care about data privacy and security. Please review our Privacy
          Policy:
        </p>
        <p className="mb-4">
          <a
            href="https://server.getopal.net/privacy"
            className="text-blue-600"
          >
            https://server.getopal.net/privacy
          </a>
          .
        </p>
        <p className="mb-4">
          By using the Services, you agree to be bound by our Privacy Policy,
          which is incorporated into these Legal Terms. Please be advised the
          Services are hosted in <strong>Saudi Arabia</strong>. If you access
          the Services from any other region of the world with laws or other
          requirements governing personal data collection, use, or disclosure
          that differ from applicable laws in <strong>Saudi Arabia</strong>,
          then through your continued use of the Services, you are transferring
          your data to <strong>Saudi Arabia</strong>, and you expressly consent
          to have your data transferred to and processed in{' '}
          <strong>Saudi Arabia</strong>.
        </p>
        {/* Section 13: Term and Termination */}
        <h2 id="13" className="text-2xl font-bold mt-8 mb-4">
          13. Term and Termination
        </h2>
        <p className="mb-4">
          These Legal Terms shall remain in full force and effect while you use
          the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL
          TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
          APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION
          THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </p>
        <p className="mb-4">
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </p>
        {/* Section 14: Modifications and Interruptions */}
        <h2 id="14" className="text-2xl font-bold mt-8 mb-4">
          14. Modifications and Interruptions
        </h2>
        <p className="mb-4">
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. We also reserve the right to modify or discontinue all
          or part of the Services without notice at any time. We will not be
          liable to you or any third party for any modification, price change,
          suspension, or discontinuance of the Services.
        </p>
        <p className="mb-4">
          We cannot guarantee the Services will be available at all times. We
          may experience hardware, software, or other problems or need to
          perform maintenance related to the Services, resulting in
          interruptions, delays, or errors. We reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Services
          at any time or for any reason without notice to you. You agree that we
          have no liability whatsoever for any loss, damage, or inconvenience
          caused by your inability to access or use the Services during any
          downtime or discontinuance of the Services. Nothing in these Legal
          Terms will be construed to obligate us to maintain and support the
          Services or to supply any corrections, updates, or releases in
          connection therewith.
        </p>
        {/* Section 15: Governing Law */}
        <h2 id="15" className="text-2xl font-bold mt-8 mb-4">
          15. Governing Law
        </h2>
        <p className="mb-4">
          These Legal Terms shall be governed by and defined following the laws
          of <strong>Saudi Arabia</strong>.{' '}
          <strong>Opal World For Trading Company</strong> and yourself
          irrevocably consent that the courts of <strong>Saudi Arabia</strong>{' '}
          shall have exclusive jurisdiction to resolve any dispute which may
          arise in connection with these Legal Terms.
        </p>
        {/* Section 16: Dispute Resolution */}
        <h2 id="16" className="text-2xl font-bold mt-8 mb-4">
          16. Dispute Resolution
        </h2>
        <h3 className="text-xl font-bold mt-6 mb-4">Informal Negotiations</h3>
        <p className="mb-4">
          To expedite resolution and control the cost of any dispute,
          controversy, or claim related to these Legal Terms (each a "Dispute"
          and collectively, the "Disputes") brought by either you or us
          (individually, a "Party" and collectively, the "Parties"), the Parties
          agree to first attempt to negotiate any Dispute (except those Disputes
          expressly provided below) informally for at least{' '}
          <strong>thirty (30)</strong> days before initiating arbitration. Such
          informal negotiations commence upon written notice from one Party to
          the other Party.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-4">Binding Arbitration</h3>
        <p className="mb-4">
          Any dispute arising out of or in connection with these Legal Terms,
          including any question regarding its existence, validity, or
          termination, shall be referred to and finally resolved by the
          International Commercial Arbitration Court under the European
          Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according
          to the Rules of this ICAC, which, as a result of referring to it, is
          considered as the part of this clause. The number of arbitrators shall
          be <strong>three (3)</strong>. The seat, or legal place, or
          arbitration shall be <strong>Riyadh</strong>,{' '}
          <strong>Saudi Arabia</strong>. The language of the proceedings shall
          be <strong>Arabic</strong>. The governing law of these Legal Terms
          shall be substantive law of <strong>Saudi Arabia</strong>.
        </p>
        <h3 className="text-xl font-bold mt-6 mb-4">Restrictions</h3>
        <p className="mb-4">
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>No arbitration shall be joined with any other proceeding.</li>
          <li>
            There is no right or authority for any Dispute to be arbitrated on a
            class-action basis or to utilize class action procedures.
          </li>
          <li>
            There is no right or authority for any Dispute to be brought in a
            purported representative capacity on behalf of the general public or
            any other persons.
          </li>
        </ol>
        <h3 className="text-xl font-bold mt-6 mb-4">
          Exceptions to Informal Negotiations and Arbitration
        </h3>
        <p className="mb-4">
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning informal negotiations and binding
          arbitration:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>
            Any Disputes seeking to enforce or protect, or concerning the
            validity of, any of the intellectual property rights of a Party.
          </li>
          <li>
            Any Dispute related to, or arising from, allegations of theft,
            piracy, invasion of privacy, or unauthorized use.
          </li>
          <li>Any claim for injunctive relief.</li>
        </ol>
        <p className="mb-4">
          If this provision is found to be illegal or unenforceable, then
          neither Party will elect to arbitrate any Dispute falling within that
          portion of this provision found to be illegal or unenforceable, and
          such Dispute shall be decided by a court of competent jurisdiction
          within the courts listed for jurisdiction above, and the Parties agree
          to submit to the personal jurisdiction of that court.
        </p>
        {/* Section 17: Corrections */}
        <h2 id="17" className="text-2xl font-bold mt-8 mb-4">
          17. Corrections
        </h2>
        <p className="mb-4">
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
        {/* Section 18: Disclaimer */}
        <h2 id="18" className="text-2xl font-bold mt-8 mb-4">
          18. Disclaimer
        </h2>
        <p className="mb-4">
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
          AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF
          ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL
          ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,</li>
          <li>
            PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
            RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES,
          </li>
          <li>
            ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY
            AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
            THEREIN,
          </li>
          <li>
            ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
            SERVICES,
          </li>
          <li>
            ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
            TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR
          </li>
          <li>
            ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS
            OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT
            POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.
          </li>
        </ol>
        <p className="mb-4">
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
          ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH
          THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL
          NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
          MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND
          EXERCISE CAUTION WHERE APPROPRIATE.
        </p>
        {/* Section 19: Limitations of Liability */}
        <h2 id="19" className="text-2xl font-bold mt-8 mb-4">
          19. Limitations of Liability
        </h2>
        <p className="mb-4">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES.
        </p>
        <p className="mb-4">
          NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
          LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM
          OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF
          ANY, BY YOU TO US.
        </p>
        <p className="mb-4">
          CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS
          ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
          DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
          DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
          ADDITIONAL RIGHTS.
        </p>
        {/* Section 20: Indemnification */}
        <h2 id="20" className="text-2xl font-bold mt-8 mb-4">
          20. Indemnification
        </h2>
        <p className="mb-4">
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys’ fees and expenses,
          made by any third party due to or arising out of:
        </p>
        <ol className="list-decimal pl-8 mb-4">
          <li>Use of the Services;</li>
          <li>Breach of these Legal Terms;</li>
          <li>
            Any breach of your representations and warranties set forth in these
            Legal Terms;
          </li>
          <li>
            Your violation of the rights of a third party, including but not
            limited to intellectual property rights; or
          </li>
          <li>
            Any overt harmful act toward any other user of the Services with
            whom you connected via the Services.
          </li>
        </ol>
        <p className="mb-4">
          Notwithstanding the foregoing, we reserve the right, at your expense,
          to assume the exclusive defense and control of any matter for which
          you are required to indemnify us, and you agree to cooperate, at your
          expense, with our defense of such claims. We will use reasonable
          efforts to notify you of any such claim, action, or proceeding which
          is subject to this indemnification upon becoming aware of it.
        </p>
        {/* Section 21: User Data */}
        <h2
          id="21"
          className="text-2xl font-bold mt-8 mb-4"
          dangerouslySetInnerHTML={{ __html: t.section21.title }}
        />
        {t.section21.description.map((item, index) => (
          <p
            key={index}
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
        {/* Section 22: Electronic Communications, Transactions, and Signatures */}
        <h2
          id="22"
          className="text-2xl font-bold mt-8 mb-4"
          dangerouslySetInnerHTML={{ __html: t.section22.title }}
        />
        {t.section22.description.map((item, index) => (
          <p
            key={index}
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
        {/* Section 23: Miscellaneous */}
        <h2
          id="23"
          className="text-2xl font-bold mt-8 mb-4"
          dangerouslySetInnerHTML={{ __html: t.section23.title }}
        />
        {t.section23.description.map((item, index) => (
          <p
            key={index}
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
        {/* Section 24: Contact Us */}
        <h2 id="24" className="text-2xl font-bold mt-8 mb-4">
          24. Contact Us
        </h2>
        <p className="mb-4">
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
        </p>
        <p className="mb-4">
          <strong>Opal World For Trading Company</strong>
        </p>
        <p className="mb-4">
          Salah Ad Din Al Ayyubi Rd, Al Malaz, Riyadh 12836
        </p>
      </div>
    </div>
  );
}
