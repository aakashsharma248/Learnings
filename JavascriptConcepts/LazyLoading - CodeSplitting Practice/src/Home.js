const Home = () => {
  const loadData = () => {
    const data = import("./Constant.js").then((module) => {
      console.log(module.data);
    });
  };
  return (
    <>
      <h1>This is a Home Component</h1>
      <button onClick={loadData}>Load Data Using Lazy Hook</button>
    </>
  );
};

export default Home;
