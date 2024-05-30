export default function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }

  function handleButtonSrc(event) {
    console.log(event.target.src);
  }
  return (
    <div>
      <button name="uno" onClick={handleButtonClick}>
        Click me
        <img
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbqh4wV0LCHoHjffxtsnCRkRyG9uh_i60-CG8od9S7ikHkuYzJ8K9cuHuEQixigwJV_WLmf2hST3zSGVfC6EUJaoVgKG8LqlNHczH72FkDB4wuz8DtcIRXHRAqv1JBDSHbuVO-WD9q&usqp=CAc"
          alt="lupo"
          onClick={handleButtonSrc}
          width={28}
          height={28}
        />
      </button>
    </div>
  );
}
