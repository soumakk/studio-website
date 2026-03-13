import { ReactNode } from "react";

export default function Container(props: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`max-w-7xl mx-auto ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
}
