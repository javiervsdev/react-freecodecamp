import '../css/Button.css';

export default function Button ({children}) {

  const isOperator = value =>
    isNaN(value) && value !== '=' && value !== '.'

  return (
    <div className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}>
      {children}
    </div>
  );
}