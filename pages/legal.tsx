import type { NextPage } from 'next';
import { FormattedMessage, useIntl } from 'react-intl';
import Layout from '../components/Layout';
import LegalContent from '../content/legal.mdx';

const Legal: NextPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: 'pages.legal.title',
    defaultMessage: 'Legal',
  });
  return (
    <div>
      <div className="legal-frame-1"></div>
      <div className="legal-blur-1"></div>
      <Layout title={title}>
        <div className="max-w-[1300px] mx-auto p-4">
          <div className="flex flex-col md:flex-row">
            <p className="font-vinila-extended text-[48px] md:text-[96px] mb-16 md:w-1/3 md:-mt-8">
              <FormattedMessage defaultMessage="Legal" id="pages.legal.title" />
            </p>
            <div className="mdPage  md:w-2/3">
              <LegalContent />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Legal;
