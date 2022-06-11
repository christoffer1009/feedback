import { CloseButtom } from "../CloseButtom";
import bugImageUrl from "../../assets/bug-light.svg";
import lightbulbImageUrl from "../../assets/lightbulb-light.svg";
import chatTextImageUrl from "../../assets/chat-text-light.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackType = {
  BUG: {
    title: "Problema",
    image: { src: bugImageUrl, alt: "Imagem de um inseto" },
  },
  IDEA: {
    title: "Ideia",
    image: { src: lightbulbImageUrl, alt: "Imagem de uma lâmpada" },
  },
  OTHER: {
    title: "Outro",
    image: { src: chatTextImageUrl, alt: "Imagem de um balão de texto" },
  },
};

export type Feedback = keyof typeof feedbackType;

export const WidgetForm = () => {
  const [currentFeedbackType, setCurrentFeedbackType] =
    useState<Feedback | null>(null);

  if (!currentFeedbackType) {
    return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        <header>
          <span className="text-xl leading-6">Deixe seu feedback</span>
          <CloseButtom />
        </header>

        <FeedbackTypeStep
          onCurrentFeedbackTypeChange={setCurrentFeedbackType}
        />

        <footer className="text-xs text-neutral-400">
          Feito com esforço por{" "}
          <a className="underline underline-offset-2" href="">
            Chris ;^)
          </a>
        </footer>
      </div>
    );
  } else {
    return <p>Hello World</p>;
  }
};
