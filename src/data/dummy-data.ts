import Category from '../models/Category'
import Meal from '../models/Meal'

export const CATEGORIES = [
  new Category(
    'Italian',
    '#f5428d',
    'https://cf.bstatic.com/data/xphoto/1182x887/222/22281452.jpg?size=S'
  ),
  new Category(
    'Quick & Easy',
    '#f54242',
    'https://www.eatthis.com/wp-content/uploads/2019/08/quick-easy-veggie-rice-bowl-recipe.jpg'
  ),
  new Category(
    'Hamburgers',
    '#f5a442',
    'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg'
  ),
  new Category(
    'German',
    '#f5d142',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvxP8S6vgoO2-TCuUPEYc-a8qKYxjvgdfMSzZFMicV7oNoUczAY-zchvL2M2xiMAn014&usqp=CAU'
  ),
  new Category(
    'Light & Lovely',
    '#368dff',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/light-easy-recipes-crunchy-turkey-salad-with-oranges-1571088012.jpg'
  ),
  new Category(
    'Exotic',
    '#41d95d',
    'https://miro.medium.com/max/9792/0*ms25qTKJKj60ZbCI'
  ),
  new Category(
    'Breakfast',
    '#9eecff',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delicious-breakfast-on-a-light-table-royalty-free-image-863444442-1543345985.jpg'
  ),
  new Category(
    'Asian',
    '#b9ffb0',
    'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_800,h_600,dpr_3/https://assets.app.engoo.com/images/Cd7yxUh1AR4FozfgVvdfbT81uG6QrprFet297VrxgbV.jpeg'
  ),
  new Category(
    'French',
    '#ffc7ff',
    'https://www.gastrotravelogue.com/wp-content/uploads/2020/01/food-in-France.jpg'
  ),
  new Category(
    'Summer',
    '#47fced',
    'data:image/jpeg;base64,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'
  ),
]

export const MEALS = [
  new Meal(
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)',
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.',
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter',
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C',
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    ['c3'],
    'Classic Hamburger',
    'pricey',
    'simple',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns',
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion',
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices',
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.',
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper',
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing',
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel',
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel',
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted',
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk',
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice',
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar',
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.',
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil',
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette',
    ],
    true,
    true,
    true,
    true
  ),
]
