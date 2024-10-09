import Layout from "./components/layout";
import Mv from "./components/mv"
import Cta from "./components/cta"
import Title from "./components/title"

export default function Home() {
  return (
    <>
    <Layout>
      <Mv />
      <div className="">
        メインコンテンツ
        <Title 
          title="About"
        />
      </div>
      <Cta />
    </Layout>
    </>
  );
}
