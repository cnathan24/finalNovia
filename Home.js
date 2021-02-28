import News from './Newsletter/News'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';



export default function Home() {
    return (
        <div className="container">



            {/* <!-- Video Header --> */}
            <div className='videoo'>
            <img src="/images/giffy.gif" alt="header" className="vid" />
            </div>


            {/* <!-- <div className="video">
                                <video width=1400px" controls autoplay loop>
    <source src="headervid.mp4" type="video/mp4">
  </video>
                            </div> -->

<!-- Text+Button on Video --> */}

            <section className="midinfo">


                <h1 className="brand">NOVIA</h1>


        

                {/* <Link to="/products" className="explore">SHOP</Link> */}



            </section>

            {/* <!-- Services --> */}


            <div className="serv">

                <h3 className="exs">Exclusive Services</h3>




                <div className="services">


                    <img src="exchange.png" className="pic ret" />


                    <img src="delivery.png" className="pic" />

                    <img src="gift.png" className="pic" />




                    <div className=" services wording">

                        <h3 className="txt">Free Returns
        <br />
                                            & Exchanges
    </h3>


                        <h3 className="txt del">Complimentary
    <br />
                                                Delivery
</h3>

                        <h3 className="txt free">Free
    <br />
                                                    Gift Wrapping
</h3>


                    </div>

                </div>

            </div>







            {/* <!-- Bottom Pop Out Info --> */}


            <section className="dia">

                <h1 className="statement">Elevate Your</h1>
                <h1 className="statement last">Style</h1>
                
                <hr className="line" size="5" width="25%" color="#563437" />

                <p className="founded">Founded in 2018, Novia has come a long way
                <br />
                                                from its beginnings in the Carribbean Islands.
                <br />
                                                    Since then,
                                                    we continuously work towards turning
                <br />
                                                        our passion into a footprint left in the world
                <br />
                                                            of luxury & fashion
            </p>

            </section>


            <News/>


            {/* <!-- Footer --> */}


            <footer>


                <div className="box">


                    {/* <!-- Left side --> */}
                    <div className="b1">

                        <nav>
                            <ul className="foot-list">
                                {/* <li className="foot-item">
                                    <a href="about.html">ABOUT</a></li> */}
                                <li className="foot-item">
                                    
                                <Link to="/products">Products</Link>

                                    </li>

                            </ul>
                        </nav>

                    </div>





                    <h4 className="centered">Novia</h4>




                    <aside className="icons">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <a href="https://twitter.com/" className="fa fa-twitter"></a>
                        <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                        <a href="https://www.instagram.com/" className="fa fa-instagram"></a></aside>


                    <figure className="symbol">
                        <h4>Copyright &#169 Novia</h4></figure>


                </div>




            </footer >







        </div >
    );
}
