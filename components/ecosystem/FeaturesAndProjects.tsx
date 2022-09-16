import Image from 'next/image';

type Props = {
  projects?: any;
};

function adjustCardPosition(i: number) {
  switch (i) {
    case 0:
      return ' lg:row-span-2';
    case 1:
      return ' lg:col-span-2 lg:flex-row';
    default:
      return '';
  }
}

function adjustCardText(i: number) {
  switch (i) {
    case 0:
      return ' h-1/2 lg:h-1/3';
    case 1:
      return ' h-1/2 lg:ml-8';
    case 2:
      return ' h-1/2';
    case 3:
      return ' h-1/2';
    default:
      return '';
  }
}

function adjustCardPhoto(i: number) {
  switch (i) {
    case 0:
      return ' h-1/2 lg:h-2/3';
    case 1:
      return ' h-1/2';
    case 2:
      return ' h-1/2';
    case 3:
      return ' h-1/2';
    default:
      return '';
  }
}

export default function FeaturesAndProjects(props: Props) {
  return (
    <div id="FeaturesAndProjects" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <p className="text-[#585858] dark:text-[#585858] font-bold mb-8">
        NEW FEATURES AND PROJECTS YOU MIGHT LIKE
      </p>
      <div className="flex overflow-x-auto p-4 -m-4 no-scrollbar gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:max-h-[860px]">
        {props.projects.map((project: any, i: number) => (
          <div
            key={i}
            className={
              'rounded-3xl features-and-projects-bg flex flex-col min-w-[282px] p-4' +
              adjustCardPosition(i)
            }
          >
            <Image
              className={'rounded-3xl object-contain items-center lg:my-auto' + adjustCardPhoto(i)}
              src={project.attributes.image.data?.attributes.url}
              width={project.attributes.image.data?.attributes.width}
              height={project.attributes.image.data?.attributes.height}
              alt=""
            />
            <div className={'flex flex-col lg:my-auto' + adjustCardText(i)}>
              <p className="mt-4 text-[#585858] dark:text-[#585858] lg:text-[20px] font-bold h-1/5">
                {project.attributes.group}
              </p>
              <p className="mt-2 font-subtitle-3-bold lg:text-[24px] h-2/5">
                {project.attributes.title}
              </p>
              <p className="mt-2 text-[#807e7e] dark:text-[#807e7e] lg:text-[16px] h-2/5">
                {project.attributes.description}
              </p>
              <div className="my-6 h-1/5">
                <a
                  className="underline text-brand-orange dark:text-brand-orange font-vinila-extended lg:text-[16px]"
                  href={project.attributes.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.attributes.button_text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
