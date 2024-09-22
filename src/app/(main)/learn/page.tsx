import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sitcky-wrapper";
import { UserProgress } from "@/components/user-progress";

import { Header } from "./header";

const learnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourses={{ title: "Mandarin", imgSrc: "/tw.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Mandarin" />
        <div className="space-y-4"></div>
      </FeedWrapper>
    </div>
  );
};

export default learnPage;
