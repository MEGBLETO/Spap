const container = document.querySelector('.container');
const  seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count =document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');



let ticketPrice = +movieSelect.value;

//save selected movie index and price

function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex',movieIndex);
  localStorage.setItem('selectedMoviePrice',moviePrice);
}

//update total and count

function UpdateSelectedCount(){
  const selectedCount = document.querySelectorAll('.row .seat.selected');
  
  const seatsIndex = [...selectedCount].map(seat =>[...seats].indexOf(seat));
  console.log(seatsIndex);
  
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
  
  const selectedSeatNumber = selectedCount.length;
   count.innerText = selectedSeatNumber;
   total.innerText = selectedSeatNumber * ticketPrice;
}

//movie select event  

movieSelect.addEventListener('change',e=>{
  ticketPrice =+e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  UpdateSelectedCount();
});




//seat click event
container.addEventListener('click',e =>{
  if(e.target.classList.contains('seat')
   && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');
    UpdateSelectedCount();
  }
});