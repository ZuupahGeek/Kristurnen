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
      (element) => {
          return (
            <div className='card'>
                <div className='card-info'>
                    <h3>{element.Date}</h3>
                    <p>{element.City}</p>
                    <a href={element.TicketLink}>Köp biljetter här!</a>
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