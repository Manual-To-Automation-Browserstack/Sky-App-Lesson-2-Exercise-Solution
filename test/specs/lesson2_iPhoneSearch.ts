import Search from '../pages/Search';

describe('Search for an iPhone and add to cart', () => {
  it('searches for an iPhone', async () => {

    await Search.addToCart();
    
    await Search.clickCartButton();

    await Search.checkNumberOfProducts();
  });
});
