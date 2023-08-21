import Footer from '@/components/Footer';

const CampaignLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="section text-center min-h-screen relative">
      <h1 className="text-header text-lg font-bold text-center py-4 mb-12">
        ReferBiz
      </h1>
      {children}
      <Footer bottom={true} />
    </section>
  );
};

export default CampaignLayout;
