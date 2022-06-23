import '../css/Button.css';

export default function Button ({ children, clickHandler }) {

  const isOperator = value =>
    isNaN(value) && value !== '.'

  return (
    <div
      className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => clickHandler(children)}>
      {children}
    </div>
  );
}