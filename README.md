# Webweavers-backend

## Heroku Deployment
https://webweavers-backend.herokuapp.com/api/v1/products

## Iteration 1

### Pachava Abhignya

APIs:

    1) Get all products
    2) Get product by ID
    3) Get favorites
    4) Update favorites
    5) Get category

### Marwa Elali

APIs:

 - Get all orders for a user
![GET orders](screenshots/pm-get-all-user-orders.png)

- Get order by ID
![GET order by id](screenshots/pm-get-order-by-id.png)

- Get cart (gets the current order that is not completed)
![GET cart](screenshots/pm-get-order-in-cart.png)

- Update cart (creates a new order object if cart is initially empty)
![PUT add/update cart](screenshots/pm-add-update-cart.png)

- Complete order
![Order before checkout](screenshots/compass-order-before-checkout.png)
![Postman api](screenshots/pm-complete-order.png)
![After completing checkout](screenshots/compass-order-checkout-complete.png)

### Peter Murphy

Update/Create User Profile
![update or create profile](screenshots/update_or_create_user_profile.jpg)

Get user profile information
![get profile info](screenshots/get_profile_info.jpg)


## Iteration 2

### Marwa Elali

- Change updateCart api method to update quantities from Cart page
![PUT update cart](screenshots/pm-add-update-cart.png)

- Create new addToCart api method to add products to the cart from Product page
![PUT add to cart](screenshots/pm-add-to-cart.png)

### Peter Murphy

- No changes to backend needed after implementation of user profile in iteration 1.

### Pachava Abhignya

- Added the api methods to Get wishlisted items by user and also update the ordering


## Iteration 3

### Marwa Elali

- Create API route to remove items from cart
    - cart order before removing item
![shopping cart](screenshots/shopping-cart.png)
    - cart order after removing item
![cart after removing](screenshots/cart-after-removing.png)
    - Postman request
![PUT remove cart item](screenshots/pm-remove-item.png)
