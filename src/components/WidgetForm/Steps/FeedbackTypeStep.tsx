import { feedbackType, Feedback } from "..";
import { Bug, ChatText, Lightbulb } from "phosphor-react";

interface FeedbackTypeStepProps {
  onCurrentFeedbackTypeChange: (type: Feedback) => void;
}

export const FeedbackTypeStep = ({
  onCurrentFeedbackTypeChange,
}: FeedbackTypeStepProps) => {
  return (
    <div className="flex py-8 gap-2 w-full">
      <button
        className=" bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
        onClick={() => onCurrentFeedbackTypeChange("BUG")}
      >
        <Bug size={32} weight="light" />
        <span>{feedbackType.BUG.title}</span>
      </button>
      <button
        className=" bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
        onClick={() => onCurrentFeedbackTypeChange("IDEA")}
      >
        <Lightbulb size={32} weight="light" />
        <span>{feedbackType.IDEA.title}</span>
      </button>
      <button
        className=" bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
        onClick={() => onCurrentFeedbackTypeChange("OTHER")}
      >
        <ChatText size={32} weight="light" />
        <span>{feedbackType.OTHER.title}</span>
      </button>
    </div>
  );
};
