class Category {
  static idCounter = 0

  id: number
  title: string
  color: string

  constructor(title: string, color: string) {
    this.id = Category.idCounter++
    this.title = title
    this.color = color
  }
}

export default Category
