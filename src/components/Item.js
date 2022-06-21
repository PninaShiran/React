function Item(props) {
    return (<div className="ui card">
    <div className="image">
      <img src={props.show.img}/>
    </div>
    <div className="content">
      <h2>{props.show.name}</h2>
      <div className="meta">
          <h4>{props.show.company}</h4>
        <span className="date">{`${props.show.price} ₪`}</span>
      </div>
      <div className="description">
        {props.show.description}
      </div>
    </div>
    <div className="extra content">
       {`מלאי: ${props.show.qty} יחידות`} 
    </div>
  </div>);
}

export default Item;