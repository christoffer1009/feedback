import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export const Widget = () => {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md-right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 -500 rounded-full text-white px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        {/* <span className='pl-2'></span> */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          Feddback
        </span>
      </Popover.Button>
    </Popover>
  );
};
