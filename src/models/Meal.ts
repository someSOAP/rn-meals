class Meal {
  static idCounter = 0
  id: string

  constructor(
    public categoryIds: string[],
    public title: string,
    public affordability: string,
    public complexity: string,
    public imageUrl: string,
    public duration: number,
    public ingridients: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegeterian: boolean,
    public isLactoseFree: boolean
  ) {
    this.id = `m${Meal.idCounter++}`
  }
}

export default Meal