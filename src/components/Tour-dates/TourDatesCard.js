import * as React from 'react';
import './TourDatesCard.css'



function TourList() {
  const data = [
      {
          "Date": "25 oktober 2023",
          "City": "Stockholm",
          "TicketLink": "http://Billetto.com"
      },
      {
        "Date": "25 oktober 2023",
        "City": "Stockholm",
        "TicketLink": "http://Billetto.com"
    },
    {
        "Date": "25 oktober 2023",
        "City": "Stockholm",
        "TicketLink": "http://Billetto.com"
    },
    {
        "Date": "25 oktober 2023",
        "City": "Stockholm",
        "TicketLink": "http://Billetto.com"
    },



  ]
  const listItems = data.map(
      (element, i) => {
          return (
            <div className='card' key={i}>
                <div className='card-info'>
                    <h3>{element.Date}</h3>
                    <p>{element.City}</p>
                    <div className='card-link'><a href={element.TicketLink}>Köp biljetter här!</a></div>
                </div>
            </div>
              
            ) 
      }
  )
  return (
      <div>
          {listItems}
      </div>
  )
}

export default TourList;