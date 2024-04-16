import style from './Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';

function Home() {
    return (
        <>
            <Header/>
            <div style={{'margin-top': '100px'}}></div>
            <Banner/>
            <Footer/>
        </>
    );
}

export default Home;