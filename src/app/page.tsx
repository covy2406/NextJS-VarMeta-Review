import Banner from "@/components/banner";
import HowApp from "@/components/howapp";
import OrganizeMedia from "@/components/organizemedia";
import Simple from "@/components/simple";
import SmallBussiness from "@/components/smallbussiness";
import Stay from "@/components/stay";
import WorkFaster from "@/components/workfaster";

export default function Home() {
  return (
    <>
      <Banner />
      <OrganizeMedia />
      <WorkFaster />
      <SmallBussiness />
      <HowApp />
      <Simple />
      <Stay />
    </>
  );
}
