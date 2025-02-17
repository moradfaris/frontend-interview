import {useReportBlocks} from "./useReportBlocks.tsx";

export const useReportBlocksLive = () => {
    const blocks = useReportBlocks();

    // Make this hook to add a block every 3 seconds

    return blocks;
}