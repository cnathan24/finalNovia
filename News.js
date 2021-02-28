
export default function News() {


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


    return (

<div>

<button className="news-open-button" onClick={openForm} >Stay in the Loop</button>

<div className="news-form-popup" id="myForm">
  <form action="/action_page.php" className="news-form-container">
    <h1 className="joinnews">Join Our Newsletter</h1>
    <p className="belowj">There's a ton of events & new additions you don't want to miss out on!</p>
    
    <input type="text" placeholder="First Last" name="name" required/>


    <input type="text" placeholder="youremail@gmail.com" name="email" required/>

    <label htmlFor="comments" className="addc"><b> Any additional Comments?</b></label>
    <input type="text" placeholder=":)" name="psw"/>

    <button type="submit" className="btn">Join Our Community</button>
    <button type="button" className="btn cancel" onClick={closeForm}>-</button> 
  </form>
</div>


</div>

);

}