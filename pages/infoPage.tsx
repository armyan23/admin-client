import { NextPage } from "next";
import Layout from "../components/layout/Layout";

// function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

const InfoPage = () => {

  return (
    <div>
      Info Page:
      <p>Created 01.09.22</p>
    </div>
  );
}
// patatenk@ mer uzac loyauti mej
// InfoPage.getLayout = function (page: NextPage) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

export default InfoPage;