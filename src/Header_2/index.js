import { Link } from "react-router-dom";
import { Style } from "./style";

export default function Header_2() {
  return (
    <Style>
      <div className="container_left">
            <h1 className="title">Alborz Bank </h1>
        <div className="container_inner">
            <Link>OverView</Link>
            <Link>Profile</Link>
            <Link>Wallet</Link>
        </div>
      </div>
    </Style>
  );
}
