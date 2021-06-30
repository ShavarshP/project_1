import React  from "react";
import "./next.css";
import { useHttp } from "../../../../myHooks/hook";

const FiltPage = (props) => {
  const { loading, request, error, clearError } = useHttp();
  if (!props.count) {

  }

  return (
    <div>
    <div className="wrapper">
  <section className="archive-pages">
    <ul>
      <li className="first-page"><a href="#" title="first page">first page</a></li>
      <li className="previous"><a href="#" title="previous page">previous page</a></li>
      <li className="selected">1</li>
      <li><a href="#" title="Pagina 2">2</a></li>
      <li><a href="#" title="Pagina 3">3</a></li>
      <li><a href="#" title="Pagina 4">4</a></li>
      <li><a href="#" title="Pagina 5">5</a></li>
      <li className="next"><a href="#" title="next page">next page</a></li>
      <li className="last"><a href="#" title="last page">last page</a></li>
    </ul>
  </section>
</div>
    </div>
  );
};

export default FiltPage;
