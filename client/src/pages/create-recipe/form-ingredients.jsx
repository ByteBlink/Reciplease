import FormNavigation from "./form-navigation";
import { useStore } from "../../zustand/store";

function FormIngredients({ state, setState, setFormSection }) {
  const { updateActiveNavButton } = useStore();

  const handleAddIngredient = () => {
    setState({ ...state, ingredients: [...state.ingredients, ""] });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = state.ingredients;
    ingredients[index] = value;
    setState({ ...state, ingredients: ingredients });
  };

  return (
    <>
      <div className="create-recipe-container ingredients">
        <form>
          <p>What are the ingredients, Chef?</p>
          <FormNavigation />
          <div className="create-recipe-form">
            <div className="ingredients">
              {state.ingredients.map((ingredient, index) => (
                <input
                  key={index}
                  type="text"
                  name="ingredients"
                  placeholder="Add ingredient here"
                  maxLength={50}
                  value={ingredient}
                  onChange={(event) => handleIngredientChange(event, index)}
                  required
                />
              ))}

              <button
                type="button"
                className="add-ingredient-btn"
                onClick={handleAddIngredient}
              >
                Add Ingredient
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormSection("Method");
                  updateActiveNavButton(3);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormIngredients;