import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
    let $year = 2023;
    return <div>
        <Header></Header>
        <h1 id='ed'>Edureka react training</h1>
        <h2>We are building an app</h2>
        <Footer year={$year} id='red'></Footer>
    </div>
}

export default Home;


