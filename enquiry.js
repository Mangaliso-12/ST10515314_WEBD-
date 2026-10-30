// M&M HOTEL - VANG VIENG, LAOS - WebD Assignment
// Coordinates: 18.9266° N, 102.4494° E

// 1. MAP SECTION - Leaflet Map
const hotelLat = 18.92667;
const hotelLng = 102.44944;

const map = L.map('map').setView([hotelLat, hotelLng], 14);

// Map tiles (free OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap - M&M Hotel'
}).addTo(map);

// Main Hotel Marker
L.marker([hotelLat, hotelLng]).addTo(map)
  .bindPopup('<b>M&M Hotel</b><br>Vang Vieng, Laos<br>⭐ Luxury on Nam Song River')
  .openPopup();

// Nearby Tourist Attractions (bonus marks)
L.marker([18.9349, 102.4386]).addTo(map).bindPopup('Blue Lagoon 1');
L.marker([18.9243, 102.4241]).addTo(map).bindPopup('Tham Chang Cave');
L.marker([18.9186, 102.4611]).addTo(map).bindPopup('Nam Song River - Tubing Start');

// 2. FORM SECTION - Room Types and Activities
const hotelForm = document.getElementById('hotelForm');
const summaryDiv = document.getElementById('summary');

hotelForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const roomType = document.getElementById('roomType').value;
  const checkin = document.getElementById('checkin').value;
  const activities = document.querySelectorAll('.activity:checked');
  
  // Validation
  if (!name || !roomType || !checkin) {
    alert('Please fill all required fields for M&M Hotel booking');
    return;
  }

  // Collect selected activities
  let selectedActivities = [];
  activities.forEach(act => {
    selectedActivities.push(act.value);
  });

  // Calculate price based on room type
  let price = 0;
  if (roomType === 'backpacker') price = 15;
  if (roomType === 'river') price = 45;
  if (roomType === 'karst') price = 80;
  if (roomType === 'luxury') price = 150;

  // Display summary
  summaryDiv.innerHTML = `
    <h3>Booking Confirmed - M&M Hotel Vang Vieng</h3>
    <p><strong>Guest:</strong> ${name}</p>
    <p><strong>Room:</strong> ${roomType} - $${price}/night</p>
    <p><strong>Check-in:</strong> ${checkin}</p>
    <p><strong>Activities:</strong> ${selectedActivities.length > 0 ? selectedActivities.join(', ') : 'No activities selected'}</p>
    <p><strong>Total:</strong> $${price} per night</p>
    <p style="color:green;">Thank you for choosing M&M Hotel!</p>
  `;

  // Log for GitHub commit proof (console)
  console.log('M&M Hotel Booking:', {
    name,
    roomType,
    checkin,
    activities: selectedActivities,
    location: 'Vang Vieng, Laos'
  });

  // Save to localStorage (extra feature)
  localStorage.setItem('mmHotelBooking', JSON.stringify({
    name, roomType, checkin, activities: selectedActivities
  }));
});

// 3. CHANGE LOG HELPER - auto update date
console.log('M&M Hotel Vang Vieng - Map loaded at:', new Date().toISOString());