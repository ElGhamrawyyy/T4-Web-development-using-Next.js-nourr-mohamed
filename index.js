export default function HomePage () {
    return (
        <!DOCTYPE html>
<html lang="en">
<head>
<title>Personal</title>
<meta charset="UTF-8">
<link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <div class="Navbar">
      <div class="w3-bar w3-black w3-card">
        <a href="index.html" class="w3-bar-item w3-button w3-padding-large">HOME</a>
        <a href="about .html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">About ME</a>
        <a href="prodcet .html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">Prodcet </a>
        <div class="w3-dropdown-hover w3-hide-small">
          <button class="w3-padding-large w3-button" title="More">SKILLS<i class="fa fa-caret-down"></i></button>     
          <div class="w3-dropdown-content w3-bar-block w3-card-4">
            <a href="Portfolio.html" class="w3-bar-item w3-button">HOBBIES</a>
            <a href="Portfolio.html" class="w3-bar-item w3-button">PORTFOLIO</a>
          </div>
          </div>
          <a href="contact.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
    </div>
    </header>
<img src="img/Rectangle 71.png"  />
<div class="services">
    <div class="service-row">
      <div class="service-box">
        <h4>The Cairo Opera House</h4>
        <p>a cultural landmark renowned for leadership,
          excellence and imagination. It has carved itself a
          significant place in the cultural landscape of
          Egypt and the Middle East.</p>
          <br>
      </div>
      
    </div>
    <div class="service-row">
      <div class="service-box">
        <h4>Mission</h4>
        <ul>
          <li>Provide first-class productions of ballet, operatic and symphonic .</li>
          <li> Discover and develop the most talented young artists in Egypt </li>
          <li>Support learning, innovation and creativity.</li>
         
        </ul>
      </div>
      <br>
  
    </div>
    <div class="service-row">
      <div class="service-box">
        
        <h4>Vision</h4>
        <p>We aspire to build a family of opera lovers
           who reflect the multi-cultural fabric of our
           community. Our work will tell the great stories 
          of opera, past, present, and future, showcasing 
          diverse talent and innovative approaches that
           serve </p>
       
      </div>
    </div>











</body>
 <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">shipping</a></li>
                    <li><a href="#">returns</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment options</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">bag</a></li>
                    <li><a href="#">shoes</a></li>
                    <li><a href="#">dress</a></li>
                </ul>
            </div>
        </div>
    </div>
    );

}