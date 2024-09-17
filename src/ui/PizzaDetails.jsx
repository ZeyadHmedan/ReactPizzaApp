import Button from "./Button";

export default function PizzaDetails({onSelection, pizza}) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    console.log(pizza);
  return (
    <>
    <div className="pop-up">
    </div>
    <div className="content">
        {pizza.name}
        <Button type={"small"} onClick={()=> onSelection(false)} >
         close
        </Button>
    </div>
    </>
  )
}
