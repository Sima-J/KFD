import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import uuid from 'react-uuid'
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert'
import {
  Col,
  Container,
  Row,
  Button, Form
  
} from 'react-bootstrap'
import { db, storageRef } from '../../Firebase'
import { FetchProducts } from '../../redux'
import './AddDonation.scss'

export default function AddItemForm() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const user = useSelector(state => state.authentication)

  const categ = t('additem.cat', { returnObjects: true })
  const result = Object.keys(categ).map(key => categ[key])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [Images, setImages] = useState([])
  const [loading, setloading] = useState(false)
  const [productData, setProductData] = useState({
    categories: {},
  })

  useEffect(() => {
    setProductData({
      ...productData,
      tel: user.user.phone,
      city: user.user.city,
      date: new Date().toString(),
    })
  }, [user])

  const removeImg = index => {
    const imgs = [...Images]
    imgs.splice(index, 1)
    setImages(imgs)
  }

  const handleChnage = e => {
    if (e.target.name === 'category') {
      if (e.target.checked) {
        setSelectedCategories([...selectedCategories, e.target.id])
      } else {
        setSelectedCategories(
          selectedCategories.filter(item => item !== e.target.id)
        )
      }
      setProductData({
        ...productData,
        categories: {
          ...productData.categories,
          [e.target.id]: e.target.checked,
        },
      })
    } else if (e.target.name === 'itemType') {
      setProductData({
        ...productData,
        itemType: e.target.id,
      })
    } else if (e.target.name === 'imageForm.Control') {
      if (e.target.files.length + Images.length < 5) {
        setImages([...Images, ...e.target.files])
      }
    } else {
      setProductData({
        ...productData,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const ImageRef = []

    for (let i = 0; i < Images.length; i += 1) {
      const UUID = uuid()
      const fileRef = storageRef.child(UUID + Images[i].name)
      // eslint-disable-next-line no-await-in-loop
      await fileRef.put(Images[i])
      // eslint-disable-next-line no-await-in-loop
      const fileUrl = await fileRef.getDownloadURL()
      ImageRef.push(fileUrl)
    }

    const userRef = db.collection('donations').doc()
    userRef
      .set(
        {
          productName: productData.title,
          quantity: productData.quantity,
          phone: productData.tel,
          date: productData.date,
          description: productData.description,
          location: productData.city,
          state: productData.itemType,
          userName: user.user.name,
          category: selectedCategories,
          uui: user.user.uui,
          images: ImageRef,
          userImg: user.user.photo,
        },
        { merge: true }
      )

      .then(() => {
        dispatch(FetchProducts)
      })
    const item = productData.title.toUpperCase()
    setloading(false)
    swal('', ` | ${item} | ${t('toast.successAdd')}`, 'success')
    setProductData({
      tel: user.user.phone,
      city: user.user.city,
      date: new Date().toString(),
      title: '',
      quantity: '',
      description: '',
      productImage: '',
      itemType: '',
      category: null,
      uui: user.user.uui,
      images: '',
    })
    setImages([])
  }

  return (
    <div className="p-8">
      <SweetAlert
        title=''
        show={loading}
        showConfirm={false}
        closeOnClickOutside
        onCancel={() => setloading(false)}
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="px-32 py-10 shadow-md ">
          <FontAwesomeIcon
            icon="spinner"
            className=" mb-5"
            pulse
            size="7x"
          />
          <h1 className=" m-3 mt-4 text-3xl">{t('Donations.loading')}</h1>
        </div>
      </SweetAlert>
                               
      <Container className="border rounded border-black my-4 text-center " >
      <Row>
      <Col>
      <h1 className="newd">{t("Donations.addnew")}</h1>
      </Col>
  </Row>



      <Form onSubmit={handleSubmit}>

    
      <Row>
      <Col md='6'>
                        <Form.Label htmlfor="Title" className="messages">
                        {t("Donations.title")}
                    </Form.Label>
                    <Form.Control
                
                  type="text"
                  name="title"
                  required
                  value={productData.title}
                  onChange={handleChnage}
                />
                <br/>

                                <Form.Label
                  htmlFor="quantity"
                  >
                  {t("Donations.quantity")}
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="quantity"
                  value={productData.quantity}
                  onChange={handleChnage}
                />
               <br/>

                <Form.Label
                  htmlFor="type"
                >
                 {t("Donations.type")}
                </Form.Label>
                <br />
                
                  <Form.Label htmlFor="Requested"  className="mr-3 mb-3 mt-2"
                  >
                    <Form.Control
                      type="radio"
                      required
                      name="itemType"
                      id="Requested"
                      className="mr-3"  onChange={handleChnage}
                    />
                    {t("Donations.requdon")}
                                      </Form.Label>
                  <Form.Label htmlFor="Donations" className="mb-3 mt-2">
                    <Form.Control
                      type="radio"
                      required
                      name="itemType"
                      id="Donations"
                      className=""
                      onChange={handleChnage}
                    />
                    {t('Donations.donated')}         
                    
                    
                    </Form.Label>
                    <br/>
                    <br/>
                <Form.Label
                  htmlFor="categories"
                  className="mb-3"
                  >
                  {t('additem.itemcate')}
                </Form.Label>
                <br />


                <div >
                  {result.map(cate => (
                    <Form.Label
                      htmlFor={
                        cate.url
                      }
                      key={uuid()}
                    >
                      <Form.Control
                        type="checkbox"
                        name="category"
                        id={
                          cate.url
                        }
                        checked={
                          productData.categories
                            ? productData.categories[
                                cate.url
                              ]
                            : false
                        }
                        className="hidden"
                        onChange={handleChnage}
                      />
                      <div
                      className=" mx-2"

                        row="1"
                      >
                        {cate.value}
                      </div>
                    </Form.Label>
                  ))}
                </div>
                <br/>
                <Form.Label
                  htmlFor="tel"
                  >
                  {' '}
                  {t('Donations.phone')}
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="tel"
                  required
                  value={productData.tel}
                  onChange={handleChnage}
                />
                <br/>

                <Form.Label
                  htmlFor="city"
                  >
                  {t('Donations.city')}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  required
                  value={productData.city}
                  onChange={handleChnage}
                />
                </Col>
               

            <Col >
              <div className=" py-12 BDS  item-center  text-center">
                <div className="  pb-4 p-1   ">
                  <FontAwesomeIcon
                    icon="images"
                    className="fa-3x my-3   justify-self-center"
                  />
                  {Images[0] ? (
                    Images.map((img, index) => {
                      return (
                        <div className="m-1 rounded   border self-center text-left overflow-hidden   "> 
                        <Button
                            type="button"
                            className="AddButFor m-1  "
                            onClick={() => removeImg(index)}
                          >
                            X
                          </Button>
                          <p className=" ">
                          
                            {index + 1}.
                         
                            {img.name}
                          </p>

                         
                        </div>
                      )
                    })
                  ) : (
                    <p>{t('Donations.noImg')}</p>
                  )}
                </div>
                <Form.Label
                  htmlFor="file-upload"
                  className="AddImg py-2 px-2"
                >
                  <span>{t('Donations.upload')}</span>
                  <Form.Control
                    id="file-upload"
                    name="imageForm.Control"
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    className=" sr-only"
                    onChange={handleChnage}
                  />
                </Form.Label>
                </div>
              </Col>

              </Row> 
              <Row>
           
              <Form.Label
                htmlFor="Description"
                className="mt-3 ml-3"

              >
              {t("Donations.desc")}             
              
              </Form.Label>

              <Form.Control
              as="textarea" row="2"  type="text" 
                name="description"
                className=" m-3 py-3"


                required
                value={productData.description}
                onChange={handleChnage}
              />
</Row>
            <Row >
            <Col >
                         
            <Button 
                type="submit"
                onClick={() => setloading(true)}
                className="AddButFor py-2 px-4  m-1"
              >
                {t("Donations.submit")}
              </Button>
              </Col>
              <Col>
              <Button
                value={t('Donations.cancel')}
                type="button"
                onClick={() => history.goBack()}
                className="AddButFor py-2 px-4 m-1 "
              >{t("Donations.cancel")}</Button>
              </Col>
              </Row>
           

          </Form>
      </Container>
    </div>
  )
}
