class Category {
  static idCounter = 1

  id: string
  title: string
  color: string

  constructor(title: string, color: string) {
    this.id = `c${Category.idCounter++}`
    this.title = title
    this.color = color
  }
}

export default Category
