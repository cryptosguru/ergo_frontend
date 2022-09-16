import { FormattedMessage } from 'react-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { getIconComponentByName } from '../../utils/icons-map';

const slides = [
  {
    titleMessage: (
      <FormattedMessageFixed
        defaultMessage="A Fair Start"
        id="components.highlights.slide.1.title"
        values={{ breakingLine: <br /> }}
      />
    ),
    quoteMessage: (
      <FormattedMessageFixed
        defaultMessage="95.57% {breakingLine}Public Allocation"
        id="components.highlights.slide.1.quote"
        values={{ breakingLine: <br /> }}
      />
    ),
    textMessage: (
      <FormattedMessageFixed
        defaultMessage="When Ergo launched in 2019, there was no initial coin offering, no pre-mine and no pre-allocation of tokens to any team members or venture capitalists. A truly fair launch with 4.43% of funds allocated to ecosystem development. Unparalleled in any other smart-contract platform."
        id="components.highlights.slide.1.text"
        values={{ breakingLine: <br /> }}
      />
    ),
    svg: 'Highlights1',
    viewBox: '0 0 562 562',
    height: 562 * 0.5,
    width: 562 * 0.5,
  },
  {
    titleMessage: (
      <FormattedMessageFixed
        defaultMessage="Alternative Economics"
        id="components.highlights.slide.2.title"
        values={{ breakingLine: <br /> }}
      />
    ),
    quoteMessage: (
      <FormattedMessageFixed
        defaultMessage="TRUE P2P"
        id="components.highlights.slide.2.quote"
        values={{ breakingLine: <br /> }}
      />
    ),
    textMessage: (
      <FormattedMessageFixed
        defaultMessage="Enabling more innovative, targeted implementations that conventional banking can't match. Ergo offers powerful tools with smart contract-powered microcredit facilities and Local Exchange Trading Systems (LETS)."
        id="components.highlights.slide.2.text"
        values={{ breakingLine: <br /> }}
      />
    ),
    svg: 'Highlights2',
    viewBox: '0 0 416 402',
    height: 416 * 0.5,
    width: 402 * 0.5,
  },
  {
    titleMessage: (
      <FormattedMessageFixed
        defaultMessage="Optional Privacy"
        id="components.highlights.slide.3.title"
        values={{ breakingLine: <br /> }}
      />
    ),
    quoteMessage: (
      <FormattedMessageFixed
        defaultMessage="Σ-protocols"
        id="components.highlights.slide.3.quote"
        values={{ breakingLine: <br /> }}
      />
    ),
    textMessage: (
      <FormattedMessageFixed
        defaultMessage="Privacy must remain an option to protect autonomy. Privacy is the ability to create barriers and erect boundaries to create a space for the individual. It is up to each what borders and boundaries they choose to make. This enables new models of financial interaction, underpinned by a safe and rich scripting language, ErgoScript and flexible and powerful Zero-Knowledge proofs"
        id="components.highlights.slide.3.text"
        values={{ breakingLine: <br /> }}
      />
    ),
    svg: 'Highlights3',
    viewBox: '0 0 528 257',
    height: 528 * 0.5,
    width: 257 * 0.5,
  },
];

function FormattedMessageFixed(props: any) {
  return <FormattedMessage {...props} />;
}

function Highlights() {
  return (
    <div
      id="Highlights"
      className="mt-40 max-w-[1300px] mx-auto p-4 relative"
      style={{ zIndex: 12 }}
    >
      <div className="text-center">
        <p className="font-roboto font-bold text-[14px] lg:text-[20px] text-[#585858]">
          <FormattedMessage defaultMessage="HIGHLIGHTS" id="components.highlights.title" />
        </p>
      </div>

      <Swiper navigation={true} modules={[Navigation]} className="SwiperHighlights">
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div>
              <div className="lg:hidden">
                <div className="text-center">
                  <p className="font-vinila-extended-light text-[40px]">{item.titleMessage}</p>
                </div>
                <div className="flex">
                  <div className="mx-auto">
                    {getIconComponentByName(item.svg, {
                      viewBox: item.viewBox,
                      className: 'highlightsShadow my-auto h-96',
                      height: item.height,
                      width: item.height,
                    })}
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-16 flex-grow">
                    <p className="font-vinila-extended leading-none text-[24px]">
                      {item.quoteMessage}
                    </p>
                    <p className="font-body-2-regular text-[#585858] mt-4">{item.textMessage}</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="flex mx-20">
                  <div className="item w-1/3">
                    {getIconComponentByName(item.svg + 'big', {
                      viewBox: item.viewBox,
                      className: 'highlightsShadow my-auto h-96',
                      height: item.height,
                      width: item.height,
                    })}
                  </div>
                  <div className="item w-2/3">
                    <h3 className="leading-tight">{item.titleMessage}</h3>
                    <p className="max-w-lg text-[#585858] mt-6">{item.textMessage}</p>
                    <p className="font-vinila-extended leading-none text-[56px] mt-12">
                      {item.quoteMessage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Highlights;
