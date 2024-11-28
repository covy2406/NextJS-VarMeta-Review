import Banner from "@/components/banner";
import Footer from "@/components/footer";
import HowApp from "@/components/howapp";
import OpenMore from "@/components/openmore";
import OrganizeMedia from "@/components/organizemedia";
import Simple from "@/components/simple";
import SmallBussiness from "@/components/smallbussiness";
import Stay from "@/components/stay";
import Subscribe from "@/components/subscribe";
import WorkFaster from "@/components/workfaster";

export default function Home() {
  return (
    <>
      <Banner />
      <OrganizeMedia />
      <WorkFaster />
      <SmallBussiness />
      <OpenMore />
      <HowApp />
      <Simple />
      <Subscribe />
      <Stay />
    </>
  );
}
