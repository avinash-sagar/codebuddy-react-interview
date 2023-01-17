import './MultiForm.css';

export default function FormWrapper({ title, children }) {
  return (
    <div className="wrapper">
      <h2>{title} </h2>
      <div>{children} </div>
    </div>
  );
}
