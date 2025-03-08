import { headers } from "next/headers";
import MobileDetect from "mobile-detect";

/**
 * Detects if the user is on a mobile device or a desktop.
 * @returns {Promise<boolean>} - `true` if mobile, `false` if desktop.
 */
 const isMobileDevice = async (): Promise<boolean> => {
  const headerList = await headers(); // Await headers() if needed
  const userAgent = headerList.get("user-agent") || ""; // Safely retrieve user-agent
  const md = new MobileDetect(userAgent);
  return !!md.mobile();
};

export default isMobileDevice