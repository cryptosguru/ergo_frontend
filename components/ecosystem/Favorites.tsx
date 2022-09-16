import { useIntl } from 'react-intl';
import { getIconComponentByName } from '../../utils/icons-map';
import { ErgoRaffle, Heart } from '../icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Button from '../Button';
import Image from 'next/image';

type Props = {
  favorites?: any;
};

export default function Favorites(props: Props) {
  const intl = useIntl();
  const button1Text = intl.formatMessage({
    id: 'components.favorites.button1',
    defaultMessage: 'EXPLORE ERGO RAFFLE',
  });

  return (
    <div id="Favorites" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="lg:w-1/3">
          <Heart viewBox="0 0 20 18" className="h-3 mb-4" />
          <p className="text-[#585858] dark:text-[#585858] font-bold mb-3 text-[14px] lg:text-[20px]">
            OUR FAVORITES
          </p>
          <ErgoRaffle viewBox="0 0 211 63" className="h-10 w-32 mb-4" />
          <p className="font-vinila-extended font-bold text-[48px] lg:text-[56px] mb-6">
            Ergo Raffle
          </p>
          <p className="text-[14px] lg:text-[16px] text-[#807e7e] dark:text-[#807e7e] mb-8">
            ErgoRaffle is a crowdfunding service built on Ergo Platform that enables anyone to raise
            money for a project. This project can range from a direct donation to a charity, an
            academic or business plan, or anything you can convince people to part with their
            hard-earned ERG for! As an added bonus, after finishing the Raffle, a lottery takes
            place, and one lucky participant wins a set percent of the Raffle as a &quot;raffle
            reward&quot;.
          </p>
          <button
            type="submit"
            className="py-1 px-4 inline-flex items-center whitespace-nowrap btn rounded-full text-black font-vinila-extended text-[14px] md:text-[16px] bg-brand-orange"
          >
            <span>
              <a href="https://ergoraffle.com/" target="_blank" rel="noreferrer">
                <b>{button1Text}</b>
              </a>
            </span>
            <span className="w-4 h-4 ml-2">{getIconComponentByName('ArrowRightBlack')}</span>
          </button>
        </div>
        <div className="lg:w-2/3">
          <Swiper
            className="SwiperFavorites"
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
          >
            {props.favorites.map((post: any, i: number) => (
              <SwiperSlide key={i} className="mb-20">
                <div className="favorite-card bg-white dark:bg-[#282828] rounded-2xl p-6 my-4 min-h-[335px] mx-1">
                  <div className="flex justify-center lg:justify-end mb-8">
                    {post.attributes.image.data != null ? (
                      <Image
                        width={post.attributes.image.data?.attributes.width}
                        height={post.attributes.image.data?.attributes.height}
                        src={post.attributes.image.data?.attributes.url}
                        className=""
                        alt=""
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <p className="font-bold text-[14px] text-[#585858] dark:text-[#585858] mb-4">
                    {post.attributes.subtitle}
                  </p>
                  <p className="font-vinila-extended-bold text-[16px] mb-4">
                    {post.attributes.title}
                  </p>
                  <p className="text=[14px] text-[#807e7e] dark:text-[#807e7e] mb-4">
                    {post.attributes.description}
                  </p>
                  <div className="-ml-4">
                    {post.attributes.url != null ? (
                      <Button
                        text={post.attributes.button_text}
                        url={post.attributes.url}
                        newTab={true}
                        underline={true}
                        textColor="brand-orange"
                        background={false}
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
