import { AxiosResponse } from "axios";

const throwResponse = (res: AxiosResponse) => {
  const { message } = res.data;
  if (!Array.isArray(message)) {
    throw new Error(message);
  }
  const text = message.reduce((result: string, item: string) => {
    return `${result}${item}\n`;
  }, "");
  throw new Error(text);
};

export default throwResponse;
