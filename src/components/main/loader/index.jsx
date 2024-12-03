import { Spinner } from "react-bootstrap";

export const Loader = (props) =>
  props.loading && (
    <div className="loader_style">
      <Spinner spinning={props.loading} size="large" />
    </div>
  );
