import createResource from "./creR";

const URL = "https://kodaktor.ru/sleep?n=5";

const resource = createResource(fetch(URL).then((x) => x.json()));

export default () => {
  const result = resource.read();
  return <h1>Result: {result.date2}</h1>;
};
