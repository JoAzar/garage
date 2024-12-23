import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Car from './cars'



const carList = [
  { name: "Ford", model: "Mustang", image: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWpzN3FnbDBmYXA2aWQ4dzQzcWFlcG83bWo2MG0zemV5bWU0MGNhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dVOcJu4Gn7DXy/giphy.gif'},
  { name: "Chevrolet", model: "Camaro", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXQzNzA2ZWp5OW83N2l0MXQ0YnV1ZXZxaGN3cWc0bGd4MG5za29jNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8HHIvBCrQRlTy/giphy.gif"},
  { name: "Toyota", model: "Supra", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG10MDJwaDZreW00bjVmNTN3OHBwY2Jsd2ZoNm5lajVjMnZveWpreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W4UOZK3EacuywD9reC/giphy.gif" },
  { name: "Tesla", model: "Model 3", image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZpdGYzajd3ZGQ1NnZpZDZhbGhseHRqam9hZHdpZGkxd2dzam9wdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0zFHQJ26MBODjcAbQV/giphy.gif" },
  { name: "BMW", model: "Serie 3", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3R3bDN0ZjF1N2NxMHQydWwxemo3c2MydHg0NWRmbHlwMjA3OGhpOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rw9A20ijmUPSibYQT7/giphy.gif"},
  { name: "El Pepe", model: "Clase S", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmkwanBxMHg4dWN6NGNnMTZneGdtaGx5MnJrY2FjbHp1c2VzdHdqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6EhXlZ0l1kFxo4Gk/giphy.gif"},
  { name: "Audi", model: "A4", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Rqb3B6NjVqcW1vc2l1OGw4dm84ajljeGRhdmJheXdpMjk2dnVlaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kKNnus55dQcd2O4nWB/giphy.gif"},
  { name: "Porsche", model: "911", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2sxMnFtaW9hMmg4eDM3M2wycDc4c2xqbDF6bGNsYXhldWlvdTM1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JUkhKi0pB6stQ44hXE/giphy.gif"}
];

function Garage() {
  return (
    <div>
      <h1 style={{textAlign: 'center', margin: "3em", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Bienvenido a mi Garage</h1>
      <div style={{ display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "center"}}>
        {carList.map((car, index) => (
          <Car key={index} name={car.name} model={car.model} image={car.image} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);
