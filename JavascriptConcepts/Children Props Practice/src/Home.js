const Home = (props) => {
  const loadData = () => {
    const data = import("./Constant.js").then((module) => {
      console.log(module.data);
    });
  };
  console.log(props, "props");
  return (
    <>
      <h1>This is a Home Component</h1>
      <button onClick={loadData}>Load Data Using Lazy Hook</button>
      <h2>{props.children}</h2>
      <h1>{props.com}</h1>
    </>
  );
};

export default Home;
