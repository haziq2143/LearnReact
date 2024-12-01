

const Button = (props) => {
  
    return(
      <button 
      className={`bg-yellow-500 px-4 py-3  rounded-lg font-bold text-${ props.size } hover:bg-sky-500` }
      type='submit'
      >{props.isi}
      </button>
    )
  }
  
  export default Button