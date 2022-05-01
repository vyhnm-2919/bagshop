<template>
 <div class="products row">
    <ProductItem
      v-for="(product, index) in products"
      :product="product"
      :key="index"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getAllProduct } from '~/apollo/queries/product.queries'
import ProductItem from './ProductItem.vue'
@Component({
  components: {
    ProductItem
  }
})
export default class ProductList extends Vue {
  public isLoading: Boolean = false
  // public products: any = []
  private products = [
    {
      id: 'uhwef98duch',
      name: 'Sonnet Two-Tone Chain Handle Shoulder Bag - Cerulean',
      description: 'Get acquainted with the colour of the season: cerulean blue. With its curved silhouette and two-tone chunky chain handle, our Sonnet shoulder bag is a breath of fresh air, ready to add a refreshing spin to all of your summer looks and beyond. Whether it\'s a stroll down the beach or a trip to the mall, the turn-lock closure will help keep all your belongings secure and accessible within the compact small-sized interior. Style it with a floral halter top and denim shorts. Complete the look with a pair of woven mules.',
      colors: [
        {
          id: 'id-1',
          name: 'Yellow',
          value: 'yellow'
        },
        {
          id: 'id-2',
          name: 'White',
          value: 'white'
        },
        {
          id: 'id-3',
          name: 'Black',
          value: 'black'
        }
      ],
      sizes: [
        {
          id: 'id-1',
          text: 'S',
          value: 's'
        },
        {
          id: 'id-2',
          text: 'M',
          value: 'm'
        }
      ],
      images: [
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw1a089d06/images/hi-res/2022-L3-CK2-20270892-I1-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw28bd9a38/images/hi-res/2022-L3-CK2-20270892-03-2.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw4c4a93e2/images/hi-res/2022-L3-CK2-20270892-30-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw2675b76e/images/hi-res/2022-L3-CK2-20270892-47-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw603c354a/images/hi-res/2022-L3-CK2-20270892-01-2.jpg?sw=580&sh=774'
      ],
      reviews: [
        {
          id: 'id-1',
          user: {
            id: 'id-1',
            firstname: 'firstname-1',
            lastname: 'lastname-1',
            avatar: 'avatar-src-1'
          },
          content: 'content-1'
        },
        {
          id: 'id-2',
          user: {
            id: 'id-2',
            firstname: 'firstname-2',
            lastname: 'lastname-2',
            avatar: 'avatar-src-2'
          },
          content: 'content-2'
        }
      ],
      ratings: 4.5,
      category: [
        {
          id: 'id-1',
          categoryName: 'categoryName-1'
        },
        {
          id: 'id-2',
          categoryName: 'categoryName-2'
        }
      ],
      user: {
        id: 'id-1',
        firstname: 'firstname-1',
        lastname: 'lastname-1',
        avatar: 'avatar-src-1'
      },
      price: 86,
      unit: '$',
      price_range: {
        text: 'US$80 to US$100',
        price_gte: 80,
        price_lte: 100,
        unit: '$'
      }
    },
    {
      id: 'o239u0duxi9sjx',
      name: 'Alcott Scarf Chain-Link Shoulder Bag - Pumpkin',
      description: 'Refresh your wardrobe this season with this work of art. Featuring a striking pumpkin-orange watercolour-print finish that will ensure you stand out from the crowd, our Alcott shoulder bag also comes topped with a printed scarf and edgy chain-link for added oomph. Use the top zip closure to keep your belongings organised and go hands-free with the adjustable shoulder strap. Style it with distressed jeans and a strapless top for a casual look.',
      colors: [
        {
          id: 'id-1',
          name: 'Yellow',
          value: 'yellow'
        },
        {
          id: 'id-2',
          name: 'White',
          value: 'white'
        },
        {
          id: 'id-3',
          name: 'Black',
          value: 'black'
        }
      ],
      sizes: [
        {
          id: 'id-1',
          text: 'S',
          value: 's'
        },
        {
          id: 'id-2',
          text: 'M',
          value: 'm'
        }
      ],
      images: [
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw8365e5d2/images/hi-res/2022-L3-CK2-80151122-H8-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwa5ec550b/images/hi-res/2022-L3-CK2-80151122-09-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwb3a425b1/images/hi-res/2022-L3-CK2-80151122-21-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw59ae5edb/images/hi-res/2022-L3-CK2-80151122-H8-6.jpg?sw=1152&sh=1536',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw9a2c6f7e/images/hi-res/2022-L3-CK2-80151122-09-5.jpg?sw=1152&sh=1536'
      ],
      reviews: [
        {
          id: 'id-1',
          user: {
            id: 'id-1',
            firstname: 'firstname-1',
            lastname: 'lastname-1',
            avatar: 'avatar-src-1'
          },
          content: 'content-1'
        },
        {
          id: 'id-2',
          user: {
            id: 'id-2',
            firstname: 'firstname-2',
            lastname: 'lastname-2',
            avatar: 'avatar-src-2'
          },
          content: 'content-2'
        }
      ],
      ratings: 4.5,
      category: [
        {
          id: 'id-1',
          categoryName: 'categoryName-1'
        },
        {
          id: 'id-2',
          categoryName: 'categoryName-2'
        }
      ],
      user: {
        id: 'id-1',
        firstname: 'firstname-1',
        lastname: 'lastname-1',
        avatar: 'avatar-src-1'
      },
      price: 73,
      unit: '$',
      price_range: {
        text: 'US$80 to US$100',
        price_gte: 80,
        price_lte: 100,
        unit: '$'
      }
    },
    {
      id: '2390-4u9hcbJKZL',
      name: 'Aviary Beaded Acrylic Handle Slouchy Bag - Avocado',
      description: 'Feeling adventurous? Reach for our Aviary slouchy bag. The classy avocado-green finish is nothing short of gorgeous, while the brilliant acrylic beaded handles make this bag a head turner. Crafted with a magnetic closure and roomy enough to hold your daily essentials, this small-sized gem will be the perfect piece to finish off a sleek jumpsuit and some d�Orsay pumps.',
      colors: [
        {
          id: 'id-1',
          name: 'Yellow',
          value: 'yellow'
        },
        {
          id: 'id-2',
          name: 'White',
          value: 'white'
        },
        {
          id: 'id-3',
          name: 'Black',
          value: 'black'
        }
      ],
      sizes: [
        {
          id: 'id-1',
          text: 'S',
          value: 's'
        },
        {
          id: 'id-2',
          text: 'M',
          value: 'm'
        }
      ],
      images: [
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwf87cd7fd/images/hi-res/2022-L3-CK2-10270879-H2-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwa6008db5/images/hi-res/2022-L3-CK2-10270879-H9-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwbf36f7ff/images/hi-res/2022-L3-CK2-10270879-H8-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw47d2a3fd/images/hi-res/2022-L3-CK2-10270879-09-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw379cb08b/images/hi-res/2022-L3-CK2-10270879-09-2.jpg?sw=1152&sh=1536'
      ],
      reviews: [
        {
          id: 'id-1',
          user: {
            id: 'id-1',
            firstname: 'firstname-1',
            lastname: 'lastname-1',
            avatar: 'avatar-src-1'
          },
          content: 'content-1'
        },
        {
          id: 'id-2',
          user: {
            id: 'id-2',
            firstname: 'firstname-2',
            lastname: 'lastname-2',
            avatar: 'avatar-src-2'
          },
          content: 'content-2'
        }
      ],
      ratings: 4.5,
      category: [
        {
          id: 'id-1',
          categoryName: 'categoryName-1'
        },
        {
          id: 'id-2',
          categoryName: 'categoryName-2'
        }
      ],
      user: {
        id: 'id-1',
        firstname: 'firstname-1',
        lastname: 'lastname-1',
        avatar: 'avatar-src-1'
      },
      price: 63,
      unit: '$',
      price_range: {
        text: 'US$60 to US$80',
        price_gte: 60,
        price_lte: 80,
        unit: '$'
      }
    },
    {
      id: '89cbsqwi2i23ndmkx',
      name: 'Ruched Bead-Handle Shoulder Bag - Beige',
      description: 'A fashion must-have in your modern wardrobe, this beige shoulder bag is the epitome of chic and trendy. Featuring a ruched design detail that adds a cool touch to your OOTDs, keep all your daily essentials secure but within reach with its sturdy zip closure. A detachable strap offers multiple ways of wear while the bead handle adds extra visual interest. Pair it with a wrap midi skirt and strapless top on your next night out for extra style points.',
      colors: [
        {
          id: 'id-1',
          name: 'Yellow',
          value: 'yellow'
        },
        {
          id: 'id-2',
          name: 'White',
          value: 'white'
        },
        {
          id: 'id-3',
          name: 'Black',
          value: 'black'
        }
      ],
      sizes: [
        {
          id: 'id-1',
          text: 'S',
          value: 's'
        },
        {
          id: 'id-2',
          text: 'M',
          value: 'm'
        }
      ],
      images: [
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw6afff838/images/hi-res/2022-L2-CK2-20270857-1-05-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw1b73ea6b/images/hi-res/2022-L2-CK2-20270857-1-01-1.jpg?sw=580&sh=774',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dwc6b88b1f/images/hi-res/2022-L2-CK2-20270857-1-05-4.jpg?sw=1152&sh=1536',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw279687ec/images/hi-res/2022-L2-CK2-20270857-1-05-5.jpg?sw=1152&sh=1536',
        'https://www.charleskeith.com/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-ck-products/default/dw5a27b8fb/images/hi-res/2022-L2-CK2-20270857-1-01-4.jpg?sw=1152&sh=1536'
      ],
      reviews: [
        {
          id: 'id-1',
          user: {
            id: 'id-1',
            firstname: 'firstname-1',
            lastname: 'lastname-1',
            avatar: 'avatar-src-1'
          },
          content: 'content-1'
        },
        {
          id: 'id-2',
          user: {
            id: 'id-2',
            firstname: 'firstname-2',
            lastname: 'lastname-2',
            avatar: 'avatar-src-2'
          },
          content: 'content-2'
        }
      ],
      ratings: 4.5,
      category: [
        {
          id: 'id-1',
          categoryName: 'categoryName-1'
        },
        {
          id: 'id-2',
          categoryName: 'categoryName-2'
        }
      ],
      user: {
        id: 'id-1',
        firstname: 'firstname-1',
        lastname: 'lastname-1',
        avatar: 'avatar-src-1'
      },
      price: 79,
      unit: '$',
      price_range: {
        text: 'US$60 to US$80',
        price_gte: 60,
        price_lte: 80,
        unit: '$'
      }
    }
  ]


  getData() {
    // return this.$apolloProvider.defaultClient
    //   .query({
    //     query: getAllProduct,
    //     fetchPolicy: 'no-cache'
    //   })
    //   .then(({ data }: any) => {
    //     this.isLoading = false
    //     this.products = data.products
    //   })
    //   .catch((error: any) => {
    //     this.isLoading = false
    //     console.log('error: ', error)
    //   })
  }
}
</script>
