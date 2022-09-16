import * as _ from 'lodash';
import { useEffect } from 'react';

type Props = {
  documents?: any;
};

function processDocs(documents: any) {
  let result: any;
  result = _.sortBy(documents.data, ['attributes.title']);
  result = _.chain(result)
    .groupBy('attributes.group')
    .map(function (items, section) {
      return {
        name: section,
        documents: _.map(items, function adjustDoc(doc) {
          return {
            title: doc.attributes.title,
            download: doc.attributes.url == null ? true : false,
            url:
              doc.attributes.url == null
                ? doc.attributes.file.data?.attributes.url
                : doc.attributes.url,
          };
        }),
      };
    })
    .value();
  result = _.sortBy(result, ['section']);
  return result;
}

export default function Documents(props: Props) {
  useEffect(() => {
    require('tw-elements');
  }, []);
  const processedDocs = processDocs(props.documents);
  return (
    <div id="Documents" className="max-w-[1300px] mx-auto p-4 mt-40 relative z-10">
      <div className="flex flex-col lg:flex-row mb-12">
        <a className="font-vinila-extended  text-[32px] sm:text-[48px] md:text-[96px] lg:w-2/3">
          <b>Documents</b>
        </a>
        <div className="lg:w-1/3">
          <p className="text-[#807e7e] dark:text-[#807e7e]">
            Ergo takes a research-based approach and uses stable well-tested solutions to provide a
            robust platform for developers to build on for years to come. Most of Ergo solutions are
            formalized in papers presented at peer-reviewed conferences and have been widely
            discussed in the community.
          </p>
        </div>
      </div>

      <div id="docs-accordion">
        {processedDocs.map((section: any, i: number) => (
          <div key={i} className="border-b-[1px]">
            <div
              data-bs-toggle="collapse"
              data-bs-target={'#docs-collapse' + i.toString()}
              aria-expanded={i == 0 ? 'true' : 'false'}
              aria-controls={'docs-collapse' + i.toString()}
              className="w-full pt-8"
            >
              <a
                id={'docs-heading' + i.toString()}
                className="font-vinila-extended text-[24px] md:text-[32px]"
              >
                <button type="button">{section.name}</button>
              </a>
            </div>
            <div
              id={'docs-collapse' + i.toString()}
              className={
                i == 0 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'
              }
              aria-labelledby={'docs-heading' + i.toString()}
              data-bs-parent="#docs-accordion"
            >
              {section.documents.map((doc: any) => (
                <div className="my-4" key={doc.title}>
                  <a
                    className="font-vinila-extended text-[14px] md:text-[16px] text-brand-orange dark:text-brand-orange underline"
                    href={doc.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {doc.title}
                  </a>
                </div>
              ))}
            </div>
            <div
              data-bs-toggle="collapse"
              data-bs-target={'#docs-collapse' + i.toString()}
              aria-expanded={i == 0 ? 'true' : 'false'}
              aria-controls={'docs-collapse' + i.toString()}
              className="w-full pb-8"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
