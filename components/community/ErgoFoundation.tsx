import { FormattedMessage } from 'react-intl';
import { ErgoFoundationIcon, ErgoFoundationIconLight } from '../icons';

export default function ErgoFoundation() {
  return (
    <div id="ErgoFoundation" className="max-w-[1300px] mx-auto p-4 relative z-10">
      <div className="flex flex-col md:flex-row mb-14">
        <div className="mb-12 md:my-auto">
          <ErgoFoundationIcon className="h-40 md:h-60 hidden dark:block" viewBox="0 0 248 248" />
          <ErgoFoundationIconLight className="h-40 md:h-60 dark:hidden" viewBox="0 0 248 248" />
        </div>
        <div className="font-vinila-extended text-[24px] md:text-[56px] max-w-xs md:max-w-3xl md:ml-14 leading-tight md:my-auto">
          <FormattedMessage
            id="components.ergofoundation.title"
            defaultMessage="The <b>Ergo Foundation</b> is a community-driven entity focused on"
            values={{ b: (chunks: any) => <strong>{chunks}</strong> }}
          />
        </div>
      </div>
      <div className="flex flex-row-reverse md:r-40">
        <div></div>
        <ul className="ergo-foundation list-disc mx-4">
          <li>
            <FormattedMessage
              id="components.ergofoundation.list1"
              defaultMessage="Promoting <b>non-breaking development </b> of Ergo Platform protocol;"
              values={{ b: (chunks: any) => <strong>{chunks}</strong> }}
            />
          </li>
          <li>
            <FormattedMessage
              id="components.ergofoundation.list2"
              defaultMessage="Publicizing the widespread adoption and use of Ergo Platform and its <b> native token </b> (ERG);"
              values={{ b: (chunks: any) => <strong>{chunks}</strong> }}
            />
          </li>
          <li>
            <FormattedMessage
              id="components.ergofoundation.list3"
              defaultMessage="Developing the <b>ecosystem </b> around the Ergo Platform;"
              values={{ b: (chunks: any) => <strong>{chunks}</strong> }}
            />
          </li>
          <li>
            <FormattedMessage
              id="components.ergofoundation.list4"
              defaultMessage="Spread the use of Ergo Platform and blockchain technology for <b> social good </b>;"
              values={{ b: (chunks: any) => <strong>{chunks}</strong> }}
            />
          </li>
          <li>
            <FormattedMessage
              id="components.ergofoundation.list5"
              defaultMessage="Uphold <b>truly decentralized infrastructure</b>, and;"
              values={{ b: (chunks: any) => <strong>{chunks}</strong> }}
            />
          </li>
          <li>
            <FormattedMessage
              id="components.ergofoundation.list6"
              defaultMessage="Supporting <b>privacy </b> as a basic human right."
              values={{ b: (chunks: any) => <strong>{chunks}</strong> }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
