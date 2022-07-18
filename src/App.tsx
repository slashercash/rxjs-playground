import axios from 'axios';

const getByAxios = async () => {
  const res = await axios({
    method: 'get',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=1000',
  });
  return res.data.results;
};

const App = () => {
  getByAxios().then((x) => console.log(x));

  return <div>Hello World</div>;
};

export default App;
