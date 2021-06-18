class Meal {
  static idCounter = 0
  id: string

  constructor(
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingridients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegeterian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = `m${Meal.idCounter++}`
  }
}
