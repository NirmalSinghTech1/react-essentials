import reactLogo from "../assets/react-core-concepts.png";

export default function Header() {
  return (
    <header>
      <img src={reactLogo} alt="React logo" width={160} height={160} />
      <h1>React Essentials</h1>
      <p>
        Crucial React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
