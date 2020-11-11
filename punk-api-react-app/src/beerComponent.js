function BeerComponent(props) {

    {console.log ("props=",props.handleBeerDetails)}
  
    
    return (
      <div class="sub_area">
      <h1>List of Beers</h1>
      <ul>
      {props.items.map((item,index)=>{
        return <div key={'d'+index} class="beer_List">
          <ul class="no-bullets">
          <li key={index}>{item.name}</li></ul>
          <button id={'b'+index} key={'b'+index} onClick={()=>props.handleBeerDetails(index)} >Details</button>
          <i  id={'thumb'+index} key={'thumb'+index} onClick={()=>props.handleLike(index)} class="fa fa-thumbs-up"></i>
          </div>
      })}
    </ul>
    </div>
    )
}

export default BeerComponent;