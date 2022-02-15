/* Assets */
import "../assets/css/Row.css";

type RowProps = {
  children: any;
};

export const Row = ({ children }: RowProps) => {
  return <div className="row">{children}</div>;
};
