const NoResults = () => {
  return (
  <div className="noResults">
    <div>Not Found. Please try aother words</div>
      <img
        src="https://media1.giphy.com/media/lp84cYEUoOyh0LBEbt/giphy.gif?cid=d0833b86e8q1z7l7lupxbcmgck2x7x67x4wdrp8hn687krrx&rid=giphy.gif&ct=g"
        alt="Result Not Found"
        className='card'
        data-testid="gifCard"
      />
        <img
        src="https://media2.giphy.com/media/7Am7Ydb6CcjKg/giphy.gif?cid=d0833b86dpf7q90ll4npi32hnuf8uvf7s3dacac126pcagzr&rid=giphy.gif&ct=g"
        alt="Result Not Found"
        className='card'
        data-testid="gifCard"
      />
       <img
        src="https://media1.giphy.com/media/3o7527pa7qs9kCG78A/giphy-downsized.gif?cid=d0833b86lnfqi73q1y1yx67beq6la8p5f18mfiebh15g9e6t&rid=giphy-downsized.gif&ct=g"
        alt="Result Not Found"
        className='card'
        data-testid="gifCard"
      />

    </div>
  )
}

export default NoResults;