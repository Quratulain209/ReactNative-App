import { Text, FlatList } from 'react-native'
import Card from '../Component/Card'

export default function Products() {
  const product = [
    {
      id: 1,
      title: ' Lip Sleeping Mask ',
      Price: '200',
      Brand : 'Laneige',
      Image: 'https://www.makeupcityshop.com/cdn/shop/products/Laneige-LipSleepingMask-Berry3g.webp?v=1681828399'
    },
    {
      id: 2,
      title: 'Hydro Gel Cream',
      Price: '450',
      Brand : ' Neutrogena  ',
      Image: 'https://www.makeupcityshop.com/cdn/shop/products/neutrogena---hydro-boost-gel-cream---50ml.jpg?v=1669375491'
    },
    {
      id: 3,
      title: 'Essential face wash',
      Price: '600',
      Brand : ' Clean & Clear',
      Image: 'https://www.makeupcityshop.com/cdn/shop/products/Clean_Clear-Essentialfacewash100ml.jpg?v=1669969306'
    },
    {
      id: 4,
      title: 'FARA London',
      Price: '5,847',
      Brand : ' FARA',
      Image: 'https://www.makeupcityshop.com/cdn/shop/products/TrueLove_compact.jpg?v=1670218645'
    },
    {
      id: 5,
      title: 'Morphosis Oil',
      Price: '3,165',
      Brand : ' Framesi',
      Image: 'https://www.makeupcityshop.com/cdn/shop/products/MORPHOSIS_SUBLIMIS_SHINE_LIGHT_OIL_125.jpg?v=1627458042'
    },
    {
      id: 6,
      title: 'Dry Compact Powder',
      Price: '1,748',
      Brand : ' ST London',
      Image: 'https://www.makeupcityshop.com/cdn/shop/products/st-london---dual-wet-_-dry-compact-powder---ivory.jpg?v=1664188458'
    },
  ]
  return (
    <>
      <Text style={{fontSize: 40, marginTop:40, textAlign: 'center', backgroundColor: '#dc3545', color : 'white', fontStyle : 'italic' }}> Products</Text>

      <FlatList
        data={product}
        numColumns={2}
        renderItem={({ item }) => {
          return (<Card item={item} />)
        }
        }
      />
    </>
  )
}
