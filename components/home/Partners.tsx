import { useTheme } from 'next-themes';
import Image from 'next/image';

type Props = {
  partners: any;
};

export default function Partners({ partners }: Props) {
  const { theme } = useTheme();
  return (
    <div id="Partners" className="max-w-[1300px] mx-auto py-12 px-4 lg:py-16 lg:px-4 relative z-10">
      <h3 className="text-center">
        <b>Partners</b>
      </h3>
      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        {partners.map((partner: any) => (
          <div key={partner.id} className="col-span-1 flex justify-center py-8 px-8 m-auto">
            <a href={partner.attributes.url} target="_blank" rel="noreferrer">
              {theme == 'dark' && partner.attributes.image_dark.data != null ? (
                <Image
                  width={partner.attributes.image_dark.data.attributes.width}
                  height={partner.attributes.image_dark.data.attributes.height}
                  src={partner.attributes.image_dark.data.attributes.url}
                  alt={partner.attributes.name}
                />
              ) : (
                <Image
                  width={partner.attributes.image.data.attributes.width}
                  height={partner.attributes.image.data.attributes.height}
                  src={partner.attributes.image.data.attributes.url}
                  alt={partner.attributes.name}
                />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
