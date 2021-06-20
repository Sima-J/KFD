import React from 'react'
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import swal from 'sweetalert'
import { db } from '../../Firebase'

export default function ProfileContentCard({
  title,
  content,
  seen,
  time,
  id,
  onClick,
}) {
  const history = useHistory()
  const { t } = useTranslation()
  function timing(date) {
    const now = moment()
    const then = moment(date)
    const seconds = now.diff(then, 'seconds')
    const week = `${parseInt(seconds / 604800, 10)}W `
    const day = `${parseInt((seconds % 604800) / 86400, 10)}D `
    const m = `${parseInt(((seconds % 604800) % 86400) / (60 * 60), 10)}h ago`
    const all = week + day + m
    return all
  }

  const deleteItem = (name, productId) => {
    swal({
      title: t('profile.deleting'),
      text: t('profile.deletingNote'),
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        db.collection('products')
          .doc(productId)
          .delete()
          .then(() => {
            onClick()
          })
        swal(`${name} ${t('profile.deleted')}`, {
          icon: 'success',
        })
      } else {
        swal(`${name}${t('profile.notDeleted')}`)
      }
    })
  }

  const handleClick = () => {
    history.push(`/donationdetails/${id}`)
  }

  return (
    <div className=" grid  md:px-20 md:mx-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-4   m-3 px-4 py-2 rounded-2xl border  shadow-inner bg-white">
        <div className="grid gap-2 max-h-40 overflow-auto col-span-2">
          <div className="font-bold text-xl capitalize"> {title}</div>
          <p className="">{content}</p>
          <hr className="md:hidden" />
        </div>

        <div className="justify-self-start md:justify-self-center grid gap-2 text-blue mt-2 md:mt-0    ">
          <div>
            <FontAwesomeIcon icon="clock" className="" /> {timing(time)}
          </div>
          <div>
            <FontAwesomeIcon icon="eye" className="mx-1" />
            {seen.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
        <div className="justify-self-end self-center ">
          <button
            type="button"
            className="bg-yellow px-4 py-1 rounded-full text-pureWhite hover:shadow-none focus:outline-none shadow-md  transition duration-300 ease-in-out "
            onClick={handleClick}
          >
            <FontAwesomeIcon icon="binoculars" />
          </button>
          <button
            type="button"
            className="bg-red mx-2 px-4 py-1 rounded-full text-white hover:shadow-none focus:outline-none shadow-md  transition duration-300 ease-in-out "
            onClick={() => {
              deleteItem(title, id)
            }}
          >
            <FontAwesomeIcon icon="trash-alt" />
          </button>
        </div>
      </div>
    </div>
  )
}

ProfileContentCard.defaultProps = {
  onClick: null,
  id: null,
  title: 'No Content',
  content: '',
  seen: 0,
  time: '',
}

ProfileContentCard.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  seen: PropTypes.number,
  time: PropTypes.string,
}
