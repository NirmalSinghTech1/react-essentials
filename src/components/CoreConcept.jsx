export default function CoreConcept(props) {
  return (
    <li className="core-concept">
      <img src={props.image} alt={props.title + ' logo'} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
