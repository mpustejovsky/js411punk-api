function BeerDetails(props) {

    
    console.log ("foodpairing",props.details.food_pairing)
    
    
    return (
     <div> 
     <h1>Details for {props.details.name}</h1>
     <img src={props.details.image_url} width="auto" height="125"></img>
     <dl>
     <dt>Tagline:</dt>
     <dd>{props.details.tagline}</dd>
     <dt> First Brewed:</dt>
     <dd>{props.details.first_brewed}</dd>
     <dt>Discription:</dt>
     <dd>{props.details.description}</dd>
     <dt>Attenuation Level</dt>
     <dd>{props.details.attenuation_level}</dd>
     <dt>Food Pairing</dt>
     {props.details.food_pairing.map((item,index)=>{
      return <dd key={'dd'+index}>{item}</dd>
      
     
    })}
     
     <dt>Brewers Tips</dt>
     <dd>{props.details.brewers_tips}</dd>
     <dt>Contributed By</dt>
     <dd>{props.details.contributed_by}</dd>

     </dl>
     </div>  
    )
}

export default BeerDetails;