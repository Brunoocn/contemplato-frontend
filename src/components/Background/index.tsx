import { BubbleLeft, BubbleRight } from "./styles";
import BubbleRightImg from "../../assets/vector-r.svg";
import BubbleLeftImg from "../../assets/vector-l.svg";

export function Background() {
  return (
    <>
      <BubbleLeft src={BubbleLeftImg} alt="bubble" />
      <BubbleRight src={BubbleRightImg} alt="bubble" />
    </>
  );
}
