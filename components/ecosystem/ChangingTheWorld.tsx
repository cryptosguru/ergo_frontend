import { getIconComponentByName } from '../../utils/icons-map';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';

type Props = {
  chagingTheWorldProjects?: any;
};

export default function ChangingTheWorld(props: Props) {
  return (
    <div id="ChangingTheWorld" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <Swiper
        className="SwiperFavorites"
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
      >
        {props.chagingTheWorldProjects.map((post: any, i: number) => (
          <SwiperSlide key={i} className="mb-20 lg:mt-20">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3">
                {post.attributes.image.data != null ? (
                  <div className="flex flex-row justify-around h-full">
                    <div className="flex flex-col w-full my-auto">
                      <Image
                        className="rounded-3xl"
                        layout="responsive"
                        width={post.attributes.image.data?.attributes.width}
                        height={post.attributes.image.data?.attributes.height}
                        src={post.attributes.image.data?.attributes.url}
                        alt=""
                      />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="mt-4 lg:ml-10 ml-0 lg:w-1/3">
                <p className="text-[#585858] dark:text-[#585858] font-bold mb-3 text-[14px] lg:text-[20px]">
                  {post.attributes.subtitle}
                </p>
                <p className="font-vinila-extended text-[42px] lg:text-[48px] mb-4">
                  {post.attributes.title}
                </p>
                <p className="text-[14px] lg:text-[16px] text-[#807e7e] dark:text-[#807e7e] mb-4">
                  {post.attributes.description}
                </p>
                <div className="-ml-4">
                  {post.attributes.url != null ? (
                    <a href={post.attributes.url} target="_blank" rel="noreferrer">
                      <button
                        type="submit"
                        className="py-1 px-4 inline-flex whitespace-nowrap btn rounded-full text-black font-vinila-extended text-[14px] md:text-[16px] bg-brand-orange ml-4"
                      >
                        <span>
                          <b>{post.attributes.button_text}</b>
                        </span>
                        <span className="w-4 h-4 ml-2 mt-1">
                          {getIconComponentByName('ArrowRightBlack')}
                        </span>
                      </button>
                    </a>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
