import { TitleHome } from "./styles";

interface TitleProps {
  children: string;
}
export function Title({ children }: TitleProps) {
  return <TitleHome>{children}</TitleHome>;
}
