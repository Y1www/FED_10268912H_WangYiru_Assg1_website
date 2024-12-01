# FED_10268912H_WangYiru_Assg1_website
## Purpose
The **Golden Village Cinema** website allows users to view movie listings, book tickets online, and choose seats for their desired showtimes. This platform provides an easy-to-use interface for customers to browse, book tickets, and make payments for movies at Golden Village Cinema.

---

## Features

1. **Homepage**: 
   - Displays the Golden Village logos at the top left and right corners.
   - Four navigation options: "Now Showing", "Advance Sales", "Coming Soon", and "Location".
   - A welcome message "Welcome to Golden Village".

2. **Now Showing**:
   - Displays six movie posters in a responsive grid layout.
   - Each movie has a "Buy Tickets" button that leads to the movie’s details page.

3. **Movie Details Page**:
   - Shows detailed information about the selected movie (e.g. title, description, poster).
   - Users can select a time slot for their desired movie showing.

4. **Seat Selection**:
   - Once a time slot is selected, users are redirected to the seat selection page.
   - Users can select available seats from a grid layout.
   - Seats that are already booked (in dark grey) are disabled and cannot be selected.

5. **Payment Page**:
   - After selecting seats, users are redirected to the payment page.
   - Users can enter their credit card details (credit card number, expiration date, CVC, and cardholder name).
   - After submitting the payment, a "Successful payment! Thank you!" message is shown.

---

golden-village-cinema/
│
├── index.html                # Homepage
├── now-showing.html           # Now Showing page
├── advance-sales.html         # Advance Sales page
├── coming-soon.html           # Coming Soon page
├── location.html              # Location page
├── select-seat.html           # Seat Selection page
├── payment.html               # Payment page
├── movie1.html, movie2.html......                # Movie 1, 2 Details page (other movie pages like movie3.html, etc.)
│
├── css/
│   └── styles.css             # All styling for the website
│
├── js/
│   └── main.js                # JavaScript for interactivity
│
├── images/
│   ├── logo1.png              # Golden Village Logo 1
│   ├── logo2.png              # Golden Village Logo 2
│   ├── img1183.jpg            # Movie poster images
│   ├── img1185.jpg            # Movie poster images
│   ├── img1196.jpg            # Movie poster images
│   ├── img1218.jpg            # Movie poster images
│   ├── img4179.jpg            # Movie poster images
│   ├── img4191                # Movie poster images

└── README.md                  # Project documentation (this file)