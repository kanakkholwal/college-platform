"use client";

import { Button } from "@/components/ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [initialScreen, setValue] = useLocalStorage<boolean>(
    "initial-chat-screen",
    true
  );

  return (
    <div className="w-full h-full min-h-screen m-auto p-5 md:p-24">
      {initialScreen ? (
        <div className=" flex flex-col justify-center items-center gap-4 w-full">
          <h1 className="text-4xl font-bold text-center">Welcome to Chatbot</h1>
          <p className="text-center my-4">
            A simple chatbot that can help you with your questions related to
            our college.
          </p>
          <Button
            onClick={() => setValue(false)}
            width="md"
            size="lg"
            rounded="full"
            transition="damped"
          >
            Start a conversation
          </Button>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
