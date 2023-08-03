import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("../components/main/main"), { ssr: false });

const App: NextPage = () => {
  return <Main />;
};

export default App;
