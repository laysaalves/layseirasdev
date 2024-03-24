import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

const BrPage = () => {
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
               Br page br page page
            </StickyWrapper>
            <FeedWrapper>
                Br feed br feed feed
            </FeedWrapper>
        </div>
    );
}

export default BrPage;