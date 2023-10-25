function calculateCircleCircumference() {
            const diameter = parseFloat(document.getElementById("circleDiameter").value);
            const circumference = Math.PI * diameter;
            document.getElementById("result").innerHTML = `Circumference (Diameter): ${circumference}`;
        }

        function calculateCircleCircumferenceRadius() {
            const radius = parseFloat(document.getElementById("circleRadius").value);
            const circumference = 2 * Math.PI * radius;
            document.getElementById("result").innerHTML = `Circumference (Radius): ${circumference}`;
        }

        function calculateRectangleArea() {
            const width = parseFloat(document.getElementById("rectangleWidth").value);
            const length = parseFloat(document.getElementById("rectangleLength").value);
            const area = width * length;
            document.getElementById("result").innerHTML = `Area: ${area}`;
        }

        function calculateSquareArea() {
            const side = parseFloat(document.getElementById("squareSide").value);
            const area = side * side;
            document.getElementById("result").innerHTML = `Area: ${area}`;
        }

        function calculateSquarePerimeter() {
            const side = parseFloat(document.getElementById("squareSide").value);
            const perimeter = 4 * side;
            document.getElementById("result").innerHTML = `Perimeter: ${perimeter}`;
        }
