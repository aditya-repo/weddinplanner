import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import DesktopView from "./desktop";
import MobileView from "./mobile";

const getUserAgent = async (): Promise<string> => {
  const headerList = await headers();
  return headerList.get("user-agent") || "";
};

const Navigation: React.FC = async () => {
  const userAgent = await getUserAgent();
  const md = new MobileDetect(userAgent);
  const isMobile = !!md.mobile();
  return isMobile ? <MobileView /> : <DesktopView />;
};

export default Navigation;
