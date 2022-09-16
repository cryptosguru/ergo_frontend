import * as _ from 'lodash';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeRaw from 'rehype-raw';

type Props = {
  faq?: any;
};

function processFaq(questions: any) {
  let result: any;
  result = _.sortBy(questions.data, ['attributes.order']);
  return result;
}

export default function FAQ(props: Props) {
  useEffect(() => {
    require('tw-elements');
  }, []);
  const questions = processFaq(props.faq);
  return (
    <div id="FAQ" className="max-w-[1300px] mx-auto p-4 mt-40 relative z-10">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3">
          <b>
            <p className="text-[#585858] dark:text-[#585858] pt-6">ANY QUESTIONS?</p>
          </b>
          <a className="font-vinila-extended text-[48px] lg:text-[120px]">FAQ</a>
          <p className="text-[#585858] dark:text-[#807e7e]">
            We’ve compiled some of the most frequently asked questions.
          </p>
          <div className="mt-96 hidden lg:block">
            <p className="text-[24px] mb-6 font-bold">
              <FormattedMessage
                defaultMessage="CAN'T FIND WHAT {breakingLine} YOU’RE LOOKING FOR?"
                id={'components.faq.text.2'}
                values={{ breakingLine: <br /> }}
              />
            </p>
            <a
              href="mailto:team@ergoplatform.org"
              className="text-[24px] text-brand-orange dark:text-brand-orange"
            >
              team@ergoplatform.org
            </a>
          </div>
        </div>
        <div className="lg:w-2/3">
          <div id="faq-accordion">
            {questions.map((question: any, i: number) => (
              <div key={i}>
                <div
                  data-bs-toggle="collapse"
                  data-bs-target={'#faq-collapse' + i.toString()}
                  aria-expanded={i == 0 ? 'true' : 'false'}
                  aria-controls={'faq-collapse' + i.toString()}
                  className="w-full pt-4"
                >
                  <a
                    id={'faq-heading' + i.toString()}
                    className="font-vinila-extended text-[16px] lg:text-[24px] text-brand-orange dark:text-brand-orange"
                  >
                    <button type="button">{question.attributes.question}</button>
                  </a>
                </div>
                <div
                  id={'faq-collapse' + i.toString()}
                  className={
                    i == 0 ? 'accordion-collapse collapse show' : 'accordion-collapse collapse'
                  }
                  aria-labelledby={'faq-heading' + i.toString()}
                  data-bs-parent="#faq-accordion"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    rehypePlugins={[rehypeRaw]}
                    className="faq-answer"
                  >
                    {question.attributes.answer}
                  </ReactMarkdown>
                </div>
                <div
                  data-bs-toggle="collapse"
                  data-bs-target={'#faq-collapse' + i.toString()}
                  aria-expanded={i == 0 ? 'true' : 'false'}
                  aria-controls={'faq-collapse' + i.toString()}
                  className="w-full pb-4"
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 lg:hidden">
          <p className="text-[14px] mb-4 font-bold">
            <FormattedMessage
              defaultMessage="CAN'T FIND WHAT {breakingLine} YOU’RE LOOKING FOR?"
              id={'components.faq.text.2'}
              values={{ breakingLine: <br /> }}
            />
          </p>
          <a
            href="mailto:team@ergoplatform.org"
            className="text-16px] text-brand-orange dark:text-brand-orange"
          >
            team@ergoplatform.org
          </a>
        </div>
      </div>
    </div>
  );
}
