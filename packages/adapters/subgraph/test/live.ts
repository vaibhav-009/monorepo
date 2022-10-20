import { getChainData } from "@connext/nxtp-utils";
import { SubgraphReader } from "../src/reader";

export const livetest = async () => {
  console.log("> starting live test....");
  const chainData = await getChainData();

  const reader = await SubgraphReader.create(chainData, "production");
  const hubDomain = "1735353714"; // 9991 => mumbai, 1735356532 => optimism-goerli

  const res = await reader.getLatestBlockNumber(["9991", "1735353714", "1735356532"]);
  console.log("> latest blocknumber: ");
  console.log(res);

  const rootMessages = await reader.getProcessedRootMessagesByDomain([
    { domain: "1735353714", offset: 0, limit: 100 },
    { domain: "9991", offset: 0, limit: 100 },
    { domain: "1735356532", offset: 0, limit: 100 },
  ]);
  console.log("> rootMessages: ");
  console.log(rootMessages);

  const aggregatedRoots = await reader.getGetAggregatedRootsByDomain([
    { hub: hubDomain, domain: "1735353714", index: 0, limit: 100 },
    { hub: hubDomain, domain: "9991", index: 0, limit: 100 },
    { hub: hubDomain, domain: "1735356532", index: 0, limit: 100 },
  ]);
  console.log("> aggregatedRoots: ");
  console.log(aggregatedRoots);

  const propagatedRoots = await reader.getGetPropagatedRoots(hubDomain, 0, 100);
  console.log("> propagatedRoots: ");
  console.log(propagatedRoots);
};

livetest();