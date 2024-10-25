import { sleep } from "@/helpers/sleept";
import type { ChatMessage } from "@/interfaces/chat-messages-interfaces";
import type { YesNoResponse } from "@/interfaces/yes-no-interfaces";
import { ref } from "vue";

export const useChat = () => {
    const messages = ref<ChatMessage[]>([]);
        
       const getResponse = async () => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoResponse;
        return data;

       }

        const onMessage = async (text:string) => {
          if(text.length === 0) return;
          
          messages.value.push({
            id: new Date().getTime(),
            message: text,
            itsMine: true
          });

          if(!text.endsWith("?")) return;
          
          await sleep(1.5);
          
          const {answer, image} = await getResponse();
          messages.value.push({
            id: new Date().getTime(),
            message: answer,
            itsMine: false,
            image: image,
          });
        }
    
    return {
        messages,
        onMessage,
        
    }
}