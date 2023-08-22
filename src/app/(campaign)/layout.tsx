import Footer from '@/components/Footer';

const CampaignLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="section text-center min-h-screen relative mb-24">
      <h1 className="text-header text-lg font-bold text-center py-4 mb-12">
        ReferBiz
      </h1>
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default CampaignLayout;
