import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia, sepolia } from "wagmi/chains";
import { APP_NAME, REOWN_PROJECT_ID } from "./constants";

export const config = getDefaultConfig({
  appName: APP_NAME,
  projectId: REOWN_PROJECT_ID,
  chains: [baseSepolia, sepolia],
  ssr: false,
});
