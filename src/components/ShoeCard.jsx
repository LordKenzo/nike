const ShoeCard = ({ shoe, changeBigShoeImage, currentHeroImage }) => {
  const handleClick = (e) => {
    e.preventDefault()
    if (currentHeroImage !== shoe.bigShoe) {
      changeBigShoeImage(shoe.bigShoe)
    }
  }
  return (
    <div
      className={`border-2 rounded-xl ${currentHeroImage === shoe.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1 transition-transform duration-300 ease-in-out transform hover:scale-105`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick(e)
        }
      }}
      tabIndex={0}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={shoe.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain transition-transform duration-300 ease-in-out transform hover:rotate-180"
        />
      </div>
    </div>
  )
}

export default ShoeCard
