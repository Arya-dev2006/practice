import React from 'react'

const Card = (props) => {
    const{ name,address,phone,email} = props.user;
  return (
    
<div class="card">
  <h2>{name}</h2>
  <p class="address">{address}</p>
  <p class="phone">📞 {phone}</p>
  <p class="email">✉ {email}</p>
  <button>Contact</button>
</div>
  )
}

export default Card
