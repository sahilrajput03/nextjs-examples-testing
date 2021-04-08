const A = () => {
  l("simple log 1");
  l("simple log 2");
  w("simpel warn");
  e("simple error");
  const [state, setState] = useState(1);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>{state}</button>
    </div>
  );
};

export default A;
