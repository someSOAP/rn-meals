class Category {
  static idCounter = 1

  id: string
  title: string
  color: string
  imageURL: string

  constructor(title: string, color: string, imageURL: string) {
    this.id = `c${Category.idCounter++}`
    this.title = title
    this.color = color
    this.imageURL = imageURL
  }
}

export default Category
