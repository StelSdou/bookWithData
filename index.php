<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://unpkg.com/pdf-lib"></script>
    <script
    src="https://kit.fontawesome.com/22e77351d3.js"
    crossorigin="anonymous"
    ></script>
    <script src="pdfData.js" defer></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
    <script src="pdfImg.js"></script>
    <title>Book</title>
  </head>
  <body>

    <button id="prevBtn">
      <i class="fa-solid fa-arrow-left"></i>
    </button>

    <!-- Book -->
    <div id="book" class="book">
      <!-- Paper -->
      <?php
        echo '<script>console.log(document.cookie)</script>';
        include('myData.php');
        session_start();
        echo '<script>console.log("index: " + '. $_SESSION["num"] .')</script>';
        $number = $_SESSION["num"];
        for ($i = 1; $i < $number; $i++) {
          echo'
          <div id="p'.$i.'" class="paper">
          <!-- Front -->
          <div class="front">
            <!-- Contact -->
            <div class="frontCont">
              <h1>' . $i . '</h1>
            </div>
          </div>
          <!-- Back -->
          <div class="back">
            <!-- Contact -->
            <div class="backCont">
              <h1>' . $i . ',5</h1>
            </div>
          </div>
        </div>
        <style>
          #p'. $i .' {
            z-index: '. $number - $i + 1 .';
          }
        </style>
        ';
        }
      ?>
      <div id="pF" class="paper">
          <!-- Front -->
          <div class="front">
            <!-- Contact -->
            <div class="frontCont">
              <h1>F</h1>
            </div>
          </div>
          <!-- Back -->
          <div class="back">
            <!-- Contact -->
            <div class="backCont">
              <h1>F,5</h1>
            </div>
          </div>
        </div>
        <style>
          #pF {
            z-index:1;
          }
        </style>
    </div>
    
    <button id="nextBtn">
      <i class="fa-solid fa-arrow-right"></i>
    </button>

    <script src="myScript.js" async></script>
    
  </body>
</html>
