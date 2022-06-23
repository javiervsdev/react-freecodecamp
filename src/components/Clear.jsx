import '../css/Clear.css'

export default function Clear({clickHandler}) {
  return (
    <div
      className="clear-button"
      onClick={() => clickHandler()}>
      Clear
    </div>
  );
}