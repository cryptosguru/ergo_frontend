import type { NextPage } from 'next';
import { FormattedMessage, useIntl } from 'react-intl';
import Layout from '../components/Layout';

const Custom404: NextPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({
    id: 'pages.404.title',
    defaultMessage: 'Not Found',
  });
  return (
    <div>
      <div className="not-found-blur-1"></div>
      <div className="not-found-blur-2"></div>
      <div className="not-found-frame-2"></div>
      <div className="not-found-frame-3"></div>
      <div className="not-found-frame-1"></div>
      <div className="not-found-frame-5"></div>
      <div className="not-found-frame-4"></div>
      <Layout title={title} footer={false}>
        <div className="max-w-[1300px] mx-auto p-4 relative z-10 flex flex-col lg:flex-row mb-20">
          <div className="lg:w-2/3"></div>
          <div className="lg:w-1/3">
            <div className="max-w-sm mt-96  lg:mt-40">
              <h1 className="font-bold text-[#585858] dark:text-[#807e7e] text-[60px] leading-tight">
                <FormattedMessage defaultMessage="404. Page Not Found." id="pages.404.hero" />
              </h1>
            </div>
            <div className="mt-8 max-w-xs text-[#585858] dark:text-[#807e7e]">
              The requested URL was not found on this server. That’s all we know.
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Custom404;
