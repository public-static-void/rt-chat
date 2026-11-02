import { useEffect } from "react";
import { useSocketContext } from "../context/useSocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    const handleNewMessage = (
      newMessage: (typeof messages)[number] & { shouldShake?: boolean },
    ) => {
      newMessage.shouldShake = true;

      const sound = new Audio(notificationSound);
      void sound.play();

      setMessages([...messages, newMessage]);
    };

    socket?.on("newMessage", handleNewMessage);

    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
