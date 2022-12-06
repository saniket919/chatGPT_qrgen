function generateQRCode() {
    // Get the data and options from the form
    var data = document.getElementById("data").value;
    var size = document.getElementById("size").value;
    var color = document.getElementById("color").value;

    // Make an HTTP request to the QR code API endpoint
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(data) + "&size=" + size + "x" + size + "&color=" + encodeURIComponent(color));
    xhr.responseType = "blob";
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Remove the old QR code image
            var img = document.getElementById("qr-code-img");
            if (img) {
                img.remove();
            }

            // Create a new image element
            img = document.createElement("img");
            img.id = "qr-code-img";

            // Set the QR code image source
            img.src = URL.createObjectURL(xhr.response);

            // Add the image to the page
            document.getElementById("qr-code").appendChild(img);
        }
    };
    xhr.send();
}
