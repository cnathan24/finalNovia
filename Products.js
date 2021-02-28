import React from 'react'
import products from './Data/Products.json';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';


export default class Products extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { colorFilter: '' };
        
        this.changeFilter = this.changeFilter.bind(this);
      }
    
      changeFilter(e) {
        e.preventDefault();
        
        this.setState({ colorFilter: e.target.value });
      }


      

render() {
  return (
    <div className="container">
      <h1 className="picks">This Season's Picks</h1>

      <label>
            Filter Products:
            <select value={this.state.colorFilter} onChange={this.changeFilter}>
              <option value="">Show All Colors</option>
              <option value="earth">Earth</option>
              <option value="deep">Deep</option>
              <option value="brown">Brown</option>
              <option value="pink">Pink</option>
            </select>
          </label>


       <ul className="product-list">
        {
        products
        
              
            .filter((product) => {
              // If our filter is empty, show all products.
              if (!this.state.colorFilter) {
                return true;
              }

              // Otherwise, filter by the current color.
            return product.color[0] === this.state.colorFilter



            })
            
        
        .map((product, index) => {
          return <li key={index} className="product">
              <div className="display"><img src={product.img} className="picdim"/></div>
            <strong className="pursename">{product.name}</strong><br />
            <span className="product-price">{product.price}</span><br />
            <div className="pdesc">{product.description}</div>
            {/* <a href="{product.link}">Buy Now</a> */}
          </li>
        })}
      </ul>



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




    </div>
  );
                }




                
}




