import Banner from "@/components/banner/page";
import HowApp from "@/components/howapp/page";
import OrganizeMedia from "@/components/organizemedia/page";
import SmallBussiness from "@/components/smallbussiness/page";
import WorkFaster from "@/components/workfaster/page";

export default function Home() {
  return (
    <>
      <Banner />
      <OrganizeMedia />
      <WorkFaster />
      <SmallBussiness />
      <HowApp />
    </>
  );
}
