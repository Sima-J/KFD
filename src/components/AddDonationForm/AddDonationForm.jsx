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

    const userRef = db.collection('products').doc()
    userRef
      .set(
        {
          productName: productData.title,
          price: productData.price,
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
      price: '',
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
    <div className=" bg-pureWhite p-8">
      <SweetAlert
        title=''
        show={loading}
        showConfirm={false}
        closeOnClickOutside
        onCancel={() => setloading(false)}
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="bg-blue bg-opacity-70 rounded-3xl px-32 py-10 shadow-md ">
          <FontAwesomeIcon
            icon="spinner"
            className="text-white mb-5"
            pulse
            size="7x"
          />
          <h1 className="text-white m-3 mt-4 text-3xl">{t('loading')}</h1>
        </div>
      </SweetAlert>

      <Container className="Box border rounded border-black " >
                <Row>
                    <Col className="tcol">
                    <h1 className="title">Add New Donation</h1>
                    </Col>
                </Row>
                <Row>
                <Col md='6'>
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlfor="Title" className="messages">
          Title
      </Form.Label>
      <Form.Control
                  
                 
                
                  type="text"
                  name="title"
                  required
                  value={productData.title}
                  onChange={handleChnage}
                  className="border-b-2 border-blue  p-3  md:text-xl w-full focus:border-darkBlue focus:outline-none"
                />
                <br />
                                <Form.Label
                  htmlFor="price"
                  className="md:text-xl text-blue font-semibold"
                >
                  Quantity
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChnage}
                  className="border-b-2 border-blue  p-3  md:text-xl w-full focus:border-darkBlue focus:outline-none"
                />
                <br/>          
                <Form.Label
                  htmlFor="type"
                  className="md:text-xl text-blue font-semibold "
                >
                 Type
                </Form.Label>
                <br />
                <div className="inline-flex mt-2 text-center ">
                  <Form.Label htmlFor="Crafted">
                    <Form.Control
                      type="radio"
                      required
                      name="itemType"
                      id="Crafted"
                      className="hidden"
                      onChange={handleChnage}
                    />
                      {t('footer.crafted')}
                  </Form.Label>
                  <Form.Label htmlFor="Used">
                    <Form.Control
                      type="radio"
                      required
                      name="itemType"
                      id="Used"
                      className="hidden"
                      onChange={handleChnage}
                    />
                    Used
                                      </Form.Label>
                  <Form.Label htmlFor="Donated">
                    <Form.Control
                      type="radio"
                      required
                      name="itemType"
                      id="Donated"
                      className="hidden"
                      onChange={handleChnage}
                    />
                      {t('footer.donated')}
                  </Form.Label>
                </div>
              <br/>
                <Form.Label
                  htmlFor="categories"
                  className="md:text-xl text-blue font-semibold"
                >
                  {t('additem.itemcate')}
                </Form.Label>
                <br />

                <div className="grid grid-cols-2 gap-4 text-center lg:grid-cols-3 xl:grid-cols-4">
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
                        row="1"
                        className="Form.Label-checked:bg-blue Form.Label-checked:border-blue Form.Label-checked:shadow-none Form.Label-checked:text-white hover:bg-opacity-25  hover:bg-blue  shadow-md      border border-grey bg-opacity-25 font-bold py-2 px-3 md:px-6 rounded-xl transition duration-300 ease-in-out hover:shadow-none"
                      >
                        {cate.value}
                      </div>
                    </Form.Label>
                  ))}
                </div>
                <br/>

            <div className="grid gap-10 md:col-span-5">
              <div className=" p-12 item-center border-2 border-blue border-dashed rounded-3xl text-center">
                <div className="grid  pb-4 p-1   ">
                  <FontAwesomeIcon
                    icon="images"
                    className="fa-3x my-3 text-blue justify-self-center"
                  />
                  {Images[0] ? (
                    Images.map((img, index) => {
                      return (
                        <div className="m-1 grid grid-cols-12  rounded   border px-0  ">
                          <p className="bg-blue rounded-l inline py-1   text-white text-center col-span-1">
                            {index + 1}
                          </p>
                          <p className="px-2 self-center text-left col-span-10 overflow-hidden">
                            {img.name}
                          </p>

                          <button
                            type="button"
                            className="text-red border-l focus:outline-none  justify-self-end px-2 rounded-r col-span-1"
                            onClick={() => removeImg(index)}
                          >
                            X
                          </button>
                        </div>
                      )
                    })
                  ) : (
                    <p>{t('additem.noImg')}</p>
                  )}
                </div>
                <Form.Label
                  htmlFor="file-upload"
                  className="relative cursor-pointer  rounded-md font-medium hover:shadow-none shadow-lg transition duration-300 ease-in-out hover:bg-darkBlue text-white bg-blue py-2 px-2"
                >
                  <span>{t('additem.upload')}</span>
                  <Form.Control
                    id="file-upload"
                    name="imageForm.Control"
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    className="sr-only"
                    onChange={handleChnage}
                  />
                </Form.Label>
              </div>
<br/>
                <Form.Label
                  htmlFor="tel"
                  className="md:text-xl text-blue font-semibold"
                >
                  {' '}
                  {t('additem.phone')}
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="tel"
                  required
                  value={productData.tel}
                  className="border-b-2 border-blue  p-3   md:text-xl w-full focus:border-darkBlue focus:outline-none"
                  onChange={handleChnage}
                />
                <br/>

                <Form.Label
                  htmlFor="city"
                  className="md:text-xl text-blue font-semibold"
                >
                  {t('additem.city')}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  required
                  value={productData.city}
                  onChange={handleChnage}
                  className="border-b-2 border-blue  p-3   md:text-xl w-full focus:border-darkBlue focus:outline-none"
                />
              </div>
              <br/>
            <div className="md:col-span-11">
              <Form.Label
                htmlFor="Description"
                className="md:text-xl text-blue font-semibold"
              >
              description              </Form.Label>

              <Form.Control
              as="textarea" row="3"  type="text" 
                name="description"
                required
                value={productData.description}
                className="border-b-2 border-blue  py-3   md:text-xl w-full h-24  focus:border-darkBlue focus:outline-none"
                onChange={handleChnage}
              />
            </div>

            <div className="md:col-span-5  text-center">
              <Button
                type="submit"
                onClick={() => setloading(true)}
                className="py-2 px-4  m-1"
              >
                Submit
              </Button>
            </div>
            <div className="md:col-span-5  text-center">
              <Button
                value={t('additem.cancel')}
                type="button"
                onClick={() => history.goBack()}
                className="py-2 px-4 m-1 "
              >Cancel</Button>
            </div>
            </Form>

            </Col>
          </Row>
      </Container>
    </div>
  )
}
