# WebTechnologies

<p align='center'>
  <a href="#">
    <img src='_img\01_WebTech.png' alt="">
  </a>
</p>


## Getting Started

### Sample Code Snippet for simple HTML page

### HTML (index.html)

```html
<!DOCTYPE html>
<html>
<head>
 <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
 <header class="sticky-header">
     <nav>
         <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Services</a></li>
             <li><a href="#">Contact</a></li>
         </ul>
     </nav>
 </header>
 <div class="content">
     <!-- Your website content goes here -->
 </div>
 <script src="script.js"></script>
</body>
</html>
```

### CSS (styles.css)

```css
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}

.sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    z-index: 100;
}

.sticky-header nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

.sticky-header nav ul li {
    margin: 0 20px;
}

.sticky-header nav ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}

.content {
    padding: 100px 20px;
}

```

### JavaScript (script.js)

```js
window.addEventListener("scroll", function() {
    const header = document.querySelector(".sticky-header");
    const scrollY = window.scrollY;

    if (scrollY > 100) { // Adjust the value as needed
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

```





