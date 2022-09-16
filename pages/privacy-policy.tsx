import type { NextPage } from 'next';
import { FormattedMessage, useIntl } from 'react-intl';
import Layout from '../components/Layout';
import PrivacyPolicyContent from '../content/privacyPolicy.mdx';

const PrivacyPolicy: NextPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: 'pages.privacyPolicy.title',
    defaultMessage: 'Privacy Policy',
  });
  return (
    <Layout title={title}>
      <div className="max-w-[1300px] mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          <p className="font-vinila-extended text-[48px] md:text-[96px] mb-16 md:w-1/3 md:-mt-8">
            <FormattedMessage defaultMessage="Privacy Policy" id="pages.privacyPolicy.title" />
          </p>
          <div className="mdPage  md:w-2/3">
            <PrivacyPolicyContent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
