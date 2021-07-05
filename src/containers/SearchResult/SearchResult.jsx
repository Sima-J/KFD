import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import  {
  Col,Row

      
      } 
  from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import FilterOptions from '../../components/FliterOption'
import CheckboxFilter from '../../components/CheckboxFilter'
import  SearchHeader  from '../../components/SearchForm/SearchHeader'
import LandingPageCard from '../../components/LandingPageCard';



export default function SearchResult() {
  const location = useLocation()
  const { t } = useTranslation()
  const products = useSelector(state => state.products)
  const [Word, setWord] = useState('')
  const [Select, setSelect] = useState('')
  const [Min, setMin] = useState()
  const [Max, setMax] = useState()
  const [MinRange, setMinRange] = useState('')
  const [MaxRange, setMaxRange] = useState('')
  const [Checkbox, setCheckbox] = useState([])

  const onSubmit = e => {
    e.preventDefault()
    setMinRange(Min)
    setMaxRange(Max)
  }

  const onChange = e => {
    switch (e.target.id) {
      case 'lower25':
        setMinRange(1)
        setMaxRange(25)
        setMin('')
        setMax('')
        break
      case 'lower50':
        setMinRange(25)
        setMaxRange(50)
        setMin('')
        setMax('')
        break
      case 'lower100':
        setMinRange(50)
        setMaxRange(100)
        setMin('')
        setMax('')
        break
      case 'lower200':
        setMinRange(100)
        setMaxRange(200)
        setMin('')
        setMax('')
        break
      case 'lower400':
        setMinRange(200)
        setMaxRange(400)
        setMin('')
        setMax('')
        break
      case 'infinte':
        setMinRange(400)
        setMaxRange(100000)
        setMin('')
        setMax('')
        break
      default:
        return () => {}
    }
    return null
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search).get('word')
    const selectParams = new URLSearchParams(location.search).get('select')
    const catParams = new URLSearchParams(location.search).get('cat')
    setWord(searchParams)
    setSelect(selectParams)

    if (!Checkbox.includes(catParams) && catParams !== null) {
      setCheckbox([...Checkbox, catParams])
    }
  }, [location])

  const filterProducts = () => {
    let NameFilter = []
    let DescriptionFilter = []
    let ContentFilter = []
    let CheckboxFilterarray = []
    const ProductHash = []

    NameFilter = products.data.filter(item => item.productName.includes(Word))
    DescriptionFilter = products.data.filter(item =>
      item.description.includes(Word)
    )

    for(let i = 0; i < NameFilter.length; i += 1) {
      ProductHash.push(NameFilter[i].id)
    }
    for(let i = 0; i < DescriptionFilter.length; i += 1) {
      if(!ProductHash.includes(DescriptionFilter[i].id)) {
        ProductHash.push(DescriptionFilter[i].id)
      }
    }

    ContentFilter = products.data.filter(item => ProductHash.includes(item.id))

    if (Checkbox.length) {
      CheckboxFilterarray = ContentFilter.filter(item =>
        item.category.some(itm => {
          return Checkbox.includes(itm)
        })
      )
    } else {
      CheckboxFilterarray = ContentFilter
    }

    let PriceFilter = []

    if (MinRange === '' && MaxRange === '') {
      PriceFilter = CheckboxFilterarray
    } else {
      PriceFilter = CheckboxFilterarray.filter(
        item => item.price >= MinRange && item.price <= MaxRange
      )
    }

    let StateFilter = []

    switch (Select) {
      case 'All':
        StateFilter = PriceFilter
        break
      case 'Requested':
        StateFilter = PriceFilter.filter(item => item.state === 'Requested')
        break
      case 'Donations':
        StateFilter = PriceFilter.filter(item => item.state === 'Donations')
        break
      case 'Free':
        StateFilter = PriceFilter.filter(item => item.state === 'Donated')
        break
      case 'Paid':
        StateFilter = PriceFilter.filter(
          item => item.state === 'Used' || item.state === 'Crafted'
        )
        break
      case 'Donated':
        StateFilter = PriceFilter.filter(item => item.state === 'Donated')
        break
      default:
        StateFilter = PriceFilter.filter(item => item)
    }

    return StateFilter.map(item => (
      
      <LandingPageCard
        productName={item.productName}
        image={item.images ? item.images[0] : undefined}
        price={item.price}
        date={item.date}
        views={item.views}
        state={item.state}
        description={item.description}
        location={item.location}
        id={item.id}
      /> 
    ))
  }

  const ChangeCheckbox = e => {
    if (Checkbox.includes(e.target.id)) {
      setCheckbox(Checkbox.filter(item => item !== e.target.id))
    } else {
      setCheckbox([...Checkbox, e.target.id])
    }
  }

  return (
    <div>
    <div>
      <SearchHeader/>
      </div>
      
      <Row>
        <Col lg={2} md={4} className="ml-4">
          <h3 className="text-2xl font-bold py-1"> {t("filter.filteredby")} </h3>{' '}
          <h1 className="text-blue ">{filterProducts().length} Results</h1>
          <hr className="my-2" />
          <CheckboxFilter Checkbox={Checkbox} ChangeCheckbox={ChangeCheckbox} />
          <FilterOptions
            onSubmit={onSubmit}
            onChange={onChange}
            setMin={setMin}
            setMax={setMax}
            Min={Min}
            Max={Max}
          />
        </Col>
        
        <Col lg={4} md={6} >
        <Row>
                  {products.loading === false ? filterProducts() : 'NoData...'
        }</Row></Col>
    
        

      </Row>
    </div>
  )
}
